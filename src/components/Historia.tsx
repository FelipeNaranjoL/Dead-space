import Placeholder from "./Placeholder";
import Efigie from "../assets/Historia/img1.jpg"
import Issack from "../assets/Historia/img2.avif"
import dead from "../assets/Historia/img3.avif"
import Fondo from "../assets/Fondo/Fondo.jpg"

export default function Historia() {
    const items = [
        {
            title: "Ninguna ayuda llegara",
            text: "Una enorme nave minera del espacio profundo se oscurece después de desenterrar un artefacto extraño en un distante planeta.",
            mediaLabel: Efigie,
        },
        {
            title: "Armate de valor si quieres sobrevivir",
            text: "El ingeniero Isaac Clarke se embarca en la misión de reparación, solo para descubrir una pesadilla, un baño de sangre, la tripulación del buque horriblemente sacrificados e infectados por una plaga alienígena.",
            mediaLabel: Issack,
        },
        {
            title: "Deberas administrar bien tus recursos",
            text: "La correcta gestión de recursos será el principal factor determinante de tu supervivencia o muerte.",
            mediaLabel: dead,
        },
    ];

    return (
        <section
            className="py-12 sm:py-16 md:py-20 text-white relative"
            style={{
                backgroundImage: `url(${Fondo})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay oscuro con opacidad 60% */}
            <div className="absolute inset-0 bg-black/90"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 space-y-10 md:space-y-16 relative z-10">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-gradient-to-r from-black/30 to-black/10 p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]`}
                    >
                        {/* BLOQUE DE IMAGEN / VIDEO */}
                        <div
                            className={`${idx % 2 === 1
                                ? "order-1 md:order-1 md:col-start-1 md:col-end-2"
                                : "order-2 md:order-2 md:col-start-2 md:col-end-3"
                                } flex justify-center`}
                        >
                            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl overflow-hidden border border-gray-700 shadow-lg">
                                <img src={item.mediaLabel} />
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