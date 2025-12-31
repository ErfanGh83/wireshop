'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import MainLayout from '@/components/layouts/MainLayout'
import FiltersButton from '@/components/buttons/FiltersButton'
import OrdersButton from '@/components/buttons/OrdersButton'
import FiltersModal from '@/components/products/filters/FiltersModal'
import OrdersModal from '@/components/products/sort/OrdersModal'
import LoadMore from '@/components/products/LoadMore'

import { Filters } from '@/types/products'

/* ------------------------------------------------
   INNER COMPONENT (can use useSearchParams)
-------------------------------------------------*/
function ProductsInner({
  filters,
  setFilters,
  order,
}: {
  filters: Filters | null
  setFilters: React.Dispatch<React.SetStateAction<Filters | null>>
  order: string | null
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const q = searchParams.get('q')
  const c = searchParams.get('c')
  const b = searchParams.get('b') // ✅ BRAND

  /* ----------------------------------
     URL → STATE SYNC
  -----------------------------------*/
  useEffect(() => {
    // CATEGORY MODE
    if (c) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      setFilters(prev => ({
        ...(prev || {}),
        category: c,
        brand: undefined, // reset brand if category used
      }))

      if (q || b) {
        router.replace(`/products?c=${c}`)
      }
      return
    }

    // BRAND MODE
    if (b) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      setFilters(prev => ({
        ...(prev || {}),
        brand: b,
        category: undefined, // reset category
      }))

      if (q) {
        router.replace(`/products?b=${b}`)
      }
      return
    }

    // SEARCH MODE
    if (q) {
      if (filters) setFilters(null)
      return
    }

    // NO FILTER / NO SEARCH
    if (filters) {
      router.replace('/products')
    }
  }, [c, b, q])

  /* ----------------------------------
     FILTERS → URL
  -----------------------------------*/
  useEffect(() => {
    if (filters?.category) {
      router.replace(`/products?c=${filters.category}`)
      return
    }

    if (filters?.brand) {
      router.replace(`/products?b=${filters.brand}`)
      return
    }
  }, [filters])

  return (
    <LoadMore
      filters={filters}
      search={q || ''}
      order={order}
    />
  )
}

/* ------------------------------------------------
   PAGE COMPONENT (NO useSearchParams here)
-------------------------------------------------*/
const ProductsPage = () => {
  const [filters, setFilters] = useState<Filters | null>(null)
  const [filtersModalIsOpen, setFiltersModalOpen] = useState(false)
  const [order, setOrder] = useState<string | null>('most-popular')
  const [ordersModalIsOpen, setOrdersModalIsOpen] = useState(false)

  return (
    <MainLayout>
      <div className="relative flex size-full bg-white dark:bg-slate-900 text-black dark:text-white pb-4 sm:pb-0 sm:pt-12">
        {/* Filters sidebar */}
        <div
          className={`fixed sm:sticky top-0 h-screen overflow-y-auto transition-all duration-300
          ${filtersModalIsOpen ? 'w-full sm:w-80 3xl:w-100' : 'w-0'}
          bg-white dark:bg-slate-800 z-[60] sm:z-20`}
        >
          {filtersModalIsOpen && (
            <FiltersModal
              setFilters={setFilters}
              filters={filters}
              setFiltersModalOpen={setFiltersModalOpen}
              filtersModalIsOpen={filtersModalIsOpen}
            />
          )}
        </div>

        {/* Main content */}
        <div dir="ltr" className="overflow-y-auto flex-1">
          {/* Top bar */}
          <div
            dir="rtl"
            className={`w-full flex flex-row-reverse gap-2 px-4 py-2 sticky top-0 z-10 justify-end
            border-b-2 shadow-sm border-b-gray-100 dark:border-b-gray-700
            bg-white dark:bg-slate-800
            ${filtersModalIsOpen ? 'hidden' : ''}`}
          >
            <FiltersButton
              setFiltersModalOpen={setFiltersModalOpen}
              filtersModalIsOpen={filtersModalIsOpen}
            />

            <div className="relative">
              <OrdersButton
                setOrdersModalIsOpen={setOrdersModalIsOpen}
                ordersModalIsOpen={ordersModalIsOpen}
              />
              {ordersModalIsOpen && (
                <OrdersModal setOrder={setOrder} order={order} />
              )}
            </div>
          </div>

          {/* Products */}
          <div dir="rtl" className="p-4 max-w-[2000px] mx-auto">
            <Suspense fallback={<div>در حال بارگذاری محصولات...</div>}>
              <ProductsInner
                filters={filters}
                setFilters={setFilters}
                order={order}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductsPage