import type { SetURLSearchParams } from "react-router";

export type PaginationInfo = {
    page              : number,
    setSearchParams   : SetURLSearchParams,
    totalPages        : number,
    paginationButtons : number[]
};

