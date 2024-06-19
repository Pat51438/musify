import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
`;

const SearchInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    width: 300px;
`;

const LogoutButton = styled.button`
    padding: 8px 16px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

interface NavigationBarProps {
    onSearch: (query: string) => void;
    onLogout: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onSearch, onLogout }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
        <NavbarContainer>
            <div>
                <h1>Musify</h1>
            </div>
            <div>
                <SearchInput type="text" placeholder="Search music..." onChange={handleSearch} />
                <LogoutButton onClick={onLogout}>Logout</LogoutButton>
            </div>
        </NavbarContainer>
    );
};

export default NavigationBar;
