import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3; // volumen moderado
            audio.loop = true;
            audio.play().catch(() => {
                console.log("El usuario debe interactuar antes de reproducir el sonido.");
            });
        }
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Fondo parallax */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/src/assets/hero-bg.jpg')" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Neblina animada */}
            <motion.div
                className="absolute inset-0 bg-cover opacity-50"
                style={{ backgroundImage: "url('/src/assets/fog-layer.png')" }}
                animate={{ x: [0, 50, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Capa oscura */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>

            {/* Contenido principal */}
            <div className="relative z-10 text-center px-6">
                <motion.img
                    src="/src/assets/logo.png"
                    alt="Dead Space Logo"
                    className="mx-auto mb-8 w-64"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                />

                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold tracking-wider text-red-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                >
                    WELCOME TO THE ISHIMURA
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1.5 }}
                >
                    A bordo de la nave minera USG Ishimura, los horrores acechan en la oscuridad.
                    Sobrevive... si puedes.
                </motion.p>
            </div>

            {/* Sonido ambiental */}
            <audio ref={audioRef} src="/src/assets/ambient-sound.mp3" />
        </section>
    );
};

export default Hero;
