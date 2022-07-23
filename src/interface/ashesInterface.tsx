// Generated by https://quicktype.io

export interface AshesResponse {
    success: boolean;
    count:   number;
    total:   number;
    data:    AshesData[];
}

export interface AshesData {
    id:          string;
    name:        string;
    image:       null | string;
    description: string;
    affinity:    string;
    skill:       null | string;
}