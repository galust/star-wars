import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { CharactersState } from './types';
import { fetchCharacters } from './operations';

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state: CharactersState, action) => {
            state.count = action.payload.count;
            state.data = action.payload.results;
            state.isLoading = false;
        });
        builder.addCase(fetchCharacters.rejected, (state: CharactersState, action) => {
            state.isLoading = false;
        });
        builder.addCase(fetchCharacters.pending, (state: CharactersState, action) => {
            state.isLoading = true;
        });
    },
});

//export const { setCharacters } = mainSlice.actions;
export default charactersSlice.reducer;
