import React, { useState } from "react";
// Importa tus imágenes aquí
import img1 from '../assets/Galeria/img1.jpg';
import img2 from '../assets/Galeria/img2.webp';
import img3 from '../assets/Galeria/img3.jpg';
import img4 from '../assets/Galeria/img4.jpg';
import img5 from '../assets/Galeria/img5.jpg';
import img6 from '../assets/Galeria/img6.jpeg';
import Fondo from "../assets/Fondo/Fondo.jpg"

export default function FeaturedImageGallery() {
    const data = [img1, img2, img3, img4, img5,img6];

    const [active, setActive] = useState(data[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            className="py-12 relative text-white"
            style={{
                backgroundImage: `url(${Fondo})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay oscuro con opacidad 60% */}
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl text-center font-dead font-bold mb-8">Galería</h2>

                <div className="grid gap-6">
                    {/* Imagen principal - Responsiva */}
                    <div
                        className="w-full overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setIsOpen(true)}
                    >
                        <img
                            src={active}
                            alt="Imagen destacada"
                            className="h-48 sm:h-64 md:h-[620px] lg:h-96 xl:h-[500px] w-full object-cover object-center"
                        />
                    </div>

                    {/* Miniaturas interactivas */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
                        {data.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`gallery-${idx + 1}`}
                                onClick={() => setActive(img)}
                                className={`h-16 sm:h-20 md:h-24 w-full rounded-lg cursor-pointer transition-transform duration-150 hover:scale-105 object-cover object-center ${active === img ? "ring-2 ring-red-600" : ""
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal/Popup */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={active}
                            alt="Imagen ampliada"
                            className="w-full h-full object-contain"
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}