import { Dispatch } from 'redux';  // Import Dispatch
import { setJobs, setLoading, setError, selectJob, Job } from '../store/jobSlice';
import { getJobDetails, getJobListings, postJobApplication } from '../services/jobServices';

// Fetch job listings
export const fetchJobListings = () => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
        const jobs = await getJobListings();  // Get jobs using the API
        dispatch(setJobs(jobs));  // Dispatch jobs to the store
    } catch (error: unknown) {
        if (error instanceof Error) {
            dispatch(setError(error.message));  // If it's an Error, use its message
        } else {
            // If the error is not an instance of Error, handle it as a generic message
            dispatch(setError('An unknown error occurred.'));
        }
    } finally {
        dispatch(setLoading(false));  // Set loading to false once the operation completes
    }
};

// Function to fetch and dispatch selected job details
export const fetchJobDetails = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));  // Set loading state to true
    try {
        const jobDetails: Job = await getJobDetails(id);  // Fetch job details by id from API
        dispatch(selectJob(jobDetails));  // Dispatch the job details to Redux store
    } catch (error) {
        dispatch(setError(`Failed to fetch job details for ID: ${id}`));  // Dispatch error to Redux store
    } finally {
        dispatch(setLoading(false));  // Set loading state to false after request is completed
    }
};

// Async action to submit a job application
export const submitJobApplication = (applicationData: any) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));  // Set loading state to true
    try {
        await postJobApplication(applicationData);  // Submit the job application
        alert("Application submitted successfully!");  // Notify user
    } catch (error) {
        dispatch(setError("Failed to submit job application"));  // Dispatch error
    } finally {
        dispatch(setLoading(false));  // Reset loading state
    }
};