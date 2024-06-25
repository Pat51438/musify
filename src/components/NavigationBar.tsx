import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { getUrl } from '@aws-amplify/storage';
import { getCurrentUser } from 'aws-amplify/auth';
import { DataStore } from '@aws-amplify/datastore';
import { User } from '../models';

interface NavigationBarProps {
    onLogout?: () => void;
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #282c34;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
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

    &:hover {
        background-color: #61dafb;
    }
`;

const TitleLink = styled(Link)`
    font-size: 1.5rem;
    margin: 0;
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #61dafb;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const Username = styled.span`
    color: white;
    font-weight: bold;
`;

const NavigationBar: React.FC<NavigationBarProps> = ({ onLogout }) => {
    const navigate = useNavigate();
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [photoLoading, setPhotoLoading] = useState(false);
    const [photoError, setPhotoError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const authUser = await getCurrentUser();
                const { username: authUsername } = authUser;

                const users = await DataStore.query(User, (u) => u.userID.eq(authUsername));
                if (users && users.length > 0) {
                    const user = users[0];
                    setUsername(user.name || authUsername);

                    if (user.photo) {
                        setPhotoLoading(true);
                        setPhotoError(null);
                        try {
                            console.log("Tentative de récupération de l'URL pour la clé:", user.photo);
                            const result = await getUrl({ key: user.photo });
                            console.log("Résultat complet de getUrl:", result);
                            if (result && result.url) {
                                console.log("URL obtenue:", result.url.toString());
                                setPhotoUrl(result.url.toString());
                            } else {
                                throw new Error("getUrl n'a pas retourné d'URL valide");
                            }
                        } catch (error) {
                            console.error('Erreur détaillée lors de la récupération de l\'URL de la photo:', error);
                            setPhotoError("Impossible de charger la photo");
                        } finally {
                            setPhotoLoading(false);
                        }
                    }
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleProfileClick = () => {
        navigate('/profile');
    };

    return (
        <Nav>
            <TitleLink to="/">Musify</TitleLink>
            <UserInfo>
                {photoLoading ? (
                    <div>Chargement...</div>
                ) : photoError ? (
                    <div>{photoError}</div>
                ) : photoUrl ? (
                    <ProfilePic src={photoUrl} alt="Profile" />
                ) : null}
                {username && <Username>{username}</Username>}
                <ButtonGroup>
                    <Button onClick={handleProfileClick}>Profile</Button>
                    {username && <Button onClick={onLogout}>Logout</Button>}
                </ButtonGroup>
            </UserInfo>
        </Nav>
    );
};

export default NavigationBar;