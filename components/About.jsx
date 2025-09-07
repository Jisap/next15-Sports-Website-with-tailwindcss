"use client";

import { MdHistoryEdu, MdTrackChanges } from "react-icons/md"
import { motion } from "framer-motion";

// Variants for the main container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger between title and content
      ease: "easeInOut",
    },
  },
};

// Variants for the title (word by word)
const titleContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const titleWord = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Variants for the content blocks
const contentItem = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const title = "Founded with a passion for excellence";

const About = () => {
  return (
    <motion.section 
      className="mt-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-16">
          <motion.h2 variants={titleContainer} className="h2">
            {title.split(" ").map((word, index) => (
              <motion.span 
                key={index} 
                variants={titleWord} 
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <div className="flex flex-col gap-12">
            <motion.div variants={contentItem}>
              <div className="text-primary flex items-center gap-2 mb-4">
                <MdHistoryEdu className="text-2xl" />
                <h6 className="h6">Our Story</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent eget risus sollicitudin, ullamcorper nunc eu, 
                scelerisque nisl. Nullam dictum fermentum mauris, sit amet 
                consectetur ipsum hendrerit sed.
              </p>
            </motion.div>

            <motion.div variants={contentItem}>
              <div className="text-primary flex items-center gap-2 mb-4">
                <MdTrackChanges className="text-2xl" />
                <h6 className="h6">Our Mission</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget risus sollicitudin, ullamcorper nunc eu,
                scelerisque nisl. Nullam dictum fermentum mauris, sit amet
                consectetur ipsum hendrerit sed.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About