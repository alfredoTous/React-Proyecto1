import { useEffect, useState } from 'react';

import Card from '../components/Card.tsx'
import { useSearchParams } from 'react-router';
import { GetCharacters } from '../api.ts';

import type {Character} from '../types/character'
import type { ApiInfo } from '../types/apiInfo.ts';
import type { PaginationInfo } from '../types/paginationInfo.ts';

import Pagination from '../components/Pagination';

// la idea es mostrar un componente de cargando si se filtra mientras todavia no estan todos los personajes

function Explorar()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [apiInfo, setApiInfo]       = useState<ApiInfo>();
    const [currentApiPage, setCurrentApiPage] = useState(1);

    const page : number = parseInt(searchParams.get('page') || '1');

    const cardsPerPage = 9;
    const pageMin : number = (page-1)*cardsPerPage;
    const pageMax : number = pageMin+cardsPerPage;

    // Get all characters page by page and save them on memory
    useEffect(() => {
        async function loadCharacters(page: number) {
            let data = await GetCharacters(page);
            setApiInfo({pages: data.info.pages, count: data.info.count});
            setCharacters((prev) => [...prev, ...data.results]);
        }

        if (apiInfo && currentApiPage > apiInfo.pages) return;

        loadCharacters(currentApiPage);
        const nextPage = currentApiPage+1;
        setCurrentApiPage(nextPage);
    }, [characters])

    // Handle filters
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const hasFilters = search != '' || status != '';

    useEffect(() => {
        setSearchParams({page: '1'});
    }, [search, status])


    // Calculate characters
    const filteredCharacters = characters.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) && (status == '' || c.status == status));
    const totalFilteredCharacters = filteredCharacters.length;


    // === PAGINATION VARS ===
    const totalPages : number = apiInfo==null ? 0 
                                : hasFilters  ? Math.ceil(totalFilteredCharacters/cardsPerPage)
                                              : Math.ceil(apiInfo.count/cardsPerPage);

    const paginationButtons : number[] = apiInfo==null ? [] : Array.from({length: totalPages}, (_,i)=>i+1);

    const paginationInfo : PaginationInfo = {
        page              : page,
        setSearchParams   : setSearchParams,
        totalPages        : totalPages,
        paginationButtons : paginationButtons
    }
    

    return (
        <main className="flex-1">
            <section className="flex flex-col items-center gap-7 bg-linear-to-b from-[#10182b] via-[#172239] to-[#1d2b45] text-white p-12 pb-20">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-4xl font-bold">Explorar <span className="text-[#22d3ee]">Personajes</span></h2>
                    <p className="text-[#829a9f]">Datos obtenidos en tiempo real desde la API</p>
                </div>
                
                <div className="flex gap-3 text-black">
                    <div className="will-change-transform hover:scale-103 transition ease-in-out duration-200 flex items-center">
                        <input onChange={(e)=>setSearch(e.target.value)} placeholder="Buscar personaje..." 
                               className="box-border p-3 w-75 rounded-l-lg h-11 placeholder:text-gray-400 bg-white"
                        />
                        <button className="flex items-center justify-center box-border p-3 rounded-r-lg w-20 h-11 bg-[#22d3ee]">Buscar</button>
                    </div>
                    <select value={status} onChange={(e)=>setStatus(e.target.value)} className="hover:scale-101 hover:bg-gray-100 cursor-pointer box-border h-11 p-3 rounded-lg bg-white">
                        <option value=''>Todos los estados</option>
                        <option value='Alive'>Vivos</option>
                        <option value='Dead'>Muertos</option>
                        <option value='unknown'>Desconocido</option>
                    </select>
                </div>
            </section>

            <section className='bg-[#eaeaea] p-10'>
                <div className='flex justify-between'>
                    <h3 className='text-[#0f172a] font-semibold text-xl pb-10'>Resultados</h3>
                    <p className='text-[#758498]'>
                        Mostrando {
                                apiInfo && (
                                    search ? `${pageMin+1}-${pageMax>totalFilteredCharacters ? totalFilteredCharacters : pageMax} de ${totalFilteredCharacters} resultados`
                                    : `${pageMin+1}-${apiInfo?.count<pageMax ? apiInfo?.count : pageMax } de ${apiInfo?.count} resultados`
                                )
                            }
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-3 gap-12'>
                        {(hasFilters ? filteredCharacters : characters).slice(pageMin, pageMax).map((c) => {
                                return (
                                    <Card key={c.id} character={c} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className='mt-10 flex justify-center'>
                    {<Pagination paginationInfo={paginationInfo}/>}
                </div>

            </section>
        </main>
    )
}

export default Explorar;
