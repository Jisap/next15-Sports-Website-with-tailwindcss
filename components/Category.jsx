"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion";

// Variantes de animación para el contenedor y los items
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre la animación de cada hijo
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Category = () => {
  return (
    <motion.section 
      className="mt-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // La animación se dispara una vez
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-[72px]">
          <h4 className="h4 w-max border-b-2">Shop by Category</h4>
          <Link 
            href="/" 
            className="link-primary text-accent2 hover:text-primary"
          >
            View All
          </Link>
        </div>

        {/* img grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-3 gap-4 xl:gap-10 mb-10"
        >
        {/* img 1 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }} // Efecto al pasar el cursor
            className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px]"
          >
            <Image 
              src="/assets/img/category/1.jpg" 
              fill 
              quality={100} 
              alt="" 
              className="object-contain"
            />
          </motion.div>
        {/* img 2 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px]"
          >
            <Image 
              src="/assets/img/category/2.jpg" 
              fill 
              quality={100} 
              alt="" 
              className="object-contain"
            />
          </motion.div>
        {/* img 3 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-[146px] sm:h-[416px] xl:h-[496px]"
          >
            <Image 
              src="/assets/img/category/3.jpg" 
              fill 
              quality={100} 
              alt="" 
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* category links */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10"
        >
          {/* 1*/}
          <motion.div variants={itemVariants}>
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Inspiration</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  Summer Clothes
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Outfits
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Tops
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Hots
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Dresses
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 2*/}
          <motion.div variants={itemVariants}>
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Casual</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  Crop Tops
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Graphic Tees
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  White Tees
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  High Waisted Shorts
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Short Shorts
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 3*/}
          <motion.div variants={itemVariants}>
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Sports</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  Bike Shorts
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Basketball Shorts
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Plus-Size Swimwear
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Running sunglasses
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Golf Shorts
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 4 */}
          <motion.div variants={itemVariants}>
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Essentials</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  Summer Shoes
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Summer Pants
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Sleeveless Shirts
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Sunglasses
                </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Moisture-Wicking Shirts
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Category