"use client"

import { Filters } from '@/types/products'
import React, { Dispatch, SetStateAction } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { MdArrowDropDown } from 'react-icons/md'

type Props = {
    filters: Filters | null
    setFilters: Dispatch<SetStateAction<Filters | null>>
    setFiltersModuleOpen: Dispatch<SetStateAction<boolean>>
    filtersModuleIsOpen: boolean
}

const FiltersModule = ({ filters, setFilters, setFiltersModuleOpen, filtersModuleIsOpen }: Props) => {


    return (
        <div
            className='relative h-full w-full pt-6 sm:pt-12 flex flex-row'
        >
            <button
                onClick={() => { setFiltersModuleOpen(false) }}
                className='absolute top-2 right-2 size-fit hover:cursor-pointer'
            >
                <FaXmark className='m-auto' size={24} />
            </button>

            <div
                className='size-full flex flex-col'
            >
                <div
                    className='w-full h-16 flex items-center justify-between px-4 text-2xl bg-blue-100'
                >
                    <p>برندها</p>
                    <MdArrowDropDown className='-rotate-90' />
                </div>

                <div
                    className='w-full h-16 flex items-center justify-between px-4 text-2xl bg-blue-100'
                >
                    <p>برندها</p>
                    <MdArrowDropDown className='-rotate-90' />
                </div>

                <div
                    className='w-full h-16 flex items-center justify-between px-4 text-2xl bg-blue-100'
                >
                    <p>برندها</p>
                    <MdArrowDropDown className='-rotate-90' />
                </div>
            </div>
        </div>
    )
}

export default FiltersModule