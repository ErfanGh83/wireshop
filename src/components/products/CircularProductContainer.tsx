import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {
    title: string,
    imageUrl: string,
    link?: string,
    className?: string
}

const CircularProductContainer = ({ title, imageUrl, link, className = '' }: Props) => {
  return (
    <Link
        href={link || `/products`}
        className={`group w-32 h-36 flex flex-col items-center justify-between gap-2 m-auto ${className}`}
        aria-label={`View ${title}`}
    >
        <div className='relative size-24 rounded-full bg-white dark:bg-gray-600 overflow-hidden border-4 border-t-gray-200 border-l-gray-200 dark:border-t-purple-400 dark:border-l-purple-400 border-r-blue-200 dark:border-r-transparent border-b-blue-200 dark:border-b-transparent group-hover:border-blue-500 dark:group-hover:border-purple-600 transition-all'>
            <Image 
                src={imageUrl}
                alt={title}
                fill
                className='fill'
                draggable={false}
                sizes='(max-width: 640px) 50vw, 16px'
            />
        </div>

        <div className='text-sm font-medium text-center text-gray-700 dark:text-gray-200 line-clamp-2 px-1'>
            {title}
        </div>
    </Link>
  )
}

export default CircularProductContainer