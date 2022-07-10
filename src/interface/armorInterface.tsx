// Generated by https://quicktype.io

export interface ArmorResponse {
    success: boolean;
    count:   number;
    total:   number;
    data:    ArmorData[];
}

export interface ArmorData {
    id:          string;
    name:        string;
    image:       null | string;
    description: string;
    category:    Category;
    dmgNegation: DmgNegation[];
    resistance:  DmgNegation[];
    weight:      number;
}

export enum Category {
    Helm = "Helm",
    LegArmor = "Leg Armor",
}

export interface DmgNegation {
    name:   Name;
    amount: number;
}

export enum Name {
    Fire = "Fire",
    Focus = "Focus",
    Holy = "Holy",
    Immunity = "Immunity",
    Ligt = "Ligt",
    Magic = "Magic",
    Phy = "Phy",
    Pierce = "Pierce",
    Poise = "Poise",
    Robustness = "Robustness",
    Slash = "Slash",
    Strike = "Strike",
    Vitality = "Vitality",
}
