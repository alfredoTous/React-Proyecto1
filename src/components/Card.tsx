import { toggleFavorito } from '../App';
import type { Character } from '../types/character'


function Card({character, favoritos, setFavoritos}: {character: Character, favoritos: Character[], setFavoritos: any})
{

    const isCharacterFavorite = favoritos && favoritos.find(c => c.id == character.id);

    return (
        <div className="flex flex-col justify-center w-100 bg-white rounded-2xl shadow-lg cursor-pointer transition duration-300 ease-in-out hover:scale-104 will-change-transform">
            <img className="w-120 h-50 object-cover rounded-t-2xl" src={character.image}/>
            <div className='border-2 border-gray-200 shadow-lg hover:bg-gray-50 hover:scale-115 transition ease-in-out duration-150 will-change-transform flex flex-col justify-center fixed top-3.5 right-5 bg-white rounded-full w-9 h-9'>
                <button onClick={() => toggleFavorito(character, favoritos, setFavoritos)}
                        className={`cursor-pointer text-lg ${isCharacterFavorite ? 'text-[#f4b72a]' : 'text-[#c3cbd7]'}`}
                >★
                </button>
            </div>
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
