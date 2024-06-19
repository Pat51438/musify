// src/components/SpotifySearch.tsx
import React, { useState } from 'react';
import { searchSpotify } from '../services/SpotifyService';

const SpotifySearch: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = async () => {
        try {
            const data = await searchSpotify(query);
            setResults(data.tracks.items); // Adjust according to the actual API response structure
        } catch (error) {
            console.error('Error fetching Spotify data:', error);
        }
    };

    return (
        <div>
            <h2>Spotify Search</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for music..."
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {results.map((result, index) => (
                    <div key={index}>
                        <p>{result.name}</p>
                        <p>{result.artists[0].name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpotifySearch;
