import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getJobListings } from "../services/jobServices";

export interface Job {
    id: number;
    title: string;
    body: string;
}

export interface JobApplicationData {
    name: string;
    email: string;
    coverLetter: string;
    jobId: string | number;
}

interface JobState {
    jobs: Job[];
    selectedJob: Job | null;
    loading: boolean;
    error: string | null;
}

const initialState: JobState = {
    jobs: [],
    selectedJob: null,
    loading: false,
    error: null,
};

// ✅ Fetch Jobs Async Thunk
export const fetchJobs = createAsyncThunk<Job[], void>(
    "job/fetchJobs",
    async (_, { rejectWithValue }) => {
        try {
            const data = await getJobListings();
            return data.map((job: any) => ({
                id: job.id,
                title: job.title,
                body: job.body,
            }));
        } catch (error) {
            return rejectWithValue("Failed to load jobs");
        }
    }
);

const jobSlice = createSlice({
    name: "job",
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
        removeJobFromListing: (state, action: PayloadAction<number>) => {
            state.jobs = state.jobs.filter((job) => job.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobs.fulfilled, (state, action: PayloadAction<Job[]>) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setJobs, selectJob, setLoading, setError, removeJobFromListing } =
    jobSlice.actions;
export default jobSlice.reducer;
