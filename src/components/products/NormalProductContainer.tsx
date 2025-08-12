import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    id: string
    title: string
    imageUrl: string
    price: number
    discount?: number
    isSpecial?: boolean
    description?: string
    className?: string
}

const NormalProductContainer = ({
    id,
    title,
    imageUrl,
    price,
    discount = 0,
    isSpecial = false,
    description = '',
    className = ''
}: Props) => {
    const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price

    return (
        <Link
            href={`/product?id=${id}`}
            className={`h-32 sm:h-full group relative flex flex-row sm:flex-col bg-white dark:bg-gray-700 shadow-md overflow-hidden transition-all duration-300 border-[2px] border-gray-200 dark:border-slate-800 hover:shadow-xl dark:hover:border-blue-500 ${className}`} 
            dir="rtl"
        >
            {discount > 0 && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs sm:text-sm font-bold px-2 py-1 z-10">
                    %{discount} تخفیف
                </div>
            )}

            {isSpecial && (
                <div className={`absolute left-0 bg-purple-500 text-white text-xs sm:text-sm font-bold px-2 py-1 z-10 
                ${!discount? 'top-0' : 'top-7'}`}>
                    ویژه
                </div>
            )}

            <div className="relative aspect-square size-36 sm:w-full sm:h-full bg-blue-400 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="w-11/12 flex flex-col justify-between p-3 sm:p-4 bg-white dark:bg-slate-800 flex-grow">
                <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2 min-h-[2.8em]">
                        {title}
                    </h3>

                    {description && (
                        <p className="hidden sm:block text-xs sm:text-sm text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">
                            {description}
                        </p>
                    )}
                </div>

                <div className="mt-2 sm:mt-4">
                    <div className="flex flex-col-reverse gap-0.5">
                        <span className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white">
                           سانت / {discountedPrice.toFixed(2)} تومان
                        </span>
                        {discount > 0 && (
                            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-200 line-through">
                                {price.toFixed(2)} تومان
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NormalProductContainer