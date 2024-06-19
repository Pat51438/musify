import axios, { AxiosError } from 'axios';

const API_KEY = 'c65d7ee17dmshd4c90f189c1f089p1c0203jsn6539eb57f602';
const API_HOST = 'spotify23.p.rapidapi.com';

const spotifyApi = axios.create({
    baseURL: `https://${API_HOST}/`,
    headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
    }
});

export const searchSpotify = async (query: string) => {
    try {
        const response = await spotifyApi.get('search/', {
            params: {
                type: 'multi',
                offset: '0',
                limit: '10',
                numberOfTopResults: '5',
                q: query
            }
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                if (axiosError.response.status === 429) {
                    console.error('Too many requests. Please try again later.');
                } else if (axiosError.response.status === 403) {
                    console.error('Access forbidden. Please check your API key.');
                } else {
                    console.error('Error searching Spotify:', axiosError.response.data);
                }
            } else {
                console.error('Error searching Spotify:', axiosError.message);
            }
        } else {
            console.error('An unexpected error occurred:', error);
        }
        throw error;
    }
};
