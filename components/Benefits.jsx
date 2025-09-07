"use client";

import Image from "next/image"
import { motion } from "framer-motion";

// Variants for the text columns container and items
const textContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeInOut",
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Variants for the main image
const imageVariants = {
  hidden: { opacity: 0, y: 150, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Benefits = () => {
  return (
    <section className="mt-24 pt-[72px] min-h-[540px] bg-[url('/assets/img/benefits/bg.png')] bg-no-repeat bg-cover relative overflow-hidden">
      <div className="container mx-auto flex flex-col">
        {/* text */}
        <motion.div 
          className="relative flex flx-col md:flex-row justify-between gap-6 md:gap-48 text-grey-300"
          variants={textContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* item 1 */}
          <motion.div 
            variants={textItemVariants}
            className="flex-1 flex flex-col gap-6 w-full max-w-[360px]"
          >
            <div>
              <div className="flex items-center justify-start gap-2 mb-4">
                <Image 
                  src="/assets/icons/trophy.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold">
                  Performance Excellence
                </h6>
              </div>
              <p>
                Crafted from high-performance materials for unmatched durability and comfort.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-start gap-2 mb-4">
                <Image 
                  src="/assets/icons/design.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold">
                  Stylish Design
                </h6>
              </div>
              <p className="xl:max-w-[320px] xl:mr-auto">
                From classic essentials to cutting-edge trends, our apparel blends fashion with function seamlessly.
              </p>
            </div>
          </motion.div>

          {/* item 2 */}
          <motion.div 
            variants={textItemVariants}
            className="flex-1 flex flex-col gap-6 w-full max-w-[360px]"
          >
            <div>
              <div className="flex items-center justify-start xl:justify-end gap-2 mb-4">
                <Image 
                  src="/assets/icons/build.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold">
                  Build to last
                </h6>
              </div>
              <p className="xl:text-right">
                Designed to withstand the rigors of active lifestyles, ensuring longevity.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-start xl:justify-end gap-2 mb-4">
                <Image
                  src="/assets/icons/check.svg"
                  width={24}
                  height={24}
                  alt=""
                />
                <h6 className="uppercase text-white font-bold">
                  Wide Selection
                </h6>
              </div>
              <p className="xl:text-right xl:max-w-[290px] xl:ml-auto">
                Explore a diverse range of products tailored to meet every athlete's needs
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* img */}
        <div className="w-full h-[280px] xl:h-auto xl:absolute top-0 bottom-0 left-0 right-0 ">
          {/* logo bg */}
          <div className="w-full h-full bg-[url('/assets/img/benefits/logo.png')] bg-bottom bg-no-repeat absolute -bottom-56"></div>
          <motion.div 
            className="relative w-full h-full flex justify-center items-end"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image 
              src="/assets/img/benefits/s1.png"
              width={916}
              height={604}
              alt=""
              className="absolute xl:top-16 z-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Benefits