import type { Character } from '../types/character'

import { toggleFromFavoritos } from '../pages/Favoritos'

function Card({character}: {character: Character})
{


    return (
        <div className="flex flex-col justify-center w-100 bg-white rounded-2xl shadow-lg cursor-pointer transition duration-300 ease-in-out hover:scale-104 will-change-transform">
            <img className="w-120 h-50 object-cover rounded-t-2xl" src={character.image}/>
            <button onClick={()=>toggleFromFavoritos(character)}>★</button>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0f1c3d]">{character.name}</h3>
                <p className="text-[#8a92a2]">Estado: <span className="text-[#2a355c]">{character.status}</span></p>
                <p className="text-[#8a92a2]">Especie: <span className="text-[#2a355c]">{character.species}</span></p>
                <div className="w-fit mt-3 text-[#3e7a9d] bg-[#cffafe] px-3 rounded-xl">
                    <p>{character.location.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
