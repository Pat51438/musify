import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Song, Album } from '../models';
import {DataStore} from "@aws-amplify/datastore";

const MusicPlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const AlbumImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
`;

const Controls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ControlButton = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
`;

const ProgressBar = styled.input`
    width: 100%;
    margin-top: 20px;
`;

interface SongWithAlbum {
    song: Song;
    album: Album | undefined;
}

interface MusicPlayerProps {
    songId: string;
    onPlay: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songId, onPlay, onNext, onPrev }) => {
    const [songWithAlbum, setSongWithAlbum] = useState<SongWithAlbum | null>(null);

    useEffect(() => {
        const fetchSongAndAlbum = async () => {
            const song = await DataStore.query(Song, songId);
            if (song) {
                const album = await song.album;
                setSongWithAlbum({ song, album });
            }
        };

        fetchSongAndAlbum();
    }, [songId]);

    if (!songWithAlbum) {
        return <div>Loading...</div>;
    }

    const { song, album } = songWithAlbum;

    return (
        <MusicPlayerContainer>
            <AlbumImage src={album?.image || ''} alt={album?.name || ''} />
            <Controls>
                <ControlButton onClick={onPrev}>Previous</ControlButton>
                <ControlButton onClick={onPlay}>Play</ControlButton>
                <ControlButton onClick={onNext}>Next</ControlButton>
            </Controls>
            <ProgressBar type="range" min="0" max="100" value="0" />
        </MusicPlayerContainer>
    );
};

export default MusicPlayer;
