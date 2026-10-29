import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailedCard from '../components/DetailedCard';

import { Link } from 'react-router';

import type { Character } from '../types/character';

function Detalle({favoritos, setFavoritos}: {favoritos: Character[], setFavoritos: any})
{
    const { id } = useParams();
    const [character, setCharacter] = useState<Character>();
    
    useEffect(() => {
        async function getCharacter(id: string) {
            let data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            let character = await data.json();
            setCharacter(character);
        }
        getCharacter(id!);
    }, [])
    
    return (
         <div className='flex-1 flex flex-col bg-[#eaeaea]'>
            <Link to={'/explorar'}
                className='flex items-center text-center pl-60 pt-15 text-[#0cb2d3] font-semibold'
            >
                ← volver a explorar
            </Link>
            <div className='flex flex-col items-center mt-10'>
                {character && <DetailedCard character={character} favoritos={favoritos} setFavoritos={setFavoritos}/>}
            </div>
         </div>
    )
}

export default Detalle;
