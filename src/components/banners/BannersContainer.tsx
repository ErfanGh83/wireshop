"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import MainBanner from './MainBanner';

interface Banner {
    backgroundImageUrl: string;
    childrenImages?: string[];
    description: string;
    link?: string;
}

type BannerListProps = {
    banners: Banner[];
}

const BannersContainer: React.FC<BannerListProps> = ({ banners }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    const isInView = useInView(containerRef, { once: true, margin: "0px 0px -100px 0px" });
    const [, setProgress] = useState(0);
    const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);

    const cardVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
            setIsAutoplayRunning(false);
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
            setIsAutoplayRunning(true);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAutoplayTimeLeft = (swiper: any, timeLeft: number, percentage: number) => {
        if (isAutoplayRunning) {
            setProgress(100 - percentage * 100);
        }
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.on('slideChange', () => {
                setProgress(0);
            });
        }
    }, []);

    return (
        <div
            className="relative w-full h-[440px]"
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onAutoplayTimeLeft={handleAutoplayTimeLeft}
                className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[440px]"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
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
                
                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev hidden sm:block" />
                <div className="swiper-button-next hidden sm:block" />
            </Swiper>
        </div>
    );
};

export default BannersContainer;