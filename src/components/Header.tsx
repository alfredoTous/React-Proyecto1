
function Header()
{
    return (
        <header className="bg-[#0f172a] text-white flex justify-between px-15 py-5">
            <h1 className="text-[#22d3ee] text-2xl font-bold "><span>🌐 </span>Explorador</h1>
            <nav>
                <ul className="flex gap-4 font-semibold">
                    <li>Inicio</li>
                    <li>Explorar</li>
                    <li>Favoritos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
