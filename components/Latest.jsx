'use client';
import Link from 'next/link'
import React from 'react'
import Slider from './Slider'
import { motion } from 'framer-motion';

const Latest = () => {
  // Variantes para la animación del contenedor
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Variantes para los elementos hijos
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className='mt-24'
    >
      <div className='container mx-auto'>
        <motion.div 
          variants={itemVariants} 
          className='flex justify-between items-end mb-[72px]'
        >
          <h4 className="h4 w-max border-b-2">Explore Our Latest Collection</h4>
          <Link 
            href="/" 
            className="link-primary text-accent2 hover:text-primary"
          >
            View All
          </Link>
        </motion.div>
        {/* Slider */}
        <motion.div variants={itemVariants}>
          <Slider />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Latest