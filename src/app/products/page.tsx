"use client"

import FiltersButton from '@/components/buttons/FiltersButton'
import MainLayout from '@/components/layouts/MainLayout'
import FiltersModule from '@/components/products/filters/FiltersModule'
import LoadMore from '@/components/products/LoadMore'
import { Filters } from '@/types/products'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const ProductsPage = () => {
    const [filters, setFilters] = useState<Filters | null>(null)
    const [filtersModuleIsOpen, setFiltersModuleOpen] = useState(false)
    const searchParams = useSearchParams()
    const searchedString = searchParams.get("q")

    return (
        <MainLayout>
            <div className="relative flex size-full">
                {/* Sticky Filters Column */}
                <div className={`fixed sm:sticky top-0 h-screen overflow-y-auto transition-all duration-300 ease-in-out 
                               ${filtersModuleIsOpen ? 'w-full sm:w-80 3xl:w-100 @min-4xl:w-1/2' : 'w-0'} bg-white dark:bg-slate-800 z-50 sm:z-20`}>
                    {filtersModuleIsOpen && (
                        <div className="max-h-screen overflow-hidden p-4">
                            <FiltersModule
                                setFilters={setFilters}
                                filters={filters}
                                setFiltersModuleOpen={setFiltersModuleOpen}
                                filtersModuleIsOpen={filtersModuleIsOpen}
                            />
                        </div>
                    )}
                </div>

                {/* Main Content Area */}
                <div className=" overflow-y-auto flex-1">
                    <div className="size-fit sticky top-0 z-20  dark:bg-slate-800 p-4 flex justify-end">
                        {
                            !filtersModuleIsOpen &&
                            <FiltersButton
                                setFiltersModuleOpen={setFiltersModuleOpen}
                                filtersModuleIsOpen={filtersModuleIsOpen}
                            />
                        }
                    </div>

                    <div className="p-4 max-w-[2000px] mx-auto">
                        <LoadMore
                            filters={filters}
                            search={searchedString || ''}
                            order="price-desc"
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductsPage