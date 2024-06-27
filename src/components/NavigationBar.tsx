import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { getUrl } from '@aws-amplify/storage';
import { getCurrentUser } from 'aws-amplify/auth';
import { DataStore } from '@aws-amplify/datastore';
import { User } from '../models';
import { useTranslation } from 'react-i18next';
import { useUser } from './UserContext';
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
    font-size: 2.5rem;
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
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
`;

const Username = styled.span`
    color: white;
    font-weight: bold;
`;
const LanguageButton = styled(Button)`
    background-color: #21a1f1;
    &:hover {
        color: #61dafb;
    }
`;

const NavigationBar: React.FC<NavigationBarProps> = ({ onLogout }) => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { username, photoUrl, updateUser } = useUser();
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
                    updateUser(user.name || authUsername, null);

                    if (user.photo) {
                        setPhotoLoading(true);
                        setPhotoError(null);
                        try {
                            console.log(t('logPhotoKeyAttempt'), user.photo);
                            const result = await getUrl({ key: user.photo });
                            console.log(t('logGetUrlResult'), result);
                            if (result && result.url) {
                                console.log(t('logUrlObtained'), result.url.toString());
                                updateUser(user.name || authUsername, result.url.toString());
                            } else {
                                throw new Error(t('errorInvalidUrl'));
                            }
                        } catch (error) {
                            console.error(t('errorPhotoUrl'), error);
                            setPhotoError(t('errorLoadingPhoto'));
                        } finally {
                            setPhotoLoading(false);
                        }
                    }
                }
            } catch (error) {
                console.error(t('errorFetchingUserData'), error);
            }
        };

        fetchUserData();
    }, [t, updateUser]);

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <Nav>
            <TitleLink to="/">{t('appTitle')}</TitleLink>
            <UserInfo>
                {photoLoading ? (
                    <div>{t('loading')}</div>
                ) : photoError ? (
                    <div>{photoError}</div>
                ) : photoUrl ? (
                    <ProfilePic src={photoUrl} alt={t('profileAlt')} />
                ) : null}
                {username && <Username>{username}</Username>}
                <ButtonGroup>
                    <Button onClick={handleProfileClick}>{t('profile')}</Button>
                    {username && <Button onClick={onLogout}>{t('logout')}</Button>}
                    <LanguageButton onClick={toggleLanguage}>
                        {i18n.language === 'en' ? 'FR' : 'EN'}
                    </LanguageButton>
                </ButtonGroup>
            </UserInfo>
        </Nav>
    );
};

export default NavigationBar;