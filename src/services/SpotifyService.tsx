import { useEffect, useState } from 'react';


const useSpotify = () => {
    const [accessToken, setAccessToken] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [tracks, setTracks] = useState<any[]>([]);

    useEffect(() => {
        const authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&client_secret=${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`,
        };

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then((result) => result.json())
            .then((data) => {
                setAccessToken(data.access_token);
            })
            .catch((error) => {
                console.error('Error fetching access token:', error);
            });
    }, []);


    const searchTracks = async (artistName: string) => {
        if (!accessToken) {
            console.error('No access token available');
            return;
        }

        const searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        };

        try {
            const artistID = await fetch(
                `https://api.spotify.com/v1/search?q=${artistName}&type=artist`,
                searchParameters
            )
                .then((response) => response.json())
                .then((data) => data.artists.items[0]?.id);

            if (!artistID) {
                console.error('Artist not found');
                return;
            }

            const tracks = await fetch(
                `https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=US`,
                searchParameters
            )
                .then((response) => response.json())
                .then((data) => data.tracks);

            setTracks(tracks);
        } catch (error) {
            console.error('Error searching tracks:', error);
        }
    };

    return {
        searchInput,
        setSearchInput,
        tracks,
        searchTracks,
    };
};

export default useSpotify;
