"use client";

import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion";

// Variantes para la animación escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Retraso entre el título y el botón
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Cta = () => {
  return (
    <motion.section 
      className='mt-24 bg-accent py-20'
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className='container mx-auto'>
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <motion.h3 variants={itemVariants} className="h3 text-center mb-6 xl:mb-0">Founded with passion for excellence</motion.h3>
          <motion.button 
            variants={itemVariants} 
            whileHover={{ scale: 1.05 }}
            className="btn btn-primary gap-2.5"
          >
            Browse our collection
            <FaArrowRight />
          </motion.button>
        </div> 
      </div>
    </motion.section>
  )
}

export default Cta