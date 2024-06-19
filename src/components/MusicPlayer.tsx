import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataStore } from '@aws-amplify/datastore';
import { Song, Album } from '../models';

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
    songId: string | null;
    onPlay: () => void;
    onPause: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songId, onPlay, onPause, onNext, onPrev }) => {
    const [songWithAlbum, setSongWithAlbum] = useState<SongWithAlbum | null>(null);

    useEffect(() => {
        const fetchSongAndAlbum = async () => {
            if (songId) {
                const song = await DataStore.query(Song, songId);
                if (song) {
                    const album = await song.album;
                    setSongWithAlbum({ song, album });
                }
            } else {
                setSongWithAlbum(null);
            }
        };

        fetchSongAndAlbum();
    }, [songId]);

    return (
        <MusicPlayerContainer>
            {songWithAlbum ? (
                <AlbumImage src={songWithAlbum.album?.image || ''} alt={songWithAlbum.album?.name || ''} />
            ) : (
                <AlbumImage src='' alt='No album' />
            )}
            <Controls>
                <ControlButton onClick={onPrev}>Previous</ControlButton>
                <ControlButton onClick={onPlay}>Play</ControlButton>
                <ControlButton onClick={onPause}>Pause</ControlButton>
                <ControlButton onClick={onNext}>Next</ControlButton>
            </Controls>
            <ProgressBar type="range" min="0" max="100" value="0" />
        </MusicPlayerContainer>
    );
};

export default MusicPlayer;
