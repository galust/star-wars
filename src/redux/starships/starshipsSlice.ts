import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { fetchStarShips } from './operations';

export const starshipsSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        resetStore(state) {
            state.data = undefined;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStarShips.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchStarShips.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(fetchStarShips.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export default starshipsSlice.reducer;
