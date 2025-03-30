import axios from 'axios';

// Create an Axios instance with the base URL for API requests
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    });

    // Function to fetch job listings
    export const getJobListings = async () => {
    try {
        const response = await api.get('/posts');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch job listings');
    }
};
