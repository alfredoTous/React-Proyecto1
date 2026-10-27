import type { PaginationInfo } from "../types/paginationInfo";

import PaginationButton from "./PaginationButton";

function Pagination({paginationInfo}: {paginationInfo: PaginationInfo})
{

    const page = paginationInfo.page;
    const setSearchParams = paginationInfo.setSearchParams;
    const totalPages = paginationInfo.totalPages
    const start = paginationInfo.start;
    const end = paginationInfo.end
    const paginationButtons = paginationInfo.paginationButtons;

    return (
        <ul className='flex items-center gap-2.5'>
            <li>
                <button 
                    onClick={()=> setSearchParams({page: String(page-1)})} 
                    className='text-2xl cursor-pointer enabled:hover:scale-115 transition ease-in-out duration-150 disabled:bg-gray-300 disabled:text-gray-500 hover:text-[#0a3188] text-[#1a4bb8] rounded-lg'
                    disabled={page<=1}
                >
                    ◀
                </button>
            </li>
            {(page >= 4) && (
                <>
                    <PaginationButton n={1} page={page} setSearchParams={setSearchParams}/>
                    {start >= 1 && <li>...</li>}
                </>
            )}
            {paginationButtons.slice(start, end).map(n => {
                return (
                    <PaginationButton key={n} n={n} page={page} setSearchParams={setSearchParams} />
                )
            })}
            {end < totalPages - 1 && <li>...</li>}
            {(totalPages-page)>=3 && <PaginationButton n={totalPages} page={page} setSearchParams={setSearchParams}/>}
            <li>
                <button
                    onClick={() => setSearchParams({page: String(page+1)})}
                    className='text-2xl cursor-pointer enabled:hover:scale-115 transition ease-in-out duration-150 disabled:bg-gray-300 disabled:text-gray-500 rounded-lg hover:text-[#0a3188] text-[#1a4bb8]'
                    disabled={page>=totalPages}
                >
                    ▶
                </button>
            </li>
        </ul>

    );
}

export default Pagination;
