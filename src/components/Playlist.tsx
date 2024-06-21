import React, { useState } from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const PlaylistContainer = styled.div`
    height: 100%;
    overflow-y: auto;
`;

const SongItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const SongInfo = styled.div`
  flex-grow: 1;
`;

const PlayButton = styled.button`
  padding: 5px 10px;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1ed760;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const AlbumImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

interface PlaylistProps {
    playlist: any[];
    onTrackClick: (track: any) => void;
    onDeleteTrack: (trackId: string) => void;
}

const PlaylistComponent: React.FC<PlaylistProps> = ({ playlist, onTrackClick, onDeleteTrack }) => {
    return (
        <PlaylistContainer>
            <h2>Your Playlist</h2>
            {playlist.map((track) => (
                <SongItem key={track.id}>
                    <AlbumImage src={track.album?.images[0]?.url || ''} alt={track.name} />
                    <SongInfo onClick={() => onTrackClick(track)}>
                        <p>{track.name}</p>
                        <p>{track.artists.map((artist: any) => artist.name).join(', ')}</p>
                    </SongInfo>
                    <DeleteButton onClick={() => onDeleteTrack(track.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </DeleteButton>
                </SongItem>
            ))}
        </PlaylistContainer>
    );
};

export default PlaylistComponent;