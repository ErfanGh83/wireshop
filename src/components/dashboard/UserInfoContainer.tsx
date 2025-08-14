import Link from 'next/link';
import React, { Dispatch, ReactElement, SetStateAction } from 'react'

type Props = {
    title: string;
    link?: string;
    description: string;
    icon: ReactElement;
    className?: string;
    setModalIsOpen?: Dispatch<SetStateAction<boolean>>
}

const UserInfoContainer = ({ title, link, icon, description, className, setModalIsOpen }: Props) => {

    return (
        <div
            className={`w-full h-24 relative flex flex-row-reverse items-center justify-around px-6 gap-4 transition-all border-[1px] border-gray-300 shadow-md rounded-md ${className}`}
        >
            {
                setModalIsOpen && !link ?
                    <button
                        onClick={() => setModalIsOpen(true)}
                        className='size-6 flex items-center justify-center pb-[3px] cursor-pointer text-lg  dark:border-gray-200 text-gray-500 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 border-[1px] dark:hover:text-blue-300 dark:hover:border-blue-400 border-gray-500 rounded-full font-semibold absolute top-[7%] left-[2%] z-10 transition-colors'
                    >
                        +
                    </button>
                    :
                    <Link href={link? link : ''} className='size-6 flex items-center justify-center pb-[3px] cursor-pointer text-lg  dark:border-gray-200 text-gray-500 dark:text-gray-200 hover:border-blue-600 hover:text-blue-600 border-[1px] dark:hover:text-blue-300 dark:hover:border-blue-400 border-gray-500 rounded-full font-semibold absolute top-[7%] left-[2%] z-10 transition-colors'>
                        +
                    </Link>
            }
            <div
                className='size-full flex flex-col justify-center gap-[2px]'
            >
                <p className='text-xl font-medium'>{title}</p>
                <p className='text-md text-gray-500 dark:text-gray-200 font-light'>{description}</p>
            </div>

            <div className='text-5xl font-thin'>{icon}</div>
        </div>
    )
}

export default UserInfoContainer