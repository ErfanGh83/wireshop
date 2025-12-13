import React from 'react'
import { circularProducts } from '../../../public/api/examples'
import CircularProductContainer from './CircularProductContainer'

const CircularProductsContainer = () => {
  return (
    <div className="w-full px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">انواع سیم ها</h2>
      </div>
      <div className="w-full flex flex-row overflow-x-auto md:w-full xl:w-3/4 md:mx-auto pb-4 scroll-smooth snap-x snap-mandatory md:grid md:grid-cols-6 md:overflow-x-hidden md:grid-rows-2 md:h-fit md:gap-y-8">
        {circularProducts.slice(0, 12).map((product) => (
          <div key={product.id} className="flex-shrink-0 snap-center">
            <CircularProductContainer
              title={product.title}
              imageUrl={product.imageUrl}
              className="w-28 h-28"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CircularProductsContainer