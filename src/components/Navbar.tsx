import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="w-full sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-dashed border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded flex items-center justify-center text-black font-bold">DS</div>
                    <div className="text-sm tracking-wider">Dev — <span className="uppercase text-xs opacity-70">Dead Space Fan</span></div>
                </Link>
                <div className="flex gap-4 items-center">
                    <Link to="/" className="hover:underline">Inicio</Link>
                    <Link to="/historia" className="hover:underline">Historia</Link>
                    <Link to="/galeria" className="hover:underline">Galería</Link>
                    <Link to="/notas" className="hover:underline">Notas del editor</Link>
                </div>
            </div>
        </nav>
    )
}
