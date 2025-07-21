import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {
    id: string,
    title: string,
    imageUrl: string,
    link?: string,
    className?: string
}

const CircularProductContainer = ({ id, title, imageUrl, link, className = '' }: Props) => {
  return (
    <Link
        href={link || `/product/${id}`}
        className={`group w-32 h-32 flex flex-col items-center justify-between gap-2 m-auto ${className}`}
        aria-label={`View ${title}`}
    >
        <div className='relative size-24 rounded-full bg-white overflow-hidden border-2 border-gray-200 group-hover:border-blue-500 transition-all'>
            <Image 
                src={imageUrl}
                alt={title}
                fill
                className='fill'
                draggable={false}
                sizes='(max-width: 640px) 50vw, 16px'
            />
        </div>

        <div className='text-sm font-medium text-center text-gray-700 line-clamp-2 px-1'>
            {title}
        </div>
    </Link>
  )
}

export default CircularProductContainer