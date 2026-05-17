'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import MainLayout from '@/components/layouts/MainLayout'
import FiltersButton from '@/components/buttons/FiltersButton'
import OrdersButton from '@/components/buttons/OrdersButton'
import FiltersModal from '@/components/products/filters/FiltersModal'
import OrdersModal from '@/components/products/sort/OrdersModal'
import LoadMore from '@/components/products/LoadMore'

import { Filters } from '@/types/products'

/* ------------------------------------------------
   INNER COMPONENT
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
  const searchParams = useSearchParams()

  const q = searchParams.get('q')
  const c = searchParams.get('c')
  const b = searchParams.get('b')
  const atr = searchParams.get('atr')
  const v = searchParams.get('v')


  const [modeResolved, setModeResolved] = useState(false)

  /* ----------------------------------
     URL → STATE (SOURCE OF TRUTH)
  -----------------------------------*/
  useEffect(() => {
    // SEARCH MODE
    if (q) {
      setFilters(null)
      setModeResolved(true)
      return
    }

    // CATEGORY MODE
    if (c) {
      const filtersFromUrl: Filters = {
        category: c,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        brand: undefined,
      }

      // ATTRIBUTE FILTER (only if BOTH atr & v exist)
      if (atr && v) {
        filtersFromUrl.attributes = {
          [atr]: [v],
        }
      }

      setFilters(filtersFromUrl)
      setModeResolved(true)
      return
    }

    // BRAND MODE
    if (b) {
      setFilters({
        brand: b,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        category: undefined,
      })
      setModeResolved(true)
      return
    }

    // NO PARAMS
    setFilters(null)
    setModeResolved(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, c, b])

  if (!modeResolved) return null

  return (
    <LoadMore
      filters={filters}
      search={q || ''}
      order={order}
    />
  )
}

/* ------------------------------------------------
   PAGE COMPONENT
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