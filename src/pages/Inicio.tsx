import { Link } from "react-router"

function Inicio()
{
    return (
        <main className="bg-linear-to-b from-[#10182b] via-[#172239] to-[#1d2b45] text-white flex flex-col flex-1 items-center pt-40 gap-3.5">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-extrabold">Descubre el <span className="text-[#22d3ee]">Universo</span></h1>
                <p className="text-[#829a9f] text-center w-105 mb-3">Explora datos fascinantes de tu API favorita. Busca, filtra y guarda tus favoritos.</p>
            </div>

            <Link to="/explorar" className="will-change-transform flex items-center justify-center bg-[#06b6d4] w-43 h-13 text-black font-semibold rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-103 hover:bg-[#049ab3]">Explorar ahora</Link>
        </main>
    )
}

export default Inicio
