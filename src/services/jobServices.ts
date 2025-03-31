import axios from 'axios';
import { Job, JobApplicationData } from '../store/jobSlice';

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

// Function to fetch job details by job ID
export const getJobDetails = async (id: number): Promise<Job> => {
    try {
        const response = await api.get(`/posts/${id}`);
        return response.data;
        } catch (error) {
        throw new Error(`Failed to fetch job details for ID: ${id}`);
        }
    };

// Function to submit a job application
export const postJobApplication = async (applicationData: JobApplicationData) => {
    try {
        console.log("Sending request to API with data:", applicationData);

        const response = await api.post("/posts", applicationData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("API request failed:", error);
        throw new Error("Failed to submit job application");
    }
};

