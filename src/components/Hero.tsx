import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audioEnabled) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(() => {
        console.log("El usuario debe interactuar antes de reproducir el sonido.");
      });
    }
  }, [audioEnabled]);

  const handlePlayAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setAudioEnabled(true))
        .catch((err) => console.error("Error al reproducir el sonido:", err));
    }
  };

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Fondo parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/Hero/hero.gif')" }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neblina animada */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        src="/src/assets/Neblina/neblina.mp4"
        autoPlay
        loop
        muted
      />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-dead tracking-wider text-red-600 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Pendiente
        </motion.h1>

        <motion.p
          className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-dead text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          Pendiente
        </motion.p>

        {!audioEnabled && (
          <motion.button
            onClick={handlePlayAudio}
            className="mt-6 sm:mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-dead bg-red-700 hover:bg-red-800 rounded-md text-white font-semibold transition text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Activar sonido
          </motion.button>
        )}
      </div>

      {/* Sonido ambiental */}
      <audio ref={audioRef} src="/src/assets/sounds/hero.mp3" />
    </section>
  );
};

export default Hero;
