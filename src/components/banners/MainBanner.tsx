'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

interface CustomComponentProps {
  backgroundImageUrl: string;
  childrenImages?: string[];
  link?: string;
}

const MainBanner: React.FC<CustomComponentProps> = ({
  backgroundImageUrl,
  childrenImages = [],
  link,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  const bannerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 overflow-hidden"
      variants={bannerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <Image
        src={backgroundImageUrl}
        alt="Background"
        fill
        className="object-cover"
        quality={100}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Content Container */}
      <div className={`relative z-30 flex flex-col md:flex-row-reverse items-center justify-center gap-4 sm:gap-8 md:gap-12 w-full max-w-screen-xl mx-auto px-4
        ${childrenImages.length === 1 ? 'md:justify-start' : ''}`}>
        {childrenImages.map((childImage, index) => (
          <motion.div
            key={index}
            className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={childImage}
              alt={`Product ${index + 1}`}
              fill
              className="object-contain"
              quality={90}
              priority={index < 2} // Prioritize first 2 images
            />
          </motion.div>
        ))}
      </div>

      {/* Clickable Link Overlay */}
      {link && (
        <Link href={link} passHref>
          <motion.div
            className="absolute inset-0 z-20"
            whileHover={{ cursor: 'pointer' }}
          />
        </Link>
      )}
    </motion.div>
  );
};

export default MainBanner;