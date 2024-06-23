import React, { useState, useEffect } from 'react';
import { DataStore, Storage } from 'aws-amplify';
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
        }
    }, [user, resetForm]);

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPhotoFile(file);
        }
    };

    const uploadPhoto = async () => {
        if (photoFile && userId) {
            try {
                const result = await Storage.put(`${userId}_profile.jpg`, photoFile, {
                    contentType: 'image/jpeg',
                });
                return result.key;
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
                    await Storage.remove(user.photo);
                }
                alert('Profil supprimé avec succès !');
                resetForm(initialState);
                setIsEditing(false);
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
                    {user.photo && <img src={user.photo} alt="Profile" style={{width: '200px', height: '200px'}} />}
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