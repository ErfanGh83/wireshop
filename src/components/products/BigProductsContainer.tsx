import React from 'react'
import BigProductContainer from './BigProductContainer'
import { bigProducts } from '../../../public/api/examples'
import Link from 'next/link'

const BigProductsContainer = () => {
    return (
        <div
            className="w-full container mx-auto px-2" dir="rtl"
        >
            <div className="w-full pb-4">
                {/* Mobile/Tablet: Horizontal scroll */}
                <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-8 pb-4">
                    {bigProducts.map((product) => (
                        <Link href={product.link} key={product.id} className="flex-shrink-0 snap-center sm:w-[40vw]">
                            <BigProductContainer
                                title={product.title}
                                imageUrl={product.imageUrl}
                                description={product.description}
                            />
                        </Link>
                    ))}
                </div>

                {/* Desktop: Grid layout */}
                <div className="hidden md:w-3/4 mx-auto md:grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {bigProducts.map((product) => (
                        <Link href={product.link} key={product.id} className='size-fit m-auto'>
                            <BigProductContainer
                                title={product.title}
                                imageUrl={product.imageUrl}
                                description={product.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BigProductsContainer