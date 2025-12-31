"use client"

import { brands } from "./products/filters/filters/filtersList"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const logoBrands = brands.filter(b => b.logo)

export default function BrandSwiper() {
    return (
        <div className="w-full px-4">
            {/* White rounded wrapper (matches circular products width) */}
            <div className="mx-auto max-w-5xl rounded-2xl bg-blue-200 dark:bg-slate-700
                      border border-gray-200 dark:border-slate-700
                      shadow-sm px-6 py-6">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop
                    spaceBetween={16}
                    slidesPerView={3}
                    breakpoints={{
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                    }}
                    draggable={false}
                >
                    {logoBrands.map((brand) => (
                        <SwiperSlide key={brand.en}>
                            <Link
                                href={`/products?b=${encodeURIComponent(brand.en)}`}
                                className="flex items-center justify-center h-20 opacity-80
                           hover:opacity-100 transition"
                            >
                                <Image
                                    src={brand.logo!}
                                    alt={brand.fa}
                                    width={120}
                                    height={60}
                                    className="object-contain transition"
                                />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}