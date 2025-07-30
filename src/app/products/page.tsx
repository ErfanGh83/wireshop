import MainLayout from '@/components/layouts/MainLayout'
import LoadMore from '@/components/products/LoadMore'
import { fetchProducts } from '@/lib/api/action'
import { ProductsResponse } from '@/types/products'
import React from 'react'

const ProductsPage = async () => {

    const data = await fetchProducts({ page: 1, order: 'popularity' }) as ProductsResponse;
    console.log(data)

    return (
        <MainLayout>
            <div className='size-full max-w-[2000px] overflow-y-auto'>
                <LoadMore />
            </div>
        </MainLayout>
    )
}

export default ProductsPage;