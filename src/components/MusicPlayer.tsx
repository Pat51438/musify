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
    selectedTrack: any;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songId, onPlay, onPause, onNext, onPrev, selectedTrack }) => {
    const [songWithAlbum, setSongWithAlbum] = useState<SongWithAlbum | null>(null);
    const [progress, setProgress] = useState<number>(0);

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

    const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgress(parseInt(event.target.value, 10));
    };

    return (
        <MusicPlayerContainer>
            {selectedTrack ? (
                <>
                    <AlbumImage src={selectedTrack.album?.images[0]?.url || ''} alt={selectedTrack.album?.name || ''} />
                    <h2>{selectedTrack.name}</h2>
                    <h3>{selectedTrack.artists.map((artist: any) => artist.name).join(', ')}</h3>
                    <audio controls src={selectedTrack.preview_url}>
                        Your browser does not support the audio element.
                    </audio>
                </>
            ) : (
                songWithAlbum && (
                    <>
                        <AlbumImage src={songWithAlbum.album?.image || ''} alt={songWithAlbum.album?.name || ''} />
                        <Controls>
                            <ControlButton onClick={onPrev}>Previous</ControlButton>
                            <ControlButton onClick={onPlay}>Play</ControlButton>
                            <ControlButton onClick={onPause}>Pause</ControlButton>
                            <ControlButton onClick={onNext}>Next</ControlButton>
                        </Controls>
                        <ProgressBar type="range" min="0" max="100" value={progress} onChange={handleProgressChange} />
                    </>
                )
            )}
        </MusicPlayerContainer>
    );
};

export default MusicPlayer;
