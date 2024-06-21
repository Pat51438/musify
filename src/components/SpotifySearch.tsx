import React, { useState } from 'react';
import useSpotify from '../services/SpotifyService';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';
import PlaylistComponent from "./Playlist";

const AddToPlaylistButton = styled.button`
    padding: 5px 10px;
    background-color: #1db954;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1ed760;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: calc(100vh - 60px); // Ajustez selon la hauteur de votre barre de navigation
`;

const Column = styled.div`
  flex: 1;
  margin: 0 10px;
  overflow-y: auto;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Title = styled.h2`
    margin-right: 10px;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
`;

const SearchButton = styled.button`
    padding: 10px;
    background-color: #1db954;
    color: white;
    border: none;
    cursor: pointer;
`;

const TrackContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e9ecef;
    }
`;

const AlbumImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 4px;
`;

const TracksList = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const NowPlaying = styled.div`
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TrackInfo = styled.div`
  flex-grow: 1;
  margin-left: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SpotifySearch: React.FC = () => {
    const { searchInput, setSearchInput, tracks, searchTracks } = useSpotify();
    const [currentTrack, setCurrentTrack] = useState<any>(null);
    const [playlist, setPlaylist] = useState<any[]>([]);

    const handleSearch = () => {
        searchTracks(searchInput);
    };

    const handleTrackClick = (track: any) => {
        setCurrentTrack(track);
    };

    const addToPlaylist = (track: any) => {
        setPlaylist(prevPlaylist => [...prevPlaylist, track]);
    };

    const handleTrackContainerClick = (track: any, event: React.MouseEvent) => {
        // Vérifie si le clic n'était pas sur le bouton "Add to Playlist"
        if (!(event.target as Element).closest('button')) {
            handleTrackClick(track);
        }
    };


    return (
        <Container>
            <Column>
                <SearchContainer>
                    <SearchInput
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Search for an artist..."
                    />
                    <SearchButton onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} /> Search
                    </SearchButton>
                </SearchContainer>
                {tracks.map((track, index) => (
                    <TrackContainer
                        key={index}
                        onClick={(e) => handleTrackContainerClick(track, e)}
                    >
                        <AlbumImage
                            src={track.album?.images[0]?.url || ''}
                            alt={track.name}
                        />
                        <TrackInfo>
                            <p>{track.name}</p>
                            <p>{track.artists.map((artist: any) => artist.name).join(', ')}</p>
                        </TrackInfo>
                        <AddToPlaylistButton onClick={() => addToPlaylist(track)}>
                            <FontAwesomeIcon icon={faPlus} /> Add
                        </AddToPlaylistButton>
                    </TrackContainer>
                ))}
            </Column>
            <Column>
                <NowPlaying>
                    {currentTrack ? (
                        <>
                            <h3>Now Playing: </h3>
                            <p>{currentTrack.name}</p>
                            <p>{currentTrack.artists.map((artist: any) => artist.name).join(', ')}</p>
                            <audio controls autoPlay style={{width: '100%'}}>
                                <source src={currentTrack.preview_url} type="audio/mpeg" />
                            </audio>
                        </>
                    ) : (
                        <p>Select a track to play</p>
                    )}
                </NowPlaying>
            </Column>
            <Column>
                <PlaylistComponent
                    playlist={playlist}
                    onTrackClick={handleTrackClick}
                />
            </Column>
        </Container>
    );
};





export default SpotifySearch;