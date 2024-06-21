import React from 'react';
import styled from 'styled-components';

interface NavigationBarProps {
    onLogout?: () => void;
    username?: string;
    onCreateProfile: () => void;
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
    background-color:#21a1f1 ;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color:#61dafb ;
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    margin: 0;
`;

const NavigationBar: React.FC<NavigationBarProps> = ({ onLogout, username, onCreateProfile}) => {
    return (
        <Nav>
            <Title>Musify</Title>
            <ButtonGroup>
                <Button onClick={onCreateProfile}>Créer Profil</Button>
                <Button onClick={onLogout}>Logout</Button>
            </ButtonGroup>
        </Nav>
    );
}
export default NavigationBar;