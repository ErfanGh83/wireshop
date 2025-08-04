import React from 'react'
import SubHeaderItemsContainer from './sub-header-components/SubHeaderItemsContainer'

const SubHeader = () => {
    return (
        <div
            className='hidden w-screen h-10 xl:h-12 sm:flex flex-row-reverse items-center justify-center px-2 border-b-2 bg-white dark:bg-slate-700 border-gray-100 dark:border-gray-700'
        >
            <SubHeaderItemsContainer />
        </div>
    )
}

export default SubHeader