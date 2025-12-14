"use client"

import FiltersButton from '@/components/buttons/FiltersButton'
import MainLayout from '@/components/layouts/MainLayout'
import FiltersModal from '@/components/products/filters/FiltersModal'
import LoadMore from '@/components/products/LoadMore'
import { Filters } from '@/types/products'
import React, { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import OrdersButton from '@/components/buttons/OrdersButton'
import OrdersModal from '@/components/products/sort/OrdersModal'

function ProductsContent({
  filters,
  order
}: {
  filters: Filters | null
  order: string | null
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

  const router = useRouter()
  const searchParams = useSearchParams()

  const q = searchParams.get('q')
  const c = searchParams.get('c')

  /* ----------------------------------
     URL → STATE SYNC
  -----------------------------------*/
  useEffect(() => {
    // CATEGORY MODE
    if (c) {
      setFilters(prev => ({
        ...(prev || {}),
        category: c
      }))

      // remove search param if exists
      if (q) {
        router.replace(`/products?c=${c}`)
      }
      return
    }

    // SEARCH MODE
    if (q) {
      if (filters) setFilters(null)
      return
    }

    // NO SEARCH / NO FILTER
    if (filters) {
      router.replace('/products')
    }
  }, [c, q])

  /* ----------------------------------
     FILTERS → URL
  -----------------------------------*/
  useEffect(() => {
    if (filters?.category) {
      router.replace(`/products?c=${filters.category}`)
    }
  }, [filters])

  return (
    <MainLayout>
      <div className="relative flex size-full bg-white dark:bg-slate-900 text-black dark:text-white pb-4 sm:pb-0 sm:pt-12">
        <div className={`fixed sm:sticky top-0 h-screen overflow-y-auto transition-all duration-300
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

        <div dir="ltr" className="overflow-y-auto flex-1">
          <div dir="rtl" className={`w-full flex flex-row-reverse gap-2 px-4 py-2 sticky top-0 z-10 justify-end
            border-b-2 shadow-sm border-b-gray-100 dark:border-t-2 dark:border-b-gray-700 dark:border-t-slate-700
            bg-white dark:bg-slate-800 ${filtersModalIsOpen ? 'hidden' : ''}`}>

            <FiltersButton
              setFiltersModalOpen={setFiltersModalOpen}
              filtersModalIsOpen={filtersModalIsOpen}
            />

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
          </div>

          <div dir="rtl" className="p-4 max-w-[2000px] mx-auto">
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
