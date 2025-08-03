'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

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

  const content = (
    <>
      <span className={`text-md md:text-xl font-medium ${isActive ? 'text-blue-500' : ''}`}>
        {title}
      </span>
      <span className={`text-lg ml-2 ${isActive ? 'text-blue-500' : ''}`}>
        {icon}
      </span>
    </>
  );

  return (
    <button
      className={`w-fit h-8 rounded-full flex items-center justify-between pl-1 pr-2 py-[1px] md:pl-2 md:pr-4 md:py-1 cursor-pointer hover:scale-105 dark:hover:bg-slate-500 dark:border-[1px] dark:border-transparent dark:hover:border-purple-500 transition-colors ${className}`}
    >
      <Link
        href={link}
        className="w-fit p-2 flex items-center gap-2"
        aria-label={title}
      >
        {content}
      </Link>
    </button>
  );
};

export default SubHeaderItem;
