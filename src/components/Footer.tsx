import { Link } from 'react-router'

function Footer()
{
    return (
        <div className="flex justify-center bg-[#111] text-[#747674]">
            <p>
                © 2026 <Link to="/">Explorador</Link>
            </p>
        </div>
    )
}

export default Footer
