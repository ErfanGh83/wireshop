"use client"

import { circularProducts } from "../../../public/api/examples"
import CircularProductContainer from "./CircularProductContainer"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const CircularProductsContainer = () => {
  return (
    <div className="w-full px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          انواع محصولات
        </h2>
      </div>

      {/* Blue rounded wrapper */}
      <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-bl from-blue-300 to-blue-400 shadow-md dark:from-slate-700 dark:to-slate-500 px-6 py-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {circularProducts.slice(0, 7).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex justify-center">
                <CircularProductContainer
                  title={product.title}
                  imageUrl={product.imageUrl}
                  className="w-28 h-28"
                  link={product.link}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default CircularProductsContainer