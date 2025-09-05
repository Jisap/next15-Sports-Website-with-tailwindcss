"use client"

import { Swiper, SwiperSlide } from "swiper/react"
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
          <SwiperSlide key={index}>
            <div className="bg-grey-50 h-[360px] flex items-center justify-center">
              <Image 
                src={image} 
                alt={name}
                width={240}
                height={240}
                quality={100}
                className=""
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider