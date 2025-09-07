"use client";

import { motion } from "framer-motion";

const Copyright = () => {
  return (
    <div className="bg-primary py-6">
      <motion.div 
        className="container mx-auto text-center text-white/60"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Copyright &copy; SportWeb 2024. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Copyright;