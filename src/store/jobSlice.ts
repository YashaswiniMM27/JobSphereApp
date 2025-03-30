import { createSlice } from '@reduxjs/toolkit';

interface Job {
    id: number;
    title: string;
    body: string;
}

// Define initial state for job-related data
const initialState = {
    jobs: [] as Job[],
    selectedJob: null,
    loading: false,
    error: null,
};

// Create slice for job-related state management
const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
    // Action to set the list of jobs in state
    setJobs: (state, action) => {
        state.jobs = action.payload;
        },
        // Action to set the selected job in state
        selectJob: (state, action) => {
        state.selectedJob = action.payload;
        },
        // Action to set loading state
        setLoading: (state, action) => {
        state.loading = action.payload;
        },
        // Action to set error message in state
        setError: (state, action) => {
        state.error = action.payload;
        },
    },
});

export const { setJobs, selectJob, setLoading, setError } = jobSlice.actions;
export default jobSlice.reducer;
