
function Inicio()
{
    return (
        <main className="bg-[#1e293b] text-white flex flex-col flex-1 items-center pt-40 gap-3.5">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-5xl font-extrabold">Descubre el <span className="text-[#22d3ee]">Universo</span></h1>
                <p className="text-[#829a9f] text-center w-105 mb-3">Explora datos fascinantes de tu API favorita. Busca, filtra y guarda tus favoritos.</p>
            </div>
            <button className="bg-[#06b6d4] w-43 h-13 text-black font-semibold rounded-xl">Explorar ahora</button>
        </main>
    )
}

export default Inicio
