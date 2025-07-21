import React, { ReactElement } from 'react'
import MainHeader from '../headers/MainHeader'
import MainFooter from '../footers/MainFooter'

type Props = {
    children: ReactElement
}

const MainLayout = ({children}:Props) => {

    return (
        <div
            className='w-screen h-screen flex flex-col overflow-x-hidden overflow-y-auto bg-white text-black'
        >
            <header>
                <MainHeader />
            </header>

            <main
                className='h-full'
            >
                {children}
            </main>

            <footer
                className='w-full h-10'
            >
                <MainFooter />
            </footer>
        </div>
    )
}

export default MainLayout