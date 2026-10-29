import { toggleFavorito } from "../App";
import type { Character } from "../types/character";

function DetailedCard({character, favoritos, setFavoritos} : {character: Character, favoritos: Character[], setFavoritos: any})
{
    const isFavorite = favoritos.find(c => c.id === character.id);
    return (
        <div className="flex bg-white w-220 h-110 rounded-2xl shadow-lg">
            <img className="rounded-l-2xl" src={character.image} />
            <div className="flex flex-col p-5 pl-8 gap-3 mt-3 text-[#222a48] font-semibold">
                <h2 className="mb-2 text-4xl font-bold text-[#222a48]">{character.name}</h2>
                <p><span className="font-normal text-gray-500">Estado:</span> {character.status}</p>
                <p><span className="font-normal text-gray-500">Especie:</span> {character.species}</p>
                <p><span className="font-normal text-gray-500">Genero:</span> {character.gender}</p>
                <p><span className="font-normal text-gray-500">Origen:</span> {character.origin.name}</p>
                <p><span className="font-normal text-gray-500">Ubicacion:</span> {character.location.name}</p>
                <p className="mb-3"><span className="font-normal text-gray-500">Episodios:</span> {character.episode.length}</p>
                <button 
                    onClick={() => toggleFavorito(character, favoritos, setFavoritos)}
className={`hover:scale-103 ${isFavorite ? 'hover:bg-red-500 bg-red-400' : 'hover:bg-blue-500 bg-blue-400'} transition ease-in-out duration-200 cursor-pointer shadow-md w-50 h-12 rounded-xl`}>{isFavorite ? '★ quitar de favoritos' : '★ agregar a favoritos'}
                </button>
            </div>
        </div>
    );
}

export default DetailedCard;
