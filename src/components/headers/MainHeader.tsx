import React from 'react'
import SearchBar from './main-header-components/SearchBar'
import HamburgerMenuSection from './main-header-components/HamburgerMenuSection'
import SignupOrLoginButton from '../buttons/SignupOrLoginButton'
import ShoppingCartButton from '../buttons/ShoppingCartButton'

const MainHeader = () => {
  return (
    <>
      <div className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4 border-b-1 bg-white dark:bg-slate-700 border-gray-100 dark:border-transparent'>
        <div className='h-fit w-fit sm:w-1/3 flex flex-row-reverse items-center gap-x-4'>
          <SignupOrLoginButton />

          <ShoppingCartButton />
        </div>

        {/* Search Bar - Hidden on very small screens */}
        <div className='hidden h-fit sm:flex flex-row w-fit px-3'>
          <SearchBar />
        </div>

        <div className='sm:hidden size-fit flex flex-row-reverse items-center gap-4'>
          <HamburgerMenuSection />
        </div>

        <div className='hidden sm:flex sm:w-1/6 md:w-1/5 lg:w-1/4 xl:w-1/3'></div>
      </div>

      {/* Additional Search Bar - Only shown on very small screens */}
      <div className='sm:hidden w-full px-4 py-2 border-b dark:bg-slate-600 border-gray-100 dark:border-none'>
        <SearchBar />
      </div>

    </>
  )
}

export default MainHeader