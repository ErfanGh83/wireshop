'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface CustomComponentProps {
  backgroundImageUrl: string;
  childrenImages?: string[];
  description?: string;
  link?: string;
}

const MainBanner: React.FC<CustomComponentProps> = ({
  backgroundImageUrl,
  childrenImages = [],
  description,
  link,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  const bannerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full flex items-center justify-center p-2 xs:p-3 sm:p-4 md:p-6 overflow-hidden"
      variants={bannerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        src={backgroundImageUrl}
        alt="Background"
        fill
        className="object-cover"
        quality={90}
        priority
        sizes="(max-width: 400px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="relative z-30 w-full h-full flex flex-col">
        <div className={`flex-grow flex ${
          childrenImages.length > 1 ? 'flex-wrap justify-center' : 'justify-center'
        } items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8`}>
          {childrenImages.map((childImage, index) => (
            <motion.div
              key={index}
              className="relative w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
              animate={{ scale: isHovered ? 1.03 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <Image
                src={childImage}
                alt={`Product ${index + 1}`}
                fill
                className="object-contain"
                quality={85}
                priority={index < 1}
              />
            </motion.div>
          ))}
        </div>

        {description && (
          <motion.div
            className={`
              w-[95%] xs:w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[50%]
              bg-black/60 text-white p-2 xs:p-3 sm:p-4
              mt-2 xs:mt-3 sm:mt-4 md:mt-6
              mx-auto
              rounded
              backdrop-blur-xs sm:backdrop-blur-sm
              overflow-y-auto max-h-[100px] xs:max-h-[120px] sm:max-h-[150px]
            `}
            variants={textVariants}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <p className="text-[10px] leading-tight xs:text-xs xs:leading-snug sm:text-sm md:text-base lg:text-lg text-center md:text-right">
              {description}
            </p>
          </motion.div>
        )}
      </div>

      {/* Clickable Link Overlay */}
      {link && (
        <Link href={link} passHref>
          <motion.div
            className="absolute inset-0 z-30 cursor-pointer"
            whileHover={{ cursor: 'pointer' }}
          />
        </Link>
      )}
    </motion.div>
  );
};

export default MainBanner;