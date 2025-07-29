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
            className={`w-fit h-12 relative flex flex-row items-center justify-around px-2 gap-1 transition-all border-[1px] border-black rounded-md ${className}`}
        >
            <div className='text-2xl font-thin'>{icon}</div>
            <p className='text-xl font-medium'>{title}</p>
        </Link>
    )
}

export default UserRelatedLists