import React from 'react'
import SearchBar from './main-header-components/SearchBar'
import HamburgerMenuSection from './main-header-components/HamburgerMenuSection'
import SignupOrLoginButton from '../buttons/SignupOrLoginButton'

const MainHeader = () => {
  return (
    <>
      {/* Main Header Row */}
      <div className='w-screen h-12 md:h-14 xl:h-16 flex flex-row-reverse items-center justify-between px-4 border-b-[4px] border-gray-100'>
        <div className='size-fit'>
          <SignupOrLoginButton />
        </div>

        {/* Search Bar - Hidden on very small screens */}
        <div className='hidden min-[460px]:block w-full items-center justify-center'>
          <SearchBar />
        </div>

        <div className='size-fit flex flex-row-reverse items-center gap-4'>
          <HamburgerMenuSection />
        </div>
      </div>

      {/* Additional Search Bar - Only shown on very small screens */}
      <div className='min-[460px]:hidden w-full px-4 py-2 border-b border-gray-100'>
        <SearchBar />
      </div>
    </>
  )
}

export default MainHeader