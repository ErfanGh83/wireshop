"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductImageSliderProps {
  images: string[];
  discount?: number;
  isFeatured?: boolean;
}

export default function ProductImageSlider({
  images,
  discount = 0,
  isFeatured = false,
}: ProductImageSliderProps) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {/* Tags in top-right */}
      <div className="absolute top-3 right-0 z-10 flex flex-col gap-2 items-start">
        {discount && (
          <span className="bg-red-500 text-white text-xs px-2 py-1">
            تخفیف % {discount}
          </span>
        )}
        {isFeatured && (
          <span className="bg-purple-500 text-white text-xs px-2 py-1">
            ویژه
          </span>
        )}
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full select-none h-[350px] bg-blue-100 dark:bg-slate-700 rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={src} alt={`product-${index}`} className="h-full w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
