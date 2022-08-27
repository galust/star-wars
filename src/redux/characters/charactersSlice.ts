import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { fetchCharacters, fetchCharacterById } from './operations';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        resetStore(state) {
            state.selected = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.count = action.payload.count;
            state.data = action.payload.results;
            state.isLoading = false;
        });
        builder.addCase(fetchCharacters.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(fetchCharacters.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCharacterById.fulfilled, (state, action) => {
            state.selected = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchCharacterById.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(fetchCharacterById.pending, (state) => {
            state.isLoading = true;
        });
    },
});

//export const { setCharacters } = mainSlice.actions;
export default charactersSlice.reducer;
