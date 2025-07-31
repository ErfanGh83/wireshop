"use client"

import { Filters } from '@/types/products'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import Brands from './filters/Brands'
import PriceRange from './filters/PriceRange'
import Categories from './filters/Categories'

type Props = {
    filters: Filters | null
    setFilters: Dispatch<SetStateAction<Filters | null>>
    setFiltersModuleOpen: Dispatch<SetStateAction<boolean>>
    filtersModuleIsOpen: boolean
}

const FiltersModule = ({ filters, setFilters, setFiltersModuleOpen }: Props) => {
    // Initialize all filter states with defaults or values from props
    const [brands, setBrands] = useState<string[]>(filters?.brands || [])
    const [priceRange, setPriceRange] = useState<[number, number]>(filters?.priceRange || [0, 1000])
    const [onlyInStock, setOnlyInStock] = useState<boolean>(filters?.onlyInStock || false)
    const [category, setCategory] = useState<string>(filters?.category || '')

    // Update local states when filters prop changes (e.g., when reset)
    useEffect(() => {
        setBrands(filters?.brands || [])
        setPriceRange(filters?.priceRange || [0, 1000])
        setOnlyInStock(filters?.onlyInStock || false)
        setCategory(filters?.category || '')
    }, [filters])

    // Apply all filters
    const applyFilters = () => {
        setFilters({
            brands,
            priceRange,
            onlyInStock,
            category
        })
    }

    // Reset all filters to empty/default values
    const resetFilters = () => {
        setBrands([])
        setPriceRange([0, 1000])
        setOnlyInStock(false)
        setCategory('')
        setFilters(null) // Or set to default values if you prefer
    }

    // Close modal and apply filters
    const handleClose = () => {
        applyFilters()
        setFiltersModuleOpen(false)
    }

    const handleCloseWithoutApplying = () => {
        setFiltersModuleOpen(false)
    }

    return (
        <div className='relative h-screen py-10 sm:h-[84vh] w-full overflow-y-auto sm:pt-12 flex flex-row border-l-2 px-2 border-gray-200 bg-white dark:bg-slate-800'>
            <button
                onClick={handleCloseWithoutApplying}
                className='absolute top-2 right-2 size-fit hover:cursor-pointer'
            >
                <FaXmark className='m-auto' size={24} />
            </button>

            <div className='w-full h-fit flex flex-col items-center justify-between'>

                <div
                    className='h-full w-full flex flex-col items-center space-y-4'
                >
                    {/* Brands Filter */}
                    <Brands
                        brands={brands}
                        setBrands={setBrands}
                    />

                    {/* Price Range Filter */}
                    <PriceRange
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        min={0}
                        max={10000}
                    />

                    {/* In Stock Filter */}
                    <div className='w-full flex items-center justify-between p-4 bg-blue-100 rounded-lg'>
                        <label htmlFor='inStock' className='text-lg cursor-pointer'>
                            فقط کالاهای موجود
                        </label>
                        <input
                            id='inStock'
                            type='checkbox'
                            checked={onlyInStock}
                            onChange={(e) => setOnlyInStock(e.target.checked)}
                            className='w-5 h-5 cursor-pointer'
                        />
                    </div>

                    {/* Category Filter */}
                    <Categories
                        category={category}
                        setCategory={setCategory}
                    />

                </div>

                {/* Action Buttons */}
                <div className='w-full flex justify-between mt-4'>
                    <button
                        onClick={resetFilters}
                        className='px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300'
                    >
                        حذف فیلترها
                    </button>
                    <button
                        onClick={handleClose}
                        className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                    >
                        اعمال فیلترها
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FiltersModule