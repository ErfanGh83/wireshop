import Link from 'next/link';
import React, { ReactElement } from 'react'
import { PiPlus } from 'react-icons/pi';

type Props = {
    title: string;
    link: string;
    description: string;
    icon: ReactElement;
    className?: string;
}

const UserInfoContainer = ({ title, link, icon, description, className }: Props) => {

    return (
        <div
            className={`size-full relative flex flex-row-reverse items-center justify-around px-6 gap-2 transition-all shadow-sm rounded-md ${className}`}
        >
            <Link href={link} className='size-fit text-lg border-2 border-black text-black hover:border-blue-500 hover:text-blue-500 rounded-full font-semibold absolute top-[10%] left-[2%] z-10 transition-colors'>
                <PiPlus />
            </Link>
            <div
                className='size-full flex flex-col justify-center gap-[2px]'
            >
                <p className='text-xl font-medium'>{title}</p>
                <p className='text-md text-gray-500 font-light'>{description}</p>
            </div>

            <div className='text-4xl font-thin'>{icon}</div>
        </div>
    )
}

export default UserInfoContainer