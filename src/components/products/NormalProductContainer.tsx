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
            href={`/products/${id}`}
            className={`group relative bg-white dark:bg-gray-700 shadow-md overflow-hidden transition-all duration-300 border-[2px] border-gray-200 dark:border-slate-800 hover:shadow-xl dark:hover:border-blue-500 ${className}`} dir="rtl">
            {discount > 0 && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs sm:text-sm md:text-md xl:text-lg font-bold px-2 py-1 z-10">
                    %{discount} تخفیف
                </div>
            )}

            {isSpecial && (
                <div className={`absolute left-0 bg-purple-500 text-white text-xs sm:text-sm md:text-md xl:text-lg font-bold px-2 py-1 z-10 
                ${!discount? 'top-0' : 'top-[5%] sm:top-[6%] md:top-[7%] xl:top-[9%]'}`}>
                    ویژه
                </div>
            )}


            <div className="relative aspect-square w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="h-40 p-4 flex flex-col justify-between bg-white dark:bg-slate-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 line-clamp-2">
                    {title}
                </h3>


                {description && (
                    <p className="text-gray-500 dark:text-gray-300 text-[10px] sm:text-xs mb-3 line-clamp-2">
                        {description}
                    </p>
                )}

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-md xl:text-lg font-bold text-gray-900 dark:text-white">
                           سانت / {discountedPrice.toFixed(2)} تومان
                        </span>
                        {discount > 0 && (
                            <span className="text-[10px] sm:text-xs xl:text-md text-gray-500 dark:text-gray-200 line-through">
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