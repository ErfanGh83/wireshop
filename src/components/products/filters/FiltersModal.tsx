"use client"

import { Filters } from '@/types/products'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import PriceRange from './filters/PriceRange'
import Categories from './filters/Categories'
import Brands from './filters/Brands'

type Props = {
    filters: Filters | null
    setFilters: Dispatch<SetStateAction<Filters | null>>
    setFiltersModalOpen: Dispatch<SetStateAction<boolean>>
    filtersModalIsOpen: boolean
}

const FiltersModal = ({ filters, setFilters, setFiltersModalOpen }: Props) => {
    // Initialize all filter states with defaults or values from props
    const [brand, setBrand] = useState<string | null>(filters?.brand || null)
    const [priceRange, setPriceRange] = useState<[number, number]>(filters?.priceRange || [0, 1000])
    const [onlyInStock, setOnlyInStock] = useState<boolean>(filters?.onlyInStock || false)
    const [category, setCategory] = useState<string | null>(filters?.category || '')

    // Update local states when filters prop changes (e.g., when reset)
    useEffect(() => {
        setBrand(filters?.brand || null)
        setPriceRange(filters?.priceRange || [0, 1000])
        setOnlyInStock(filters?.onlyInStock || false)
        setCategory(filters?.category || '')
    }, [filters])

    // Apply all filters
    const applyFilters = () => {
        setFilters({
            brand,
            priceRange,
            onlyInStock,
            category
        })
    }

    // Reset all filters to empty/default values
    const resetFilters = () => {
        setBrand(null)
        setPriceRange([0, 1000])
        setOnlyInStock(false)
        setCategory('')
        setFilters(null) // Or set to default values if you prefer
    }

    // Close modal and apply filters
    const handleClose = () => {
        applyFilters()
        setFiltersModalOpen(false)
    }

    const handleCloseWithoutApplying = () => {
        setFiltersModalOpen(false)
    }

    return (
        <div className='relative h-full flex flex-col pt-12 pb-24 lg:pb-16 sm:h-[92vh] w-full border-l-2 px-4 border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800'>
            <button
                onClick={handleCloseWithoutApplying}
                className='absolute top-4 right-4 size-fit hover:cursor-pointer'
            >
                <FaXmark className='m-auto dark:text-white' size={24} />
            </button>

            <div className='w-full h-full flex flex-col'>
                {/* Scrollable filters area */}
                <div className='flex-1 overflow-y-auto py-2'>
                    <div className='space-y-4'>

                        {/* Brand Filter */}
                        <Brands brand={brand} setBrand={setBrand} />

                        {/* Price Range Filter */}
                        <PriceRange
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            min={0}
                            max={10000}
                        />

                        {/* In Stock Filter */}
                        <div dir='rtl' className='w-full flex items-center justify-between p-4 bg-blue-100 dark:bg-slate-600 dark:text-white rounded-lg'>
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
                </div>

                {/* Fixed action buttons at bottom */}
                <div className='w-full h-fit flex flex-row gap-4 px-4 sm:pb-2 pt-4'>
                    <button
                        onClick={resetFilters}
                        className='w-full h-16 text-2xl sm:text-lg px-4 py-2 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300'
                    >
                        حذف فیلترها
                    </button>
                    <button
                        onClick={handleClose}
                        className='w-full h-16 text-2xl sm:text-lg px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600'
                    >
                        اعمال فیلترها
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FiltersModal