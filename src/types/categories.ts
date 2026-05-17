export interface CableAttribute {
    id: string;
    name: string;
}

export interface Cable {
    id: string;
    name: string;
    attributes: CableAttribute[];
}