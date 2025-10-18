import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo/logo.svg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 z-40 backdrop-blur bg-black/30 border-b border-black text-white">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-16 sm:w-20 h-10 flex items-center justify-center">
                        <img src={Logo} alt="Logo" className="w-full h-auto" />
                    </div>
                </Link>

                {/* Botón hamburguesa (solo visible en móviles) */}
                <button
                    className="md:hidden flex items-center justify-center text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Enlaces (visibles desde md en adelante) */}
                <div className="hidden md:flex gap-6 items-center font-dead text-lg">
                    <Link to="/" className="link-dirty hover:text-red-500">Inicio</Link>
                    <Link to="/historia" className="link-dirty hover:text-red-500">Historia</Link>
                    <Link to="/galeria" className="link-dirty hover:text-red-500">Galería</Link>
                    <Link to="/notas" className="link-dirty hover:text-red-500">Notas del editor</Link>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {menuOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-neutral-800">
                    <div className="flex flex-col gap-4 px-6 py-4 text-center font-dead text-base sm:text-lg">
                        <Link
                            to="/"
                            className="link-dirty hover:text-red-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/historia"
                            className="link-dirty hover:text-red-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Historia
                        </Link>
                        <Link
                            to="/galeria"
                            className="link-dirty hover:text-red-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Galería
                        </Link>
                        <Link
                            to="/notas"
                            className="link-dirty hover:text-red-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            Notas del editor
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
