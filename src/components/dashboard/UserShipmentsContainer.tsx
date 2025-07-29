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
            className={`size-full flex flex-row-reverse items-center justify-around border-[1px] border-gray-300 hover:shadow-lg transition-all cursor-pointer rounded-md ${className}`}
        >
            <p className='text-2xl font-medium'>{title}</p>
            <div className='text-7xl font-thin'>{icon}</div>
        </Link>
    )
}

export default UserShipmentContainer