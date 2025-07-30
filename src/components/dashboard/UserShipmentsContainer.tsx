import Link from 'next/link';
import React, { ReactElement } from 'react'

type Props = {
    title: string;
    link: string;
    icon: ReactElement;
    className?: string;
}

const UserShipmentContainer = ({ title, link, icon, className }: Props) => {

    return (
        <Link
            href={link}
            className={`w-full h-24 lg:h-36 flex flex-row-reverse items-center justify-around sm:justify-center sm:gap-2 xl:gap-12 border-[1px] border-gray-600 hover:shadow-lg transition-all cursor-pointer rounded-md ${className}`}
        >
            <p className='text-3xl sm:text-sm md:text-lg xl:text-2xl text-black dark:text-white font-medium'>{title}</p>
            <div className='text-6xl sm:text-xl md:text-3xl xl:text-7xl font-thin'>{icon}</div>
        </Link>
    )
}

export default UserShipmentContainer