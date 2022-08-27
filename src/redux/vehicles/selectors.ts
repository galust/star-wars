import type { RootState } from '../store';
const selectVehicles = (state: RootState) => state.vehicles.data;
const selectLoading = (state: RootState) => state.vehicles.isLoading;

export const vehiclesSel = {
    selectVehicles,
    selectLoading,
};
