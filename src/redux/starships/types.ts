export interface Starship {
    [prop: string]: string;
}

export interface StarshipsState {
    data: Starship[] | undefined;
    isLoading: boolean;
}
