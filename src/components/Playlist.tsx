// src/components/Playlist.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataStore } from '@aws-amplify/datastore';
import { Song, Title, Artist } from '../models';

interface SongWithArtistAndTitle {
    song: Song;
    artist: Artist | undefined;
    title: Title | undefined;
}

const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #f8f9fa; /* Light gray background */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow */
`;

const SongItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #dee2e6;
    transition: background-color 0.3s ease;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: #f0f0f0;
    }
`;


const SongTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

const ArtistName = styled.span`
    color: #6c757d; /* Gray color for artist name */
`;

const PlaylistComponent: React.FC = () => {
    const [songs, setSongs] = useState<SongWithArtistAndTitle[]>([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const playlistSongs = await DataStore.query(Song);
            // Resolve the AsyncItem fields
            const songsWithArtistAndTitle: SongWithArtistAndTitle[] = await Promise.all(
                playlistSongs.map(async (song) => {
                    const artist = await song.artist;
                    const title = await song.title;
                    return { song, artist, title };
                })
            );
            setSongs(songsWithArtistAndTitle);
        };

        fetchSongs();
    }, []);

    return (
        <PlaylistContainer>
            {songs.map((song) => (
                <SongItem key={song.song.id}>
                    <SongTitle>{song.title?.name}</SongTitle>
                    <ArtistName>{song.artist?.artistName}</ArtistName>
                </SongItem>
            ))}
        </PlaylistContainer>
    );
};

export default PlaylistComponent;

