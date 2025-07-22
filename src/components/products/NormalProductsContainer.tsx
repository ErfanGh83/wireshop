import React from 'react'
import { wireAndCableProducts } from '../../../public/api/examples'
import NormalProductContainer from './NormalProductContainer'

const NormalProductsContainer = () => {
  return (
    <div className="container mx-auto px-4 py-8" dir="rtl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">سیم و کابل با کیفیت</h2>
        <p className="text-gray-600 mt-2">راهکارهای الکتریکی با کیفیت برای تمام نیازهای شما</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
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
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
          مشاهده محصولات بیشتر
        </button>
      </div>
    </div>
  )
}

export default NormalProductsContainer