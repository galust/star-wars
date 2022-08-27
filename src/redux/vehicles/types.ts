export interface Vehicle {
    [prop: string]: string;
}

export interface VehiclesState {
    data?: Vehicle[] | undefined;
    isLoading: boolean;
}
