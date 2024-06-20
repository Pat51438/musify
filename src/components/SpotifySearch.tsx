import React, { useState } from 'react';
import useSpotify from '../services/SpotifyService';

const SpotifySearch: React.FC = () => {
    const { searchInput, setSearchInput, tracks, searchTracks } = useSpotify();

    const handleSearch = () => {
        searchTracks(searchInput);
    };

    return (
        <div>
            <h2>Spotify Search</h2>
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for an artist..."
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {tracks.map((track, index) => (
                    <div key={index}>
                        <p>{track.name}</p>
                        <p>{track.artists.map((artist: any) => artist.name).join(', ')}</p>
                        <audio controls>
                            <source src={track.preview_url} type="audio/mpeg" />
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpotifySearch;
