import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
    username: string | null;
    photoUrl: string | null;
    updateUser: (newUsername: string | null, newPhotoUrl: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [username, setUsername] = useState<string | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);

    const updateUser = (newUsername: string | null, newPhotoUrl: string | null) => {
        setUsername(newUsername);
        setPhotoUrl(newPhotoUrl);
    };

    return (
        <UserContext.Provider value={{ username, photoUrl, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};