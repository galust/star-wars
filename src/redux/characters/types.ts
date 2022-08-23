export interface Characters {
    name: string;
    url: string;
}

export interface CharactersState {
    data: Characters[];
    count?: number;
    isLoading: boolean;
}
