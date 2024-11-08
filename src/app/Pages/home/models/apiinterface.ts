export interface Apiinterface {
    affilation: string;
    deletedAt: string | null;
    description: string;
    gender: string;
    image: string;
    ki: string;
    maxKi: string;
    name: string;
    race: string;
}

export interface Apiitems {
    items: Apiinterface[]; 
    meta?: any;   
    links?: any;     
}

export interface Personaje {
    affilation: string;
    deletedAt: string | null;
    description: string;
    gender: string;
    image: string;
    ki: string;
    maxKi: string;
    name: string;
    race: string;
}