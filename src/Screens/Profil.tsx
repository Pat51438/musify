import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { uploadData, remove, getUrl } from '@aws-amplify/storage';
import { User, UserProfile } from '../models';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth';
import { useForm } from '../hooks/useForm';
import FormInput from '../components/FormInput';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useUser } from '../components/UserContext';


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
    const { t } = useTranslation();
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { updateUser, clearUser  } = useUser();

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
            console.error(t('authError'), error);
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
            console.error(t('fetchProfileError'), error);
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
                    console.error(t('fetchCurrentUserError'), error);
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

    useEffect(() => {
        if (isEditing && user) {
            resetForm({
                name: user.name || '',
                username: user.username || '',
                photo: user.photo || '',
            });
        }
    }, [isEditing, user]);
    const getPhotoUrl = async (key: string) => {
        try {
            const result = await getUrl({ key });
            setPhotoUrl(result.url.toString());
        } catch (error) {
            console.error(t('fetchPhotoUrlError'), error);
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
                console.error(t('uploadPhotoError'), error);
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
                        if (values.name !== user.name) updated.name = values.name;
                        if (values.username !== user.username) updated.username = values.username;
                        if (photoKey !== user.photo) updated.photo = photoKey;
                    })
                );
                setUser(updatedUser);
                const newPhotoUrl = photoKey ? await getUrl({ key: photoKey }) : null;
                updateUser(updatedUser.name, newPhotoUrl?.url.toString() || null);
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

                // Mise à jour du contexte utilisateur
                const newPhotoUrl = photoKey ? await getUrl({ key: photoKey }) : null;
                updateUser(newUser.name, newPhotoUrl?.url.toString() || null);
            }

            alert(t('profileSaveSuccess'));
            setIsEditing(false);

            if (userId) {
                await fetchUserProfile(userId);
            }
        } catch (error) {
            console.error(t('profileSaveError'), error);
            alert(t('profileSaveErrorMessage'));
        }
    };


    const handleDelete = async () => {
        console.log("Tentative de suppression. userProfile:", userProfile, "user:", user);
        if (userProfile) {
            try {
                await DataStore.delete(userProfile);
                console.log("UserProfile supprimé");
            } catch (error) {
                console.error("Erreur lors de la suppression de UserProfile:", error);
            }
        }
        if (user) {
            try {
                await DataStore.delete(user);
                console.log("User supprimé");
                if (user.photo) {
                    await remove({ key: user.photo });
                    console.log("Photo supprimée");
                }
            } catch (error) {
                console.error("Erreur lors de la suppression de User:", error);
            }
        }
        if (!userProfile && !user) {
            console.log("Aucun profil ou utilisateur à supprimer");
        }
        // Réinitialisation des états et du contexte utilisateur
        alert(t('profileDeleteSuccess'));
        resetForm(initialState);
        setUser(null);
        setUserProfile(null);
        setIsEditing(false);
        setPhotoUrl(null);
        clearUser();  // Appel de la nouvelle méthode pour réinitialiser l'utilisateur
    };

    if (loading) return <div>{t('loading')}</div>;
    if (error) return <div>{t('error')}: {error.message}</div>;

    if (!user && !loading) {
        return (
            <ProfileContainer>
                <h2>{t('noProfile')}</h2>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label={t('name')}
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <FormInput
                        label={t('username')}
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <FileInputContainer>
                        <FileInputLabel htmlFor="photo">{t('profilePhoto')}:</FileInputLabel>
                        <FileInput
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handlePhotoChange}
                            accept="image/*"
                        />
                    </FileInputContainer>
                    <Button type="submit">{t('createProfile')}</Button>
                </form>
            </ProfileContainer>
        );
    }

    return (
        <ProfileContainer>
            <h2>{user ? t('yourProfile') : t('createNewProfile')}</h2>
            {!isEditing && user ? (
                <div>
                    {photoUrl && <ProfileImage src={photoUrl} alt="Profile" />}
                    <p>{t('name')}: {user.name}</p>
                    <p>{t('username')}: {user.username}</p>
                    <Button onClick={() => setIsEditing(true)}>{t('edit')}</Button>
                    <Button onClick={handleDelete}>{t('deleteProfile')}</Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <FormInput
                        label={t('name')}
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <FormInput
                        label={t('username')}
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <FileInputContainer>
                        <FileInputLabel htmlFor="photo">{t('profilePhoto')}:</FileInputLabel>
                        <FileInput
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handlePhotoChange}
                            accept="image/*"
                        />
                    </FileInputContainer>
                    <Button type="submit">
                        {user ? t('saveChanges') : t('createProfile')}
                    </Button>
                    {isEditing && <Button type="button" onClick={() => setIsEditing(false)}>{t('cancel')}</Button>}
                </form>
            )}
        </ProfileContainer>
    );
}

export default Profile;
