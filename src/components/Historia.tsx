import Placeholder from "./Placeholder";

export default function Historia() {
    const items = [
        {
            title: "Nacimiento y concepto",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, porro.",
            mediaLabel: "Imagen 1",
        },
        {
            title: "El diseño de la nave Ishimura",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, saepe.",
            mediaLabel: "Video 2",
        },
        {
            title: "Legado e influencia",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, ratione.",
            mediaLabel: "Imagen 3",
        },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 space-y-10 md:space-y-16">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-gradient-to-r from-black/30 to-black/10 p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]`}
                    >
                        {/* BLOQUE DE IMAGEN / VIDEO */}
                        <div
                            className={`${idx % 2 === 1
                                ? "order-1 md:order-1 md:col-start-1 md:col-end-2" // En el contenedor 2, la imagen va primero
                                : "order-2 md:order-2 md:col-start-2 md:col-end-3" // En los demás, la imagen va al final
                                } flex justify-center`}
                        >
                            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                                <Placeholder label={item.mediaLabel} />
                            </div>
                        </div>

                        {/* BLOQUE DE TEXTO */}
                        <div
                            className={`${idx % 2 === 1
                                ? "order-2 md:order-2 md:col-start-2 md:col-end-3 text-left"
                                : "order-1 md:order-1 md:col-start-1 md:col-end-2 text-left"
                                } text-center md:text-left font-dead`}
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-red-600">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed max-w-xl mx-auto md:mx-0">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
