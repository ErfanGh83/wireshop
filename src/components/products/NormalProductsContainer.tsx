"use client"

import React, { useEffect, useState } from 'react'
import NormalProductContainer from './NormalProductContainer'
import Link from 'next/link'
import { fetchProducts } from '@/lib/api/action'
import { VscLoading } from 'react-icons/vsc'
import { LuCable } from 'react-icons/lu'
import { FaShoppingCart } from 'react-icons/fa'

interface BackendProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  weightKg: number;
  stock: number;
  images: string[];
  category: { id: string; name: string };
  attributes: { id: string; name: string; value: string }[];
}

interface BackendResponse {
  data: BackendProduct[];
  page: number;
  limit: number;
  total: number;
}

interface Error {
  status: number
  message: string
}

interface BackendErrorResponse {
  error: Error
}

const isBackendErrorResponse = (res: BackendResponse | BackendErrorResponse): res is BackendErrorResponse => {
  return res && typeof res === "object" && "error" in res;
};

const NormalProductsContainer = () => {
  const [products, setProducts] = useState<BackendProduct[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const loadProducts = async () => {
    setLoading(true);
    setError(null);

    const res = (await fetchProducts({
      page: 1,
      filters: null,
      search: null,
      order: 'most-popular',
    })) as BackendResponse

    if (isBackendErrorResponse(res)) {
      switch (res.error.status) {
        case 0:
        case 500:
          setError("خطای شبکه یا سرور");
          break;
        case 404:
          setError("محصولی با مشخصات داده شده یافت نشد");
          break;
        default:
          setError("خطا در بارگذاری محصولات");
      }
    }
    const newProducts = res.data ?? [];
    setProducts(newProducts);
    setLoading(false);
  };
  useEffect(() => {
    loadProducts()
  }, [])

  const handleRetry = () => loadProducts();

  return (
    <div className="container mx-auto px-4" dir="rtl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">سیم و کابل با کیفیت</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">راهکارهای الکتریکی با کیفیت برای تمام نیازهای شما</p>
      </div>

      <>
        {error && products?.length === 0 ? (
          <div className="size-full flex flex-col pt-16 items-center justify-center gap-4">
            {error === "محصولی با مشخصات داده شده یافت نشد" ? (
              <>
                <div className="size-fit text-8xl text-gray-600 dark:text-gray-400 mt-24">
                  <FaShoppingCart />
                </div>
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-400">
                  {error}
                </p>
              </>
            ) : (
              <>
                <div className="size-fit text-8xl text-gray-600 dark:text-gray-400">
                  <LuCable />
                </div>
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-400">
                  خطای اتصال به شبکه رخ داده است
                </p>
                <button
                  onClick={handleRetry}
                  disabled={loading}
                  className="mt-4 text-2xl cursor-pointer text-gray-700 dark:text-gray-400"
                >
                  {loading && <VscLoading className="animate-spin mr-2" />}
                  تلاش مجدد
                </button>
              </>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
              {products?.map((product) => (
                <NormalProductContainer
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  //@ts-ignore
                  imageUrl={product.images.length ? product.images?.[0].url || "/placeholder.png" : "/placeholder.png"}
                  price={product.price}
                  available={product.stock > 0}
                  // discount={0}
                  description={product.description}
                />
              ))}
            </div>
          </>
        )}
      </>

      <div className="mt-10 text-center">
        <Link
          href={`/products`}
          className="bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 dark:bg-blue-600 text-white px-6 py-2 rounded-md cursor-pointer transition-colors"
        >
          مشاهده محصولات بیشتر
        </Link>
      </div>
    </div>
  )
}

export default NormalProductsContainer