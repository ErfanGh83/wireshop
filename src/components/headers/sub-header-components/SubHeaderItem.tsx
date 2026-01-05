'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import CategoriesModal from '@/components/CategoriesModal';

type Props = {
  title: string;
  link: string;
  icon: ReactNode;
  className?: string;
};

const SubHeaderItem = ({
  title,
  link,
  icon,
  className = '',
}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const isProducts = title === 'محصولات';

  // ✅ Detect screen size
  useEffect(() => {
    const media = window.matchMedia('(min-width: 640px)');

    const update = () => setIsDesktop(media.matches);
    update();

    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const content = (
    <>
      <span
        className={`text-md md:text-xl font-medium ${isActive
            ? 'text-blue-500 dark:text-blue-400'
            : 'text-black dark:text-gray-200'
          }`}
      >
        {title}
      </span>
      <span
        className={`text-lg ml-2 ${isActive
            ? 'text-blue-500 dark:text-blue-400'
            : 'text-black dark:text-gray-200'
          }`}
      >
        {icon}
      </span>
    </>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => isProducts && isDesktop && setOpen(true)}
      onMouseLeave={() => isProducts && isDesktop && setOpen(false)}
    >
      <button
        className={`w-fit h-8 rounded-full flex items-center justify-between
        pl-1 pr-2 py-[1px] md:pl-2 md:pr-4 md:py-1
        cursor-pointer hover:scale-105 transition-all ${className}`}
      >
        <Link
          href={link}
          className="w-fit p-2 flex flex-col-reverse sm:flex-row items-center gap-2"
          aria-label={title}
        >
          {content}
        </Link>
      </button>

      {/* ✅ Only render hover modal on desktop */}
      {isProducts && isDesktop && <CategoriesModal isOpen={open} />}
    </div>
  );
};

export default SubHeaderItem;