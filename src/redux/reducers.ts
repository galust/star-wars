import { combineReducers } from '@reduxjs/toolkit';
import charactersSlice from './characters';

export const reducers = () =>
    combineReducers({
        characters: charactersSlice.reducer,
    });
