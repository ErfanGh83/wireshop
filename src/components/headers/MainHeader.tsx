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


        <div className='w-fit flex flex-row-reverse items-center '>
          {/* Search Bar - Hidden on very small screens */}
          <div className='hidden h-fit lg:flex flex-row w-fit px-3'>
            <SearchBar />
          </div>

          <div className="flex flex-row items-center justify-end w-fit sm:w-fit">
            <div className="relative size-24 sm:size-36 md:mr-2">
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                className="object-contain dark:invert dark:hue-rotate-180"
                priority
              />
            </div>
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