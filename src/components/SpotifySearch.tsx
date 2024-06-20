import React, { useState } from 'react';
import useSpotify from '../services/SpotifyService';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    justify-content: center;
`;

const Title = styled.h2`
    margin-right: 10px;
`;

const SearchInput = styled.input`
    width: 300px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    outline: none;
`;

const SearchButton = styled.button`
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0 4px 4px 0;
    background-color: cornflowerblue;
    color: white;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: dodgerblue;
    }
`;

const TrackContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const AlbumImage = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 10px;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
`;

const TracksList = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const NowPlaying = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SpotifySearch: React.FC = () => {
    const { searchInput, setSearchInput, tracks, searchTracks } = useSpotify();
    const [currentTrack, setCurrentTrack] = useState<any>(null);

    const handleSearch = () => {
        searchTracks(searchInput);
    };

    const handleTrackClick = (track: any) => {
        setCurrentTrack(track);
    };

    return (
        <Container>
            <TracksList>
                <SearchContainer>
                    <Title>Spotify Search</Title>
                    <SearchInput
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search for an artist..."
                    />
                    <SearchButton onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </SearchButton>
                </SearchContainer>
                <div>
                    {tracks.map((track, index) => (
                        <TrackContainer key={index} onClick={() => handleTrackClick(track)}>
                            <AlbumImage src={track.album?.images[0]?.url || ''} alt={track.name} />
                            <div>
                                <p>{track.name}</p>
                                <p>{track.artists.map((artist: any) => artist.name).join(', ')}</p>
                            </div>
                        </TrackContainer>
                    ))}
                </div>
            </TracksList>
            <NowPlaying>
                {currentTrack && (
                    <div>
                        <h3>Now Playing: {currentTrack.name}</h3>
                        <p>{currentTrack.artists.map((artist: any) => artist.name).join(', ')}</p>
                        <audio controls autoPlay>
                            <source src={currentTrack.preview_url} type="audio/mpeg" />
                        </audio>
                    </div>
                )}
            </NowPlaying>
        </Container>
    );
};

export default SpotifySearch;
