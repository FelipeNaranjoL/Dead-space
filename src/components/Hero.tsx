import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Fondo parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('../../public/Hero/hero.gif')" }}
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Neblina animada */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        src="../../public/Neblina/neblina.mp4"
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
          El horror despierta en el vacío del espacio
        </motion.h1>

        <motion.p
          className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-dead text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          Agarra tu cortador de plasma y sobrevive a tu peor pesadilla.
        </motion.p>
        <motion.button
          onClick={() => navigate("/historia")}
          className="mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-dead bg-red-700 hover:bg-red-800 rounded-md text-white font-semibold transition text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver más
        </motion.button>
      </div>

      {/* Sonido ambiental */}
    </section>
  );
};

export default Hero;