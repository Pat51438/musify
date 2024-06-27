import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
    fullname: string | null;
    photoUrl: string | null;
    updateUser: (newUsername: string | null, newPhotoUrl: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [fullname, setfullname] = useState<string | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);

    const updateUser = (newUsername: string | null, newPhotoUrl: string | null) => {
        setfullname(newUsername);
        setPhotoUrl(newPhotoUrl);
    };

    return (
        <UserContext.Provider value={{ fullname, photoUrl, updateUser }}>
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