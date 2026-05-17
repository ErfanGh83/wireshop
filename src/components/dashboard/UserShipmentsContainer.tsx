import React, { ReactElement } from 'react'

type Props = {
    title: string;
    icon: ReactElement;
    className?: string;
    onClick: () => void;
}

const UserShipmentContainer = ({ title, icon, className, onClick }: Props) => {

    return (
        <button
            onClick={onClick}
            className={`w-full h-16 sm:h-12 py-1 relative flex flex-col sm:flex-row items-center justify-center sm:justify-start px-3 gap-2 cursor-pointer transition-all ${className}`}
        >
            <div className='text-lg sm:text-2xl font-thin'>{icon}</div>
            <p className='text-xs sm:text-xl font-medium'>{title}</p>
        </button>
    )
}

export default UserShipmentContainer