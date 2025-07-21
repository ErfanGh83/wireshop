import React from 'react'
import { circularProducts } from '../../../public/api/examples'
import CircularProductContainer from './CircularProductContainer'

const CircularProductsContainer = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="w-3/5 h-fit m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 md:gap-y-24">
        {circularProducts.slice(0, 12).map((product) => (
          <CircularProductContainer
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default CircularProductsContainer