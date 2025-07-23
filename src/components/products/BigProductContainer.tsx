import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    id: string
    title: string
    imageUrl: string
    description?: string
    className?: string
}

const BigProductContainer = ({
    id,
    title,
    imageUrl,
    className = ''
}: Props) => {

    return (
        <div
            className={`relative w-68 h-40 bg-transparent shadow-xl overflow-hidden transition-all duration-300 rounded-xl ${className}`} dir="rtl">

            <div className="relative aspect-square w-full overflow-hidden bg-blue-500">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div
                className='size-full absolute z-10 top-0 left-0'
            >
                <div className="size-full p-4 flex flex-col justify-between items-start bg-transparent">
                    <h3 className="text-lg font-semibold text-white text-shadow-2xs mb-1 line-clamp-2">
                        {title}
                    </h3>
                    <Link
                        href={`/products/${id}`}
                        className='size-fit bg-white rounded-md px-2 py-[2px] text-black'
                    >
                        <p>خرید</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default BigProductContainer