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

const CustomComponent: React.FC<CustomComponentProps> = ({
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
      className="relative w-full h-full flex flex-row items-center justify-center p-6 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      variants={bannerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        src={backgroundImageUrl}
        alt="Background"
        fill
        className="object-cover"
        quality={100}
      />

      <div className={`relative z-30 flex flex-row-reverse items-center justify-center gap-12 w-full mx-24 
        ${childrenImages.length === 1? 'justify-start' : ''}`}>
        {childrenImages.map((childImage, index) => (
          <motion.div
            key={index}
            className="relative size-[500px]"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src={childImage}
              alt={`Child ${index + 1}`}
              fill
              className="object-contain"
              quality={100}
            />
          </motion.div>
        ))}
      </div>

      {link && (
        <Link href={link} passHref>
          <motion.div
            className="absolute inset-0 z-30"
            whileHover={{ cursor: 'pointer' }}
          />
        </Link>
      )}
    </motion.div>
  );
};

export default CustomComponent;