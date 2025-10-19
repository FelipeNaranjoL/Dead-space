import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Historia from './components/Historia'
import Gallery from './components/Gallery'
import Notas from './components/Notas'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-gray-100">
        <main className="pt-6">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/notas" element={<Notas />} />
          </Routes>
        </main>
        <footer className="mt-20 border-t border-gray-800 bg-black py-10 text-gray-400 text-sm">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Columna izquierda */}
            <div className="text-center md:text-left space-y-2">
              <p className="text-base font-semibold text-red-600">
                © 2025 Felipe Naranjo
              </p>
              <p className="text-gray-500">
                Todos los derechos reservados.
              </p>
            </div>

            {/* Columna derecha */}
            <div className="text-center md:text-right space-y-2">
              <p className="text-gray-500">
                Proyecto personal sin fines de lucro.
              </p>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Creado con fines educativos y demostrativos.
                No busca generar ingresos ni suplantar material con derechos de autor.
              </p>
            </div>
          </div>
        </footer>


      </div>
    </BrowserRouter>
  )
}
