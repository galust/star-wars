import { createAsyncThunk } from '@reduxjs/toolkit';
const fetchCharacters = createAsyncThunk('fetchCharacters', async () => {
    const response = await fetch(`https://swapi.dev/api/people/`);
    return await response.json();
});

export { fetchCharacters };
