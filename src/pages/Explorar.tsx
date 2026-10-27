import { useEffect, useState } from 'react';
import Card from '../components/Card.tsx'

import { useSearchParams } from 'react-router';
import { GetCharacters } from '../api.ts';
import Pagination from '../components/Pagination.tsx'

import type { Character } from '../types/character.ts';
import type { ApiInfo } from '../types/apiInfo.ts';
import type { PaginationInfo } from '../types/paginationInfo.ts';

function Explorar()
{

    const [searchParams, setSearchParams] = useSearchParams();
    const [characters, setCharacters] = useState<Character[]>([]);
    const [apiInfo, setApiInfo] = useState<ApiInfo>();
    const [loadedApiPages, setLoadedApiPages] = useState<number>(0);
    
    const page : number = parseInt(searchParams.get("page") || "1");

    const pageMin : number = (page-1)*9;
    const pageMax : number = pageMin+9;
   
    const totalPages        : number   = apiInfo==null ? 0 : Math.ceil(apiInfo.count/9);
    const paginationButtons : number[] = apiInfo==null ? [] : Array.from({length: totalPages}, (_,i)=>i+1);
    
    const start = Math.max(0, Math.min(page - 3, totalPages - 5));
    const end = Math.min(start + 5, totalPages);


    const paginationInfo : PaginationInfo = {
        page              : page,
        setSearchParams   : setSearchParams,
        totalPages        : totalPages,
        start             : start,
        end               : end,
        paginationButtons : paginationButtons
    }

    useEffect(() => {
        async function loadCharacters(loadedApiPages: number) {
            try {
                let data = await GetCharacters(loadedApiPages);
                setApiInfo({count: parseInt(data.info.count), pages: parseInt(data.info.pages)});
                setCharacters(prev => [...prev, ...data.results]);
            } catch (error) {
                console.error(error);
            }
        }

        if (page*9 > characters.length) {
            const nextPage = loadedApiPages+1
            if (apiInfo && nextPage > apiInfo.pages) return;
            setLoadedApiPages(nextPage);
            loadCharacters(nextPage);
        }

    }, [page, loadedApiPages])


    return (
        <main className="flex-1">
            <section className="flex flex-col items-center gap-7 bg-linear-to-b from-[#10182b] via-[#172239] to-[#1d2b45] text-white p-12 pb-20">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-4xl font-bold">Explorar <span className="text-[#22d3ee]">Personajes</span></h2>
                    <p className="text-[#829a9f]">Datos obtenidos en tiempo real desde la API</p>
                </div>
                
                <div className="flex gap-3 text-black">
                    <div className="flex items-center">
                        <input placeholder="Buscar personaje..." className="box-border p-3 w-75 rounded-l-lg h-11 placeholder:text-gray-400 bg-white"/>
                        <button className="flex items-center justify-center box-border p-3 rounded-r-lg w-20 h-11 bg-[#22d3ee]">Buscar</button>
                    </div>
                    <select className="box-border h-11 p-3 rounded-lg bg-white">
                        <option>Todos los estados</option>
                        <option>Vivos</option>
                        <option>Muertos</option>
                    </select>
                </div>
            </section>

            <section className='bg-[#eaeaea] p-10'>
                <div className='flex justify-between'>
                    <h3 className='text-[#0f172a] font-semibold text-xl pb-10'>Resultados</h3>
                    <p className='text-[#758498]'>Mostrando {`${pageMin+1}-${page==totalPages ? apiInfo?.count : pageMax}`} de {apiInfo?.count} resultados</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-3 gap-12'>
                        {characters.slice(pageMin, pageMax).map((c) => {
                            return (
                                <Card key={c.id} character={c}/>
                            );
                        })}
                    </div>
                </div>

                <div className='mt-10 flex justify-center'>
                    <Pagination paginationInfo={paginationInfo}/>
                </div>

            </section>
        </main>
    )
}

export default Explorar
