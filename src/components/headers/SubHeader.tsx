import React from 'react'
import SubHeaderItemsContainer from './sub-header-components/SubHeaderItemsContainer'

const SubHeader = () => {
    return (
        <div
            className='w-screen h-12 xl:h-14 flex flex-row-reverse items-center justify-between px-2 border-b-2 bg-white dark:bg-slate-700 border-gray-100 dark:border-gray-700'
        >
            <SubHeaderItemsContainer />
        </div>
    )
}

export default SubHeader