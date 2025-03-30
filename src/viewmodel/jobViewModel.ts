import { Dispatch } from 'redux';  // Import Dispatch
import { setJobs, setLoading, setError } from '../store/jobSlice';
import { getJobListings } from '../services/jobServices';

// Fetch job listings using the API and dispatch actions to update the Redux store
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
