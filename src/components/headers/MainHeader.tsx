import React from 'react'
import SearchBar from './main-header-components/SearchBar'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import HamburgerMenuSection from './main-header-components/HamburgerMenuSection'

const MainHeader = () => {

    return (
        <div
            className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4 border-b-2 border-gray-200 shadow-2xl'
        >

            <Link
                href={'/'}
                className='w-48 h-10 flex flex-row-reverse items-center p-1 rounded-sm bg-white hover:border-blue-400 hover:text-blue-400 border-[2px] transition-colors'
            >
                <div
                    className='size-fit p-1 m-auto'
                >
                    <FaUser size={18}/>
                </div>

                <div
                    className='size-full flex items-center justify-center text-lg font-normal'
                >
                    <p>ورود / ثبت نام</p>
                </div>
            </Link>

            <div
                className='w-full flex items-center justify-center'
            >
                <SearchBar />
            </div>

            <div
                className='size-fit flex flex-row-reverse items-center gap-4'
            >
                <HamburgerMenuSection />
            </div>
        </div>
    )
}

export default MainHeader