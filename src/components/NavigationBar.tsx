import React, { useState } from 'react';
import styled from 'styled-components';
import useSpotify from '../services/SpotifyService';

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: #333;
    color: white;
`;

const NavbarTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const SearchButton = styled.button`
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
`;

const SearchResults = styled.div`
    margin-top: 10px;
    background-color: #444;
    padding: 10px;
    border-radius: 4px;
    max-height: 300px;
    overflow-y: auto;
`;

const ResultItem = styled.div`
    padding: 10px;
    border-bottom: 1px solid #555;
    cursor: pointer;
`;

const ResultItemName = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
`;

const ResultItemArtist = styled.p`
    margin: 0;
    font-size: 14px;
    color: #ccc;
`;

interface NavigationBarProps {
    onLogout: () => void;
    onSelectTrack: (track: any) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onLogout, onSelectTrack }) => {
    const { searchInput, setSearchInput, tracks, searchTracks } = useSpotify();

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = () => {
        searchTracks(searchInput);
    };

    return (
        <NavbarContainer>
            <NavbarTop>
                <div>
                    <h1>Musify</h1>
                </div>
                <div>
                    <SearchInput
                        type="text"
                        placeholder="Search music..."
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                    <SearchButton onClick={handleSearch}>Search</SearchButton>
                    <LogoutButton onClick={onLogout}>Logout</LogoutButton>
                </div>
            </NavbarTop>
            {tracks.length > 0 && (
                <SearchResults>
                    {tracks.map((track, index) => (
                        <ResultItem key={index} onClick={() => onSelectTrack(track)}>
                            <ResultItemName>{track.name}</ResultItemName>
                            <ResultItemArtist>{track.artists.map((artist: any) => artist.name).join(', ')}</ResultItemArtist>
                            {track.preview_url && (
                                <audio controls>
                                    <source src={track.preview_url} type="audio/mpeg" />
                                </audio>
                            )}
                        </ResultItem>
                    ))}
                </SearchResults>
            )}
        </NavbarContainer>
    );
};

export default NavigationBar;
