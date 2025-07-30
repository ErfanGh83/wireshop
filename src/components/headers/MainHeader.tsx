import React from 'react'
import SearchBar from './main-header-components/SearchBar'
import HamburgerMenuSection from './main-header-components/HamburgerMenuSection'
import SignupOrLoginButton from '../buttons/SignupOrLoginButton'
import ShoppingCartButton from '../buttons/ShoppingCartButton'

const MainHeader = () => {
  return (
    <>
      <div className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4 border-b-1 bg-white dark:bg-slate-700 border-gray-100 dark:border-transparent'>
        <div className='size-fit flex flex-row-reverse items-center gap-x-4'>
          <SignupOrLoginButton />
          
          <ShoppingCartButton />
        </div>

        {/* Search Bar - Hidden on very small screens */}
        <div className='hidden min-[550px]:block w-full items-center justify-center'>
          <SearchBar />
        </div>

        <div className='size-fit flex flex-row-reverse items-center gap-4'>
          <HamburgerMenuSection />
        </div>
      </div>

      {/* Additional Search Bar - Only shown on very small screens */}
      <div className='min-[550px]:hidden w-full px-4 py-2 border-b dark:bg-slate-600 border-gray-100 dark:border-none'>
        <SearchBar />
      </div>
    </>
  )
}

export default MainHeader