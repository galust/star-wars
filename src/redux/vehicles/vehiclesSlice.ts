import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { fetchVehicles } from './operations';

export const vehiclesSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        resetStore(state) {
            state.data = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVehicles.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchVehicles.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(fetchVehicles.pending, (state) => {
            state.isLoading = true;
        });
    },
});

export default vehiclesSlice.reducer;
