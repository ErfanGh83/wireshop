'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactElement } from 'react'

type Props = {
    name: string,
    link: string,
    icon: ReactElement
}

const HamburgerMenuItemContainer = ({ name, link, icon }: Props) => {
    const pathname = usePathname()
    const isActive = pathname === link

    return (
        <Link
            href={link}
            className={`w-full h-16 flex flex-row items-center gap-4 justify-start pr-4 hover:scale-120 hover:shadow-2xl transition-all duration-200
                ${isActive ? 'bg-blue-400 dark:bg-blue-500 text-white' : 'bg-white dark:bg-slate-600'}
            `}
        >
            <div className={`size-fit rounded-full p-2 text-2xl ${isActive ? 'text-white' : 'text-blue-500 dark:text-blue-400'}`}>
                {icon}
            </div>

            <p className={`text-lg font-medium ${isActive ? 'text-white' : 'text-slate-800 dark:text-gray-100'}`}>
                {name}
            </p>
        </Link>
    )
}

export default HamburgerMenuItemContainer
