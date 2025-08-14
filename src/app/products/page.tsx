"use client"

import FiltersButton from '@/components/buttons/FiltersButton'
import MainLayout from '@/components/layouts/MainLayout'
import FiltersModal from '@/components/products/filters/FiltersModal'
import LoadMore from '@/components/products/LoadMore'
import { Filters } from '@/types/products'
import React, { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import OrdersButton from '@/components/buttons/OrdersButton'
import OrdersModal from '@/components/products/sort/OrdersModal'

// This component is separated so useSearchParams is wrapped in Suspense
function ProductsContent({
  filters,
  order
}: {
  filters: Filters | null;
  order: string | null;
}) {
  const searchParams = useSearchParams()
  const searchedString = searchParams.get("q")

  return (
    <LoadMore
      filters={filters}
      search={searchedString || ''}
      order={order}
    />
  )
}

const ProductsPage = () => {
  const [filters, setFilters] = useState<Filters | null>(null)
  const [filtersModalIsOpen, setFiltersModalOpen] = useState(false)
  const [order, setOrder] = useState<string | null>('most-popular')
  const [ordersModalIsOpen, setOrdersModalIsOpen] = useState(false)

  return (
    <MainLayout>
      <div className="relative flex size-full bg-white dark:bg-slate-900 text-black dark:text-white">
        {/* Sticky Filters Column */}
        <div className={`fixed sm:sticky top-0 h-screen overflow-y-auto transition-all duration-300 ease-in-out 
          ${filtersModalIsOpen ? 'w-full sm:w-80 3xl:w-100 @min-4xl:w-1/2' : 'w-0'} 
          bg-white dark:bg-slate-800 z-[60] sm:z-20`}
        >
          {filtersModalIsOpen && (
            <div dir='ltr' className="h-full overflow-hidden">
              <FiltersModal
                setFilters={setFilters}
                filters={filters}
                setFiltersModalOpen={setFiltersModalOpen}
                filtersModalIsOpen={filtersModalIsOpen}
              />
            </div>
          )}
        </div>

        {/* Main Content Area */}
        <div dir="ltr" className="overflow-y-auto flex-1">
          <div dir="rtl" className={`w-full flex flex-row-reverse gap-2 px-4 py-2 sticky top-0 z-10 justify-end border-b-2 shadow-sm border-b-gray-100 dark:border-t-2 dark:border-b-gray-700 dark:border-t-slate-700 bg-white dark:bg-slate-800 ${filtersModalIsOpen ? 'h-0 hidden' : 'h-fit'}`}>

            {!filtersModalIsOpen && (
              <FiltersButton
                setFiltersModalOpen={setFiltersModalOpen}
                filtersModalIsOpen={filtersModalIsOpen}
              />
            )}

            {!filtersModalIsOpen && (
              <div className='size-fit flex relative'>
                <OrdersButton
                  setOrdersModalIsOpen={setOrdersModalIsOpen}
                  ordersModalIsOpen={ordersModalIsOpen}
                />
                {ordersModalIsOpen && (
                  <OrdersModal
                    setOrder={setOrder}
                    order={order}
                  />
                )}
              </div>
            )}
          </div>

          <div dir="rtl" className="p-4 max-w-[2000px] mx-auto">
            {/* Wrap in Suspense so useSearchParams works in static export */}
            <Suspense fallback={<div>Loading products...</div>}>
              <ProductsContent filters={filters} order={order} />
            </Suspense>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductsPage
