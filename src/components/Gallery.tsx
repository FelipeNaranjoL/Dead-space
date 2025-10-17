import Placeholder from './Placeholder'

export default function Gallery() {
    const imgs = Array.from({ length: 10 }).map((_, i) => ({ id: i, label: `Foto ${i + 1}` }))

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6">Galería</h2>

                <div className="overflow-hidden rounded-lg border border-gray-800 bg-black/20 p-4">
                    <div className="relative">
                        <div className="carousel-track will-change-transform">
                            {[...imgs, ...imgs].map((im, idx) => (
                                <div key={idx} className="carousel-item min-w-[220px] max-w-[220px] m-2">
                                    <div className="w-full h-40 rounded overflow-hidden border border-gray-700">
                                        <Placeholder label={im.label} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-400">Usa tus propios assets. Actualmente se usan placeholders. El carrusel es automático e infinito.</p>
            </div>

            <style>{`
        .carousel-track {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          animation: scroll-left 30s linear infinite;
          padding: 8px 0;
        }
        .carousel-item { flex: 0 0 auto; }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    )
}
