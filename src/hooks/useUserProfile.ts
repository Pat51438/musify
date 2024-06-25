import { useState, useCallback } from 'react';
import { DataStore } from '@aws-amplify/datastore'; // Mise à jour ici
import { User, UserProfile } from '../models';

export const useUserProfile = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchUserProfile = useCallback(async (userId: string) => {
        setLoading(true);
        setError(null);
        try {
            const userProfileData = await DataStore.query(UserProfile, up => up.userProfileId.eq(userId));
            if (userProfileData.length > 0) {
                setUserProfile(userProfileData[0]);
                const userData = await DataStore.query(User, userProfileData[0].userProfileId);
                if (userData) {
                    setUser(userData);
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
            console.error("Erreur lors de la récupération du profil :", err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { userProfile, user, loading, error, fetchUserProfile };
};
