import type { RootState } from '../store';
const selectStarShips = (state: RootState) => state.starships.data;
const selectLoading = (state: RootState) => state.starships.isLoading;

export const starshipsSel = {
    selectStarShips,
    selectLoading,
};
