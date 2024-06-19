// src/components/Playlist.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {DataStore} from "@aws-amplify/datastore";
import {Song, Title, Artist} from "../models";

interface SongWithArtistAndTitle  {
    song: Song;
    artist: Artist | undefined;
    title: Title | undefined;
}

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const PlaylistComponent: React.FC = () => {
    const [songs, setSongs] = useState<SongWithArtistAndTitle[]>([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const playlistSongs = await DataStore.query(Song);
            // Resolve the AsyncItem fields
            const songsWithArtistAndTitle: SongWithArtistAndTitle[]= await Promise.all(
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

                    <span>{song.title?.name}</span>
                    <span>{song.artist?.artistName}</span>

                </SongItem>
            ))}
        </PlaylistContainer>
    );
};

export default PlaylistComponent;
