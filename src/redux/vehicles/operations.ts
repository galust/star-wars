import { createAsyncThunk } from '@reduxjs/toolkit';
import service from '../../service/service';
import { Vehicle } from './types';

const fetchVehicles = createAsyncThunk('fetchVehicles', async (urls: string[]) => {
    try {
        const Vehicles: Vehicle[] = [];
        for (const i of urls) {
            const { data } = await service({
                url: i,
                method: 'GET',
            });
            Vehicles.push(data);
        }
        return Vehicles;
    } catch (e) {
        return;
    }
});
export { fetchVehicles };
