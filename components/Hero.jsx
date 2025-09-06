'use client';
import React from 'react';
import { FaArrowRight, FaFire, FaPlay } from "react-icons/fa";
import { motion } from 'framer-motion';

const Hero = () => {
  // Variantes para la animación escalonada del contenedor de texto
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  // Variantes para los elementos de texto individuales
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };

  // Variantes para la animación del título letra por letra
  const titleContainerVariants = {
    hidden: {
      // El contenedor del título no necesita una animación propia,
      // solo orquestar la de sus hijos (las letras).
    },
    show: {
      transition: {
        staggerChildren: 0.05, // Retraso entre cada letra
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8], // Misma curva de animación para consistencia
      },
    },
  };

  const titleLines = ["Unleash", "Your Inner", "Athlete"];

  return (
    <section className="bg-grey-50 xl:h-[1064px] bg-[url(/assets/img/hero/bg.png)] bg-no-repeat bg-[60%] md:bg-right-bottom xl:bg-right">
      <div className="container mx-auto flex items-center h-full">
        <div className="relative flex flex-col xl:flex-row items-center w-full">
          
          {/* text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-[760px] mb-8 md:mb-0 flex flex-col items-center xl:items-start"
          >
            {/* badge & text */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
              <div className="bg-accent text-primary flex items-center gap-2 py-2 px-4 rounded-full">
                <FaFire />
                <p className="font-semibold">New</p>
              </div>
              <p>Premium Sports Apparel for Peak Performance</p>
            </motion.div>
            {/* h1 */}
            <motion.h1
              variants={titleContainerVariants}
              className="h1 mb-[40px] text-center xl:text-left"
            >
              {titleLines.map((line, lineIndex) => (
                // Usamos un fragmento para no añadir nodos extra que interfieran con la animación
                <React.Fragment key={lineIndex}>
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${lineIndex}-${charIndex}`}
                      variants={letterVariants}
                      className="inline-block" // Necesario para que 'transform: y' funcione
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  {/* 
                    Después de renderizar todas las letras de una línea, comprobamos si no es la última línea 
                    y si no lo es, añadimos un <br /> para forzar el salto de línea.
                  */}
                  {lineIndex < titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>
            {/* btns */}
            <motion.div variants={itemVariants} className="flex flex-col xl:flex-row gap-10 mb-32 md:mb-0">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-accent">
                <div className="flex items-center gap-2">
                  <span>Explore Collection</span>
                  <FaArrowRight className="" />
                </div>
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-[56px] font-medium text-primary flex items-center justify-center cursor-pointer">
                <div className="flex items-center gap-2">
                  <span>Watch Video</span>
                  <div className="bg-white text-primary rounded-full border-10 border-grey-200 p-4">
                    <FaPlay />
                  </div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* img */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="relative scale-125 md:scale-100 md:top-0 xl:absolute xl:-right-[100px] xl:-top-7" 
          >
            <img src="assets/img/hero/running.png" alt="" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero