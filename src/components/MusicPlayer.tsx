// src/components/MusicPlayer.tsx
import React from 'react';
import styled from 'styled-components';
import {Song, Title, Artist} from "../models";
import {Album} from "../API";

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
    album: Album | undefined
}


interface MusicPlayerProps {
    song: Song;
    onPlay: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ song, onPlay, onNext, onPrev }) => {
    return (
        <MusicPlayerContainer>
            <AlbumImage src={song.album?.image} alt={song.album?.name} />
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
