import Link from 'next/link';
import React, { ReactElement } from 'react'

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
            className={`w-full h-20 lg:h-36 relative flex flex-row-reverse items-center justify-around px-6 gap-4 transition-all border-[1px] border-gray-700 rounded-md ${className}`}
        >
            <Link href={link} className='size-6 flex items-center justify-center pb-[3px] text-lg border-[2px] border-gray-700 text-gray-700 hover:border-blue-500 hover:text-blue-500 rounded-full font-semibold absolute top-[7%] left-[2%] z-10 transition-colors'>
                +
            </Link>
            <div
                className='size-full flex flex-col justify-center gap-[2px]'
            >
                <p className='text-xl font-medium'>{title}</p>
                <p className='text-md text-gray-500 font-light'>{description}</p>
            </div>

            <div className='text-5xl font-thin'>{icon}</div>
        </div>
    )
}

export default UserInfoContainer