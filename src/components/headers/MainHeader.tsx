import React from 'react'
import SearchBar from './main-header-components/SearchBar'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'
import HamburgerMenuSection from './main-header-components/HamburgerMenuSection'

const MainHeader = () => {

    return (
        <div
            className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4 border-b-[4px] border-gray-100'
        >

            <div
                className='w-52 h-10 flex flex-row-reverse items-center p-1 rounded-sm bg-white border-[1px]'
            >
                <div
                    className='size-fit p-1 m-auto text-blue-500'
                >
                    <FaUser size={18} />
                </div>

                <div
                    className='size-full flex items-center justify-center gap-1 text-lg font-normal'
                >
                    <Link
                        href={`/login`}
                        className='size-full flex items-center justify-center pb-2 hover:text-blue-500 transition-colors'
                    >
                        <p>ورود</p>
                    </Link>

                    <div
                        className='h-full border-l border-[1px]'
                    >
                    </div>

                    <Link
                        href={`/sign-up`}
                        className='size-full items-center justify-center mx-3 hover:text-blue-500 transition-colors'
                    >
                        <p>ثبت نام</p>
                    </Link>
                </div>
            </div>

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