import type { SetURLSearchParams } from "react-router";

export type PaginationInfo = {
    page              : number,
    setSearchParams   : SetURLSearchParams,
    totalPages        : number,
    start             : number,
    end               : number,
    paginationButtons : number[]
};

