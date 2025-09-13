"use client"

import React, { ReactElement, useEffect } from 'react'
import MainHeader from '../headers/MainHeader'
import FloatingChat from '../chat/FloatingChat'
import SubHeader from '../headers/SubHeader'
import { getInitialTheme, saveTheme } from '@/lib/utils'

type Props = {
    children: ReactElement
}

const MainLayout = ({children}:Props) => {

    useEffect(() => {
        saveTheme(getInitialTheme())
    }, [])

    return (
        <div
            className='min-w-[335px] min-h-[700px] w-screen h-screen flex flex-col overflow-x-hidden bg-white text-black'
        >
            <header
                className='w-screen h-fit flex flex-col dark:border-b-2 dark:border-slate-800 '
            >
                <MainHeader />
                <SubHeader />
            </header>

            <main
                className='h-full overflow-hidden pb-20 sm:pb-0'
            >
                {children}
            </main>

            <FloatingChat />
        </div>
    )
}

export default MainLayout