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
        <footer className="mt-12 border-t border-black py-6 text-center text-sm text-gray-500">
          Proyecto demo — placeholders usados para imágenes y logo.
          Tema inspirado en Dead Space — respeta derechos de propiedad intelectual al usar assets oficiales.
        </footer>
      </div>
    </BrowserRouter>
  )
}
