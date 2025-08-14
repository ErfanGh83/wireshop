import React from 'react'
import SubHeaderItemsContainer from './sub-header-components/SubHeaderItemsContainer'
const SubHeader = () => {
    return (
        <div
            className='fixed bottom-0 left-0 z-40 sm:static w-screen h-fit sm:h-12 sm:pb-1 flex flex-row-reverse items-center justify-center sm:px-2 border-t-2 sm:border-b-2 bg-white dark:bg-slate-800 border-gray-200 sm:border-gray-100 dark:border-gray-600 sm:dark:border-gray-800'
        >
            <SubHeaderItemsContainer />

        </div>
    )
}

export default SubHeader