"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from 'framer-motion'
import "swiper/css"
import "swiper/css/scrollbar"
import Image from "next/image"
import { Scrollbar } from "swiper/modules"

const products = [
  { 
    image: "/assets/img/latest/p1.png",
    name: "Lorem ipsum dolor",
    description: "Description ....",
    price: 120,
  },
  { 
    image: "/assets/img/latest/p2.png",
    name: "Lorem ipsum dolor",
    description: "Description ....",
    price: 120,
  },
  { 
    image: "/assets/img/latest/p3.png",
    name: "Lorem ipsum dolor",
    description: "Description ....",
    price: 120,
  },
  { 
    image: "/assets/img/latest/p4.png",
    name: "Lorem ipsum dolor",
    description: "Description ....",
    price: 120,
  },
  { 
    image: "/assets/img/latest/p1.png",
    name: "Lorem ipsum dolor",
    description: "Description ....",
    price: 120,
  },
  { 
    image: "/assets/img/latest/p2.png",
    name: "Lorem ipsum dolor",
    description: "Description ....",
    price: 120,
  },

]

const Slider = () => {
  return (
    <Swiper 
      slidesPerView={1}
      spaceBetween={40}
      scrollbar={{hide: false,}}
      modules={[Scrollbar]}
      className="h-[530px]"
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1170:{
          slidesPerView: 4,
        }
      }}
    >
      {products.map((product, index) => {

        const { image, name, description, price } = product
        return (
          <SwiperSlide key={ index } className='select-none w-full'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className='w-full h-full cursor-pointer'
            >
              <div className='bg-grey-50 h-[360px] flex items-center justify-center'>
                <Image
                  src={image}
                  alt={name}
                  width={240}
                  height={240}
                  quality={100}
                  className=''
                />
              </div>
              <div className='w-full pt-4 flex flex-col gap-4'>
                <div>
                  <h6 className='font-semibold text-primary mb-1'>{name}</h6>
                  <p>{description}</p>
                </div>
                <p className='font-semibold text-accent2'>${price}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider