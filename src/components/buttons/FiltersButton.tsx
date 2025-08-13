import React, { Dispatch, SetStateAction } from 'react'
import { FiFilter } from 'react-icons/fi'

type Props = {
    setFiltersModuleOpen: Dispatch<SetStateAction<boolean>>
    filtersModuleIsOpen: boolean
}

const FiltersButton = ({ setFiltersModuleOpen, filtersModuleIsOpen }: Props) => {
    
    const handleClick = () => {
        if(filtersModuleIsOpen){
            setFiltersModuleOpen(false)
        }
        else {
            setFiltersModuleOpen(true)
        }
    }

    return (
        <button
            onClick={handleClick}
            className='size-fit p-1 flex items-center justify-center gap-1 border-[1px] text-black dark:text-white border-gray-300 shadow-md hover:text-blue-500 rounded-sm dark:hover:text-blue-400 hover:shadow-blue-500 hover:border-blue-300 transition-all text-sm sm:text-xl cursor-pointer bg-white dark:bg-slate-600'
        >
            {filtersModuleIsOpen ? <p className='text-md'>بستن فیلتر ها</p> : <p className='text-md'>فیلترها</p>}
            <FiFilter/>
        </button>
    )
}

export default FiltersButton