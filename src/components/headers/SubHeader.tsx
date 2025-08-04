import React from 'react'
import SubHeaderItemsContainer from './sub-header-components/SubHeaderItemsContainer'
import ThemeSwitchButton from '../buttons/ThemeSwitchButton'

const SubHeader = () => {
    return (
        <div
            className='hidden w-screen h-16 xl:h-12 pb-1 sm:flex flex-row-reverse items-center justify-between px-2 border-b-2 bg-white dark:bg-slate-800 border-gray-100 dark:border-gray-700'
        >
            <div className='w-16 md:w-20 h-fit'>
                <ThemeSwitchButton />
            </div>

            <SubHeaderItemsContainer />

            <div className='w-16'>

            </div>

        </div>
    )
}

export default SubHeader