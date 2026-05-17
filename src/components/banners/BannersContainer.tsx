"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // ✅ import Pagination
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // ✅ import pagination styles
import MainBanner from "./MainBanner";
import { useRouter } from "next/navigation";

interface Banner {
  backgroundImageUrl: string;
  childrenImages?: string[];
  description: string;
  link?: string;
}

type BannerListProps = {
  banners: Banner[];
};

const BannersContainer: React.FC<BannerListProps> = ({ banners }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px -100px 0px" });
  const router = useRouter()
  const [, setProgress] = useState(0);
  const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);

  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
      setIsAutoplayRunning(false);
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
      setIsAutoplayRunning(true);
    }
  };

  const handleAutoplayTimeLeft = (_: unknown, __: number, percentage: number) => {
    if (isAutoplayRunning) {
      setProgress(100 - percentage * 100);
    }
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    swiperRef.current?.swiper.slideNext();
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    swiperRef.current?.swiper.slidePrev();
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => setProgress(0));
    }
  }, []);



  return (
    <div
      className="relative w-full h-[440px] group"
      ref={containerRef}
      onClick={() => router.push('/products')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
        className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[440px] mx-2 sm:mx-0"
      >

        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="px-2 sm:px-0">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="overflow-hidden rounded-lg sm:rounded-none shadow-md sm:shadow-none"
            >
              <MainBanner
                backgroundImageUrl={banner.backgroundImageUrl}
                childrenImages={banner.childrenImages}
                description={banner.description}
                link={banner.link}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="w-full absolute inset-0 flex items-end justify-center px-6 pr-8 pb-12 gap-6 z-10 pointer-events-none">
        <button
          onClick={(e) => goPrev(e)}
          className="pointer-events-auto size-6 sm:size-10 flex items-center justify-center rounded-full cursor-pointer bg-black/50 dark:bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={(e) => goNext(e)}
          className="pointer-events-auto size-6 sm:size-10 flex items-center justify-center rounded-full cursor-pointer bg-black/50 dark:bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BannersContainer;
