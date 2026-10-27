import type { SetURLSearchParams } from "react-router";

function PaginationButton({n, page, setSearchParams}:{n:number, page:number, setSearchParams: SetURLSearchParams})
{
    return (
        <li>
            <button 
                className={`${page==n ? 'bg-[#1a4bb8]' : 'bg-gray-500'} hover:scale-105 hover:bg-[#0a3188] transition ease-in-out duration-200 cursor-pointer text-white w-7 h-10 rounded-lg`} 
                onClick={()=>setSearchParams({page: String(n)})}
            >
                {n}
            </button>
        </li>
    );
}

export default PaginationButton;
