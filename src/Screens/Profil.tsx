import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { User, UserProfile } from '../models';
import { getCurrentUser } from "aws-amplify/auth";


const Profile = () => {
    const [userProfileData, setUserProfileData] = useState<UserProfile | null>(null);
    const [userData, setUserData] = useState<User | null>(null);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [photo, setPhoto] = useState('');
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        getCurrentUser().then(user => {
            const { username } = user;
            setUserId(username);
            fetchUserProfile(username);
        })
    }, []);

    const fetchUserProfile = async (userId: string) => {
        try {
            const userProfileData = await DataStore.query(UserProfile, up => up.userProfileId.eq(userId));
            if (userProfileData.length > 0) {
                setUserProfileData(userProfileData[0]);
                const userData = await DataStore.query(User, userProfileData[0].userProfileId);
                if (userData) {
                    setUserData(userData);
                    setName(userData.name || '');
                    setUsername(userData.username || '');
                    setPhoto(userData.photo || '');
                }
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du profil :", error);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (userData) {
                // Mettre à jour le profil utilisateur
                await DataStore.save(
                    User.copyOf(userData, updated => {
                        updated.name = name;
                        updated.username = username;
                        updated.photo = photo;
                    })
                );
            } else if (userId) {
                // Créer un nouvel utilisateur
                const newUser = await DataStore.save(
                    new User({
                        userID: userId,
                        username,
                        name,
                        photo,
                    })
                );

                // Créer un nouveau UserProfile
                await DataStore.save(
                    new UserProfile({
                        userProfileId: newUser.id,
                        user: newUser
                    })
                );
            }

            alert('Profil sauvegardé avec succès !');
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du profil :', error);
            alert('Une erreur est survenue lors de la sauvegarde du profil.');
        }
    };

    const handleDelete = async () => {
        if (userProfileData && userData) {
            try {
                await DataStore.delete(userProfileData);
                await DataStore.delete(userData);
                alert('Profil supprimé avec succès !');
            } catch (error) {
                console.error('Erreur lors de la suppression du profil :', error);
                alert('Une erreur est survenue lors de la suppression du profil.');
            }
        }
    };

    return (
        <div>
            <h2>{userProfileData ? 'Modifier le profil' : 'Créer un nouveau profil'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nom:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Nom d'utilisateur:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    URL de la photo:
                    <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </label>
                <button type="submit">{userProfileData ? 'Enregistrer les modifications' : 'Créer le profil'}</button>
            </form>
            {userProfileData && <button onClick={handleDelete}>Supprimer le profil</button>}

        </div>
    );
};

export default Profile;
