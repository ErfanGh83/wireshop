import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    id: string
    title: string
    imageUrl: string
    price: number
    available: boolean
    description?: string
    className?: string
    maxDescriptionLength?: number
}

const NormalProductContainer = ({
    id,
    title,
    imageUrl,
    price,
    available = false,
    description = '',
    className = '',
    maxDescriptionLength = 50 // Default value
}: Props) => {
    // Function to trim description if it's too long
    const trimDescription = (desc: string) => {
        if (desc.length <= maxDescriptionLength) return desc;
        return desc.substring(0, maxDescriptionLength) + '...';
    };

    return (
        <Link
            href={`/product?id=${id}`}
            className={`group relative flex flex-row sm:flex-col bg-white dark:bg-gray-700 shadow-md overflow-hidden transition-all duration-300 border-[2px] border-gray-200 dark:border-slate-800 hover:shadow-xl dark:hover:border-blue-500 ${className}`}
            dir="rtl"
        >
            {/* Availability indicator */}
            {available ? (
                <div className={`absolute border-[1px] rounded-br-xl bg-white dark:bg-slate-700 border-green-500 text-green-500 text-xs sm:text-sm font-thin px-2 py-1 z-[1] left-0 top-0`}>
                    موجود
                </div>
            ) : (
                <div className={`absolute border-[1px] bg-white border-red-500 text-red-500 text-xs sm:text-sm font-thin px-2 py-1 z-[1] left-0 top-0`}>
                    ناموجود
                </div>
            )}

            {/* Image Container */}
            <div className="relative w-32 h-32 sm:w-full sm:h-48 md:h-56 lg:h-64 bg-gray-100 dark:bg-gray-600 overflow-hidden flex-shrink-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 256px"
                    priority={false}
                />
            </div>

            {/* Content Container */}
            <div className="flex flex-col justify-between p-3 sm:p-4 bg-white dark:bg-slate-800 pl-5 sm:pl-4 flex-grow">
                <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2 min-h-[2.8em]">
                        {title}
                    </h3>

                    {description && (
                        <p className="block text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">
                            {trimDescription(description)}
                        </p>
                    )}
                </div>

                <div className="mt-2 sm:mt-4">
                    <div className="flex flex-col-reverse gap-0.5">
                        <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">
                            سانت / {price} تومان
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NormalProductContainer