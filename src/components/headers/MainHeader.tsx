import React from 'react'
import { BiLogoAmazon, BiMenu } from 'react-icons/bi'
import SearchBar from './main-header-components/SearchBar'

const MainHeader = () => {

    return (
        <div
            className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4'
        >

            <div>
                left
            </div>

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