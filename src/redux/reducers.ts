import { combineReducers } from '@reduxjs/toolkit';
import charactersSlice from './characters';
import starshipsSlice from './starships';
import { vehiclesSlice } from './vehicles/vehiclesSlice';

export const reducers = () =>
    combineReducers({
        characters: charactersSlice.reducer,
        starships: starshipsSlice.reducer,
        vehicles: vehiclesSlice.reducer,
    });
