import React from 'react'
import SearchBar from './main-header-components/SearchBar'
import HamburgerMenuSection from './main-header-components/HamburgerMenuSection'
import SignupOrLoginButton from '../buttons/SignupOrLoginButton'

const MainHeader = () => {

    return (
        <div
            className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4 border-b-[4px] border-gray-100'
        >


            <div
                className='size-fit'
            >
                <SignupOrLoginButton />
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