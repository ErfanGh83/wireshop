import Link from 'next/link';
import React, { ReactElement } from 'react'

type Props = {
    title: string;
    link: string;
    icon: ReactElement;
    className?: string;
}

const UserRelatedLists = ({ title, link, icon, className }: Props) => {

    return (
        <Link
            href={link}
            className={`w-full h-16 sm:h-12 py-1 relative flex flex-col sm:flex-row items-center justify-center sm:justify-start px-3 gap-2 transition-all ${className}`}
        >
            <div className='text-lg sm:text-2xl font-thin'>{icon}</div>
            <p className='text-xs sm:text-xl font-medium'>{title}</p>
        </Link>
    )
}

export default UserRelatedLists