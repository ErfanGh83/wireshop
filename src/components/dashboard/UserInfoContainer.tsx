import React, { Dispatch, ReactElement, SetStateAction } from 'react'

type Props = {
    title: string;
    link?: string;
    description: string;
    icon: ReactElement;
    className?: string;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

const UserInfoContainer = ({ title, icon, description, className, setModalIsOpen }: Props) => {

    return (
        <div
            className={`w-full h-24 relative flex flex-row-reverse items-center justify-around px-6 gap-4 transition-all border-[1px] border-gray-300 shadow-md rounded-md ${className}`}
            onClick={() => setModalIsOpen(true)}
        >
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