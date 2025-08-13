"use client"

import FiltersButton from '@/components/buttons/FiltersButton'
import MainLayout from '@/components/layouts/MainLayout'
import FiltersModule from '@/components/products/filters/FiltersModule'
import LoadMore from '@/components/products/LoadMore'
import { Filters } from '@/types/products'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import OrdersButton from '@/components/buttons/OrdersButton'
import OrdersModule from '@/components/products/sort/OrdersModule'

const ProductsPage = () => {
    const [filters, setFilters] = useState<Filters | null>(null)
    const [filtersModuleIsOpen, setFiltersModuleOpen] = useState(false)
    const [order, setOrder] = useState<string | null>('most-popular')
    const [ordersModuleIsOpen, setOrdersModuleIsOpen] = useState(false)
    const searchParams = useSearchParams()
    const searchedString = searchParams.get("q")

    return (
        <MainLayout>
            <div className="relative flex size-full bg-white dark:bg-slate-900 text-black dark:text-white">
                {/* Sticky Filters Column */}
                <div className={`fixed sm:sticky top-0 h-screen overflow-y-auto transition-all duration-300 ease-in-out 
                               ${filtersModuleIsOpen ? 'w-full sm:w-80 3xl:w-100 @min-4xl:w-1/2' : 'w-0'} bg-white dark:bg-slate-800 z-50 sm:z-20`}>
                    {filtersModuleIsOpen && (
                        <div dir='ltr' className="h-full overflow-hidden ">
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
                <div dir="ltr" className=" overflow-y-auto flex-1">
                    <div dir="rtl" className={`w-full flex flex-row-reverse gap-2 px-4 py-2 sticky top-0 z-10 justify-end border-b-2 border-b-gray-100 dark:border-t-2 dark:border-b-gray-700 dark:border-t-slate-700 shadow-md bg-white dark:bg-slate-800 ${filtersModuleIsOpen ? 'h-0 hidden' : 'h-fit'}`}>

                        {
                            !filtersModuleIsOpen &&
                            <FiltersButton
                                setFiltersModuleOpen={setFiltersModuleOpen}
                                filtersModuleIsOpen={filtersModuleIsOpen}
                            />
                        }


                        {
                            !filtersModuleIsOpen && (
                                <div className='size-fit flex relative'>

                                    <OrdersButton
                                        setOrdersModuleIsOpen={setOrdersModuleIsOpen}
                                        ordersModuleIsOpen={ordersModuleIsOpen}
                                    />

                                    {
                                        ordersModuleIsOpen &&
                                        <OrdersModule
                                            setOrder={setOrder}
                                            order={order}
                                        />
                                    }
                                </div>
                            )
                        }

                    </div>


                    <div dir="rtl" className="p-4 max-w-[2000px] mx-auto">
                        <LoadMore
                            filters={filters}
                            search={searchedString || ''}
                            order={order}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductsPage