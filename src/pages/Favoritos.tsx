import type { Character } from "../types/character";
import Card from "../components/Card";
import { Link } from "react-router";


function Favoritos({favoritos, setFavoritos} : {favoritos: Character[], setFavoritos: any})
{

    return (
        <main className="p-15 flex-1 flex flex-col">
            <div className="ml-15 mb-10">
                <h2 className="text-4xl font-bold text-[#162240]">Mis Favoritos</h2>
                <p className="text-[#758498]">{favoritos.length} items guardados</p>
            </div>
            <div className="flex flex-col items-center">
                <section className={favoritos.length ? 'grid grid-cols-3 gap-12' : ''}>
                    {
                        favoritos.length ? favoritos.map((c) => <Card key={c.id} character={c} favoritos={favoritos} setFavoritos={setFavoritos}/>) 
                                         : (
                            <div className="mt-20 flex flex-col items-center justify-center">
                                <h2 className="p-7 text-[#c1cfdc] text-7xl">★</h2>
                                <h3 className="pb-3 text-xl text-[#657189]">No tienes favoritos guardados</h3>
                                <Link to={"/explorar"} className="text-[#3ac4e4]">Explorar y agregar algunos</Link>
                            </div>
                        )
                    }
                </section>
            </div>
        </main>
    )
}

export default Favoritos;
