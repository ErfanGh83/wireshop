import React from 'react'
import SearchBar from './main-header-components/SearchBar'
import SignupOrLoginButton from '../buttons/SignupOrLoginButton'
import Image from 'next/image'
import ShoppingCartSection from './main-header-components/ShoppingCartSection'
import ThemeSwitchButton from '../buttons/ThemeSwitchButton'

const MainHeader = () => {
  return (
    <div className='w-screen relative shadow-md sm:shadow-none border-b-[1px] border-gray-200 dark:border-gray-600 sm:border-transparent'>
      <div className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4 bg-white dark:bg-slate-800'>
        <div className='h-fit w-fit sm:w-5/12 flex flex-row-reverse items-center gap-x-4'>
          <SignupOrLoginButton />

          <ShoppingCartSection />
          
          <ThemeSwitchButton />
        </div>

        {/* Search Bar - Hidden on very small screens */}
        <div className='hidden h-fit lg:flex flex-row w-fit px-3'>
          <SearchBar />
        </div>

        <div
          className='w-fit sm:w-1/3 flex flex-row items-center justify-end'
        >

          <div className='relative h-full sm:flex sm:items-center sm:justify-start w-full md:mx-2 mx-0'>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={120}
              className="object-contain dark:invert dark:hue-rotate-180 -mr-8"
            />
          </div>
        </div>

      </div>

      {/* Additional Search Bar - Only shown on very small screens */}
      <div className='lg:hidden w-full flex items-center justify-center px-4 py-2 border-b dark:bg-slate-800 border-gray-100 dark:border-none '>
        <SearchBar />
      </div>

    </div>
  )
}

export default MainHeader