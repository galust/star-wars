import { createAsyncThunk } from '@reduxjs/toolkit';
import service from '../../service/service';
import { Starship } from './types';

const fetchStarShips = createAsyncThunk('fetchStarShips', async (urls: string[]) => {
    try {
        const StarShips: Starship[] = [];
        for (const i of urls) {
            const { data } = await service({
                url: i,
                method: 'GET',
            });
            StarShips.push(data);
        }
        return StarShips;
    } catch (e) {
        return;
    }
});
export { fetchStarShips };
