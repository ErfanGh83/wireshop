import React, { ReactElement } from 'react'
import MainHeader from '../headers/MainHeader'
import FilterHeader from '../headers/SubHeader'

type Props = {
    children: ReactElement
}

const MainLayout = ({children}:Props) => {

    return (
        <div
            className='w-screen h-screen flex flex-col overflow-x-hidden overflow-y-auto bg-white text-black'
        >
            <header
                className='w-screen h-fit flex flex-col'
            >
                <MainHeader />
                <FilterHeader />
            </header>

            <main
                className='h-full overflow-hidden'
            >
                {children}
            </main>
        </div>
    )
}

export default MainLayout