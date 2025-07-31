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
            className='size-fit p-1 flex items-center justify-center gap-1 rounded-md border-[1px] border-black text-sm sm:text-xl cursor-pointer hover:text-blue-400 text-black bg-white dark:text-white dark:bg-slate-600 transition-colors'
        >
            {filtersModuleIsOpen ? <p className='text-md'>بستن فیلتر ها</p> : <p className='text-md'>فیلترها</p>}
            <FiFilter/>
        </button>
    )
}

export default FiltersButton