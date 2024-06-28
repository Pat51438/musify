import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface UserContextType {
    fullname: string | null;
    photoUrl: string | null;
    updateUser: (newFullname: string | null, newPhotoUrl: string | null) => void;
    clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [fullname, setFullname] = useState<string | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);

    const updateUser = (newFullname: string | null, newPhotoUrl: string | null) => {
        setFullname(newFullname);
        setPhotoUrl(newPhotoUrl);
    };

    const clearUser = () => {
        setFullname(null);
        setPhotoUrl(null);
    };

    return (
        <UserContext.Provider value={{ fullname, photoUrl, updateUser, clearUser }}>
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
