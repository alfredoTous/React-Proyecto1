import { NavLink } from 'react-router';

function Header()
{

    const links = [
        {name: "Inicio",    to: "/"},
        {name: "Explorar",  to: "/explorar"},
        {name: "Favoritos", to: "/favoritos"},
        {name: "Contacto",  to: "contacto"}
    ];

    return (
        <header className="bg-[#0b1120] text-white flex justify-between px-15 py-5">
            <NavLink to="/">
                <h2 className="cursor-pointer text-[#22d3ee] text-2xl font-bold "><span>🌐 </span>Explorador</h2>
            </NavLink>

            <nav>
                <ul className="flex gap-4 font-semibold text-[#86898a]">
                    {links.map(l => {
                        return (
                            <li className='hover:text-white transition ease-in-out duration-300'>
                                <NavLink 
                                    to={l.to} 
                                    className={({ isActive }) => (isActive ? 'inline-block scale-110 text-white underline underline-offset-8 decoration-[#22d3ee]' : '')}
                                    >
                                    {l.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header
