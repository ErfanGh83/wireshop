import React from 'react'
import Image from 'next/image'
import { BASE_URL } from '@/lib/api/constants'
import { LuCable } from 'react-icons/lu'

type Props = {
    title: string
    imageUrl: string
    description?: string
    className?: string
}

const BigProductContainer = ({
    title,
    imageUrl,
    className = ''
}: Props) => {
    const hasImage = Boolean(imageUrl && imageUrl.trim() !== '')

    return (
        <div
            className={`relative w-48 h-32 sm:w-68 sm:h-40 bg-transparent shadow-xl overflow-hidden transition-all duration-300 border-[1px] border-gray-400 rounded-xl ${className}`}
            dir="rtl"
        >
            <div className="relative aspect-square w-full overflow-hidden bg-blue-500 flex items-center justify-center">
                {hasImage ? (
                    <Image
                        crossOrigin={
                            imageUrl.startsWith("/uploads") ? "anonymous" : undefined
                        }
                        src={
                            imageUrl.startsWith("/uploads")
                                ? BASE_URL + imageUrl
                                : imageUrl
                        }
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <LuCable className="text-white text-6xl mb-12 opacity-80" />
                )}
            </div>

            <div className="size-full absolute z-10 top-0 left-0">
                <div className="size-full p-4 flex flex-col justify-between items-start bg-transparent">
                    <h3 className="text-base sm:text-lg font-semibold text-white text-shadow-sm mb-1 line-clamp-2">
                        {title}
                    </h3>
                    <div className="size-fit bg-white border-[1px] border-gray-400 rounded-md px-2 py-[2px] text-black">
                        <p>خرید</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigProductContainer