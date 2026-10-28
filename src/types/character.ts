export type Character = {
    id       : number;
    name     : string;
    status   : string;
    species  : string;
    image    : string;
    location : {name: string, url: string};
    gender   : string;
    episodes : number;
};
