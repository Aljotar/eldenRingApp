// Generated by https://quicktype.io

export interface NpcResponde {
    success: boolean;
    count:   number;
    total:   number;
    data:    NpcData[];
}

export interface NpcData {
    id:       string;
    name:     string;
    image:    string;
    quote:    null | string;
    location: string;
    role:     null | string;
}