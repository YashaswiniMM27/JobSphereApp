import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Job {
    id: number;
    title: string;
    body: string;
    }
interface JobState {
    jobs: Job[];
    selectedJob: Job | null; // Update the type to allow null
    loading: boolean;
    error: string | null;
    }

    const initialState: JobState = {
    jobs: [],
    selectedJob: null,
    loading: false,
    error: null,
    };

    const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setJobs: (state, action: PayloadAction<Job[]>) => {
        state.jobs = action.payload;
        },
        selectJob: (state, action: PayloadAction<Job>) => {
        state.selectedJob = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
        state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        },
    },
});

export const { setJobs, selectJob, setLoading, setError } = jobSlice.actions;
export default jobSlice.reducer;
