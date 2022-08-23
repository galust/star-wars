import type { RootState } from '../store';
const selectCharacters = (state: RootState) => state.characters.data;
const selectLoading = (state: RootState) => state.characters.isLoading;

export const charactersSel = {
    selectCharacters,
    selectLoading,
};
