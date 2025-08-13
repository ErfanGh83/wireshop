import React from 'react'
import { wireAndCableProducts } from '../../../public/api/examples'
import NormalProductContainer from './NormalProductContainer'
import Link from 'next/link'

const NormalProductsContainer = () => {
  return (
    <div className="container mx-auto px-4" dir="rtl">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">سیم و کابل با کیفیت</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">راهکارهای الکتریکی با کیفیت برای تمام نیازهای شما</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {wireAndCableProducts.map((product) => (
          <NormalProductContainer
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
            isSpecial={product.isSpecial}
            discount={product.discount}
            description={product.description}
          />
        ))}
      </div>

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