import React from 'react'
import { BiLogoAmazon, BiMenu } from 'react-icons/bi'
import SearchBar from './main-header-components/SearchBar'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'

const MainHeader = () => {

    return (
        <div
            className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4'
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
                <BiLogoAmazon size={36} />

                <button
                    className='size-fit p-2 text-xl md:text-2xl xl:text-3xl rounded-sm text-blue-400 bg-blue-200 dark:to-blue-400 hover:cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors'
                >
                    <BiMenu />
                </button>
            </div>
        </div>
    )
}

export default MainHeader