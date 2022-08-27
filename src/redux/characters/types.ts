export interface Characters {
    name: string;
    url: string;
}

export interface CharacterDetails {
    [prop: string]: string;
}

export interface CharactersState {
    data: Characters[];
    count: number;
    isLoading: boolean;
    selected?: CharacterDetails;
}
