import type { RootState } from '../store';
const selectCharacters = (state: RootState) => state.characters.data;
const selectLoading = (state: RootState) => state.characters.isLoading;
const selectCount = (state: RootState) => state.characters.count;
const selectCurrent = (state: RootState) => state.characters.selected;

export const charactersSel = {
    selectCharacters,
    selectLoading,
    selectCount,
    selectCurrent,
};
