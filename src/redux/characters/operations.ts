import { createAsyncThunk } from '@reduxjs/toolkit';
import service from '../../service/service';
import { fetchStarShips } from '../starships/operations';
import { fetchVehicles } from '../vehicles/operations';

interface CharactersParams {
    page: number;
    search?: string;
}

const fetchCharacters = createAsyncThunk('fetchCharacters', async (params: CharactersParams) => {
    const { page = 1, search } = params;
    const { data } = await service({
        endpoint: 'people',
        method: 'GET',
        params: {
            page,
            search,
        },
    });

    return data;
});

const fetchCharacterById = createAsyncThunk(
    'fetchCharacterById',
    async (id: string | undefined, thunkApi) => {
        const { data } = await service({
            endpoint: `people/${id}`,
            method: 'GET',
        });

        if (data.homeworld) {
            const { payload } = await thunkApi.dispatch(fetchPlanetByUrl(data.homeworld));
            data.planet = payload;
        }
        if (data.starships.length) {
            await thunkApi.dispatch(fetchStarShips(data.starships));
        }
        if (data.vehicles.length) {
            await thunkApi.dispatch(fetchVehicles(data.vehicles));
        }
        data.image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
        return data;
    },
);

const fetchPlanetByUrl = createAsyncThunk('fetchPlanetById', async (url: string) => {
    try {
        const { data } = await service({
            url,
            method: 'GET',
        });
        return data?.name;
    } catch (e) {
        return;
    }
});

export { fetchCharacters, fetchCharacterById, fetchPlanetByUrl };
