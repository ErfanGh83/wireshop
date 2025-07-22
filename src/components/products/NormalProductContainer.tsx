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
            className={`group relative bg-white shadow-md overflow-hidden transition-all duration-300 border-[2px] border-gray-200 hover:shadow-xl ${className}`} dir="rtl">
            {discount > 0 && (
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 z-10">
                    %{discount} تخفیف
                </div>
            )}

            {isSpecial && (
                <div className="absolute top-[5%] left-0 bg-purple-500 text-white text-xs font-bold px-2 py-1 z-10">
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

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                    {title}
                </h3>


                {description && (
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        {description}
                    </p>
                )}

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                            {discountedPrice.toFixed(2)} تومان
                        </span>
                        {discount > 0 && (
                            <span className="text-sm text-gray-500 line-through">
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