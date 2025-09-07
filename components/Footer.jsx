"use client";

import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { motion } from "framer-motion";

// Variantes de animación
const footerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const footerItemVariants = {
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

const Footer = () => {
  return (
    <motion.footer 
      className="bg-primary pt-24"
      variants={footerContainerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pb-24 border-b border-white/10">
          {/* Column 1 */}
          <motion.div variants={footerItemVariants}>
            <h4 className="h4 text-white mb-6">About Us</h4>
            <p className="text-white/60">
              Passionate about sports, we provide top-quality apparel to help you perform your best.
            </p>
          </motion.div>
          {/* Column 2 */}
          <motion.div variants={footerItemVariants}>
            <h4 className="h4 text-white mb-6">Shop</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-white/60 hover:text-white transition-all">Men's</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-all">Women's</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-all">Kids'</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-white transition-all">Accessories</Link></li>
            </ul>
          </motion.div>
          {/* Column 3 */}
          <motion.div variants={footerItemVariants}>
            <h4 className="h4 text-white mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li><span className="text-white/60">Phone: (123) 456-7890</span></li>
              <li><span className="text-white/60">Email: contact@sportweb.com</span></li>
              <li><span className="text-white/60">Address: 123 Sport St, Athlete City</span></li>
            </ul>
          </motion.div>
          {/* Column 4 - Socials */}
          <motion.div variants={footerItemVariants}>
            <h4 className="h4 text-white mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#"><FaYoutube className="text-white/60 hover:text-white text-2xl transition-all" /></Link>
              <Link href="#"><FaFacebook className="text-white/60 hover:text-white text-2xl transition-all" /></Link>
              <Link href="#"><FaInstagram className="text-white/60 hover:text-white text-2xl transition-all" /></Link>
              <Link href="#"><FaPinterest className="text-white/60 hover:text-white text-2xl transition-all" /></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;