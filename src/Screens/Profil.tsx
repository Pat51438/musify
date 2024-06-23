import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { uploadData, remove, getUrl } from '@aws-amplify/storage';
import { User, UserProfile } from '../models';
import { getCurrentUser } from "aws-amplify/auth";
import { useForm } from '../hooks/useForm';
import { useUserProfile } from '../hooks/useUserProfile';
import FormInput from '../components/FormInput';

const Profile = () => {
    const { userProfile, user, loading, error, fetchUserProfile } = useUserProfile();
    const [userId, setUserId] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);

    const initialState = {
        name: '',
        username: '',
        photo: '',
    };

    const { values, handleChange, resetForm } = useForm(initialState);

    useEffect(() => {
        getCurrentUser().then(user => {
            const { username } = user;
            setUserId(username);
            fetchUserProfile(username);
        });
    }, [fetchUserProfile]);

    useEffect(() => {
        if (user) {
            resetForm({
                name: user.name || '',
                username: user.username || '',
                photo: user.photo || '',
            });
            if (user.photo) {
                getPhotoUrl(user.photo);
            }
        }
    }, [user, resetForm]);

    const getPhotoUrl = async (key: string) => {
        try {
            const result = await getUrl({ key });
            setPhotoUrl(result.url.toString());
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'URL de la photo:', error);
        }
    };
    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPhotoFile(file);
        }
    };

    const uploadPhoto = async () => {
        if (photoFile && userId) {
            const key = `${userId}_profile.jpg`;
            try {
                await uploadData({
                    key: key,
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
                await DataStore.save(
                    User.copyOf(user, updated => {
                        updated.name = values.name;
                        updated.username = values.username;
                        updated.photo = photoKey;
                    })
                );
            } else if (userId) {
                const newUser = await DataStore.save(
                    new User({
                        userID: userId,
                        ...values,
                        photo: photoKey,
                    })
                );

                await DataStore.save(
                    new UserProfile({
                        userProfileId: newUser.id,
                        user: newUser
                    })
                );
            }

            alert('Profil sauvegardé avec succès !');
            setIsEditing(false);
            fetchUserProfile(userId!);
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
                setIsEditing(false);
                setPhotoUrl(null);
            } catch (error) {
                console.error('Erreur lors de la suppression du profil :', error);
                alert('Une erreur est survenue lors de la suppression du profil.');
            }
        }
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.message}</div>;

    return (
        <div>
            <h2>{user ? 'Votre profil' : 'Créer un nouveau profil'}</h2>
            {!isEditing && user ? (
                <div>
                    <p>Nom: {user.name}</p>
                    <p>Nom d'utilisateur: {user.username}</p>
                    {photoUrl && <img src={photoUrl} alt="Profile" style={{width: '200px', height: '200px'}} />}
                    <button onClick={() => setIsEditing(true)}>Modifier</button>
                    <button onClick={handleDelete}>Supprimer le profil</button>
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
                    <div>
                        <label htmlFor="photo">Photo de profil:</label>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handlePhotoChange}
                            accept="image/*"
                        />
                    </div>
                    <button type="submit">
                        {user ? 'Enregistrer les modifications' : 'Créer le profil'}
                    </button>
                    {isEditing && <button type="button" onClick={() => setIsEditing(false)}>Annuler</button>}
                </form>
            )}
        </div>
    );
};

export default Profile;