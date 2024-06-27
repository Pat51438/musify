import React, { useEffect, useState, useRef } from 'react';
import useSpotify from '../services/SpotifyService';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import PlaylistComponent from "./Playlist";
import { useTranslation } from 'react-i18next';

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

const SearchInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
`;

const SearchButton = styled.button`
    padding: 10px;
    background-color: #21a1f1;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #61dafb;
    }
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

const TrackInfo = styled.div`
    flex-grow: 1;
    margin-left: 10px;
`;

const NowPlaying = styled.div`
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NowPlayingContent = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const NowPlayingImage = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 15px;
    border-radius: 4px;
`;

const NowPlayingInfo = styled.div`
    flex-grow: 1;
`;

const SpotifySearch: React.FC = () => {
    const { t} = useTranslation();
    const { searchInput, setSearchInput, tracks, searchTracks } = useSpotify();
    const [currentTrack, setCurrentTrack] = useState<any>(null);
    const [playlist, setPlaylist] = useState<any[]>(() => {
        const savedPlaylist = localStorage.getItem('playlist');
        return savedPlaylist ? JSON.parse(savedPlaylist) : [];
    });
    const audioRef = useRef<HTMLAudioElement>(null);
    //const { t } = useTranslation();

    useEffect(() => {
        localStorage.setItem('playlist', JSON.stringify(playlist));
    }, [playlist]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = currentTrack?.preview_url || '';
        }
    }, [currentTrack]);

    const handleSearch = () => {
        searchTracks(searchInput);
    };

    const handleTrackClick = (track: any) => {
        setCurrentTrack(track);
    };

    const handleDeleteTrack = (trackId: string) => {
        setPlaylist(prevPlaylist => prevPlaylist.filter(track => track.id !== trackId));
    };

    const addToPlaylist = (track: any) => {
        setPlaylist(prevPlaylist => {
            if (!prevPlaylist.some(t => t.id === track.id)) {
                return [...prevPlaylist, track];
            }
            return prevPlaylist;
        });
    };

    const handleTrackContainerClick = (track: any, event: React.MouseEvent) => {
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
                        placeholder={t('searchPlaceholder')}
                    />
                    <SearchButton onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} /> {t('searchButton')}
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
                            <FontAwesomeIcon icon={faPlus} /> {t('addButton')}
                        </AddToPlaylistButton>
                    </TrackContainer>
                ))}
            </Column>
            <Column>
                <NowPlaying>
                    {currentTrack ? (
                        <>
                            <NowPlayingContent>
                                <NowPlayingImage src={currentTrack.album?.images[0]?.url || ''} alt={currentTrack.name} />
                                <NowPlayingInfo>
                                    <h3>{t('nowPlaying')}:</h3>
                                    <p>{currentTrack.name}</p>
                                    <p>{currentTrack.artists.map((artist: any) => artist.name).join(', ')}</p>
                                </NowPlayingInfo>
                            </NowPlayingContent>
                            <audio controls autoPlay style={{ width: '100%' }} ref={audioRef}>
                                <source src={currentTrack.preview_url} type="audio/mpeg" />
                            </audio>
                        </>
                    ) : (
                        <p>{('selectTrack')}</p>
                    )}
                </NowPlaying>
            </Column>
            <Column>
                <PlaylistComponent
                    playlist={playlist}
                    onTrackClick={handleTrackClick}
                    onDeleteTrack={handleDeleteTrack}
                />
            </Column>
        </Container>
    );
};

export default SpotifySearch;
