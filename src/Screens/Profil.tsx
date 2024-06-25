import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { uploadData, remove, getUrl } from '@aws-amplify/storage';
import { User, UserProfile } from '../models';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import { useForm } from '../hooks/useForm';
import FormInput from '../components/FormInput';
import styled from 'styled-components';

const ProfileContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: white;
    background-color: #21a1f1;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-right: 1rem;

    &:hover {
        background-color: #61dafb;
    }
`;

const FileInputContainer = styled.div`
    margin-bottom: 1rem;
`;

const FileInputLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
`;

const FileInput = styled.input`
    display: block;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

interface FormValues {
    name: string;
    username: string;
    photo: string;
}

const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const initialState: FormValues = {
        name: '',
        username: '',
        photo: '',
    };

    const { values, handleChange, resetForm } = useForm<FormValues>(initialState);

    const checkAuthState = async () => {
        try {
            const session = await fetchAuthSession();
            setIsAuthenticated(session.tokens !== undefined);
        } catch (error) {
            console.error('Erreur d\'authentification:', error);
            setIsAuthenticated(false);
        }
    };

    const fetchUserProfile = async (username: string) => {
        try {
            setLoading(true);
            const users = await DataStore.query(User, (u) => u.userID.eq(username));
            if (users && users.length > 0) {
                const fetchedUser = users[0];
                setUser(fetchedUser);
                const profiles = await DataStore.query(UserProfile, (p) => p.userProfileId.eq(fetchedUser.id));
                if (profiles && profiles.length > 0) {
                    setUserProfile(profiles[0]);
                }
            }
        } catch (error) {
            console.error('Erreur lors de la récupération du profil utilisateur:', error);
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        checkAuthState();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            const loadCurrentUser = async () => {
                try {
                    const currentUser = await getCurrentUser();
                    const { username } = currentUser;
                    setUserId(username);
                    await fetchUserProfile(username);
                } catch (error) {
                    console.error('Erreur lors de la récupération de l\'utilisateur courant:', error);
                    setError(error as Error);
                    setLoading(false);
                }
            };

            loadCurrentUser();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (user && user.photo) {
            getPhotoUrl(user.photo);
        }
    }, [user]);

    const getPhotoUrl = async (key: string) => {
        try {
            console.log('Récupération de l\'URL de la photo pour la clé:', key);
            const result = await getUrl({ key });
            console.log('URL de la photo récupérée:', result.url.toString());
            setPhotoUrl(result.url.toString());
        } catch (error) {
            console.error('Erreur détaillée lors de la récupération de l\'URL de la photo:', error);
        }
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPhotoFile(file);
        }
    };

    const uploadPhoto = async (): Promise<string | null> => {
        if (photoFile && userId) {
            const key = `${userId}_profile.jpg`;
            try {
                await uploadData({
                    key,
                    data: photoFile,
                    options: {
                        contentType: 'image/jpeg',
                    }
                });
                return key;
            } catch (error) {
                console.error('Erreur lors du téléchargement de la photo:', error);
                throw error;
            }
        }
        return null;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            let photoKey = values.photo;
            if (photoFile) {
                photoKey = await uploadPhoto() || '';
            }

            if (user) {
                const updatedUser = await DataStore.save(
                    User.copyOf(user, updated => {
                        updated.name = values.name;
                        updated.username = values.username;
                        updated.photo = photoKey;
                    })
                );
                setUser(updatedUser);
            } else if (userId) {
                const newUser = await DataStore.save(
                    new User({
                        userID: userId,
                        ...values,
                        photo: photoKey,
                    })
                );

                const newUserProfile = await DataStore.save(
                    new UserProfile({
                        userProfileId: newUser.id,
                        user: newUser
                    })
                );

                setUser(newUser);
                setUserProfile(newUserProfile);
            }

            alert('Profil sauvegardé avec succès !');
            setIsEditing(false);

            if (userId) {
                await fetchUserProfile(userId);
            }
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du profil :', error);
            alert('Une erreur est survenue lors de la sauvegarde du profil.');
        }
    };

    const handleDelete = async () => {
        if (userProfile && user) {
            try {
                await DataStore.delete(userProfile);
                await DataStore.delete(user);
                if (user.photo) {
                    await remove({ key: user.photo });
                }
                alert('Profil supprimé avec succès !');
                resetForm(initialState);
                setUser(null);
                setUserProfile(null);
                setIsEditing(false);
                setPhotoUrl(null);
                setIsEditing(true);
            } catch (error) {
                console.error('Erreur lors de la suppression du profil :', error);
                alert('Une erreur est survenue lors de la suppression du profil.');
            }
        }
    };

    if (!isAuthenticated) {
        return <div>Veuillez vous connecter pour accéder à votre profil.</div>;
    }

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.message}</div>;

    if (!user && !loading) {
        return (
            <ProfileContainer>
                <h2>Vous n'avez pas encore de profil</h2>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Nom"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Nom d'utilisateur"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <FileInputContainer>
                        <FileInputLabel htmlFor="photo">Photo de profil:</FileInputLabel>
                        <FileInput
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handlePhotoChange}
                            accept="image/*"
                        />
                    </FileInputContainer>
                    <Button type="submit">Créer le profil</Button>
                </form>
            </ProfileContainer>
        );
    }

    return (
        <ProfileContainer>
            <h2>{user ? 'Votre profil' : 'Créer un nouveau profil'}</h2>
            {!isEditing && user ? (
                <div>
                    {photoUrl && <ProfileImage src={photoUrl} alt="Profile" />}
                    <p>Nom: {user.name}</p>
                    <p>Nom d'utilisateur: {user.username}</p>
                    <Button onClick={() => setIsEditing(true)}>Modifier</Button>
                    <Button onClick={handleDelete}>Supprimer le profil</Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label="Nom"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Nom d'utilisateur"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <FileInputContainer>
                        <FileInputLabel htmlFor="photo">Photo de profil:</FileInputLabel>
                        <FileInput
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handlePhotoChange}
                            accept="image/*"
                        />
                    </FileInputContainer>
                    <Button type="submit">
                        {user ? 'Enregistrer les modifications' : 'Créer le profil'}
                    </Button>
                    {isEditing && <Button type="button" onClick={() => setIsEditing(false)}>Annuler</Button>}
                </form>
            )}
        </ProfileContainer>
    );
}

export default Profile;
