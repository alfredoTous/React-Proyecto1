export type Character = {
    id       : number;
    name     : string;
    status   : string;
    species  : string;
    image    : string;
    origin   : {name: string, url: string};
    location : {name: string, url: string};
    gender   : string;
    episode : string[];
};
