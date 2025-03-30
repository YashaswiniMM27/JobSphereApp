// store.ts
import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobSlice';

// Create store
const store = configureStore({
    reducer: {
        job: jobReducer,
    },
});

// Export RootState and AppDispatch for type safety
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
