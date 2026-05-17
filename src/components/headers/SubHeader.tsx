import React from 'react'
import SubHeaderItemsContainer from './sub-header-components/SubHeaderItemsContainer'
const SubHeader = () => {
    return (
        <div
            className='w-full fixed bottom-0 left-0 z-40 sm:absolute sm:-mb-12 sm:-ml-2 h-fit sm:h-12 sm:pb-1 flex flex-row-reverse items-center justify-end sm:px-2  bg-white sm:bg-transparent border-gray-200 dark:border-gray-600'
        >
            <SubHeaderItemsContainer />

        </div>
    )
}

export default SubHeader