import MainLayout from '@/components/layouts/MainLayout'
import LoadMore from '@/components/products/LoadMore'
import React from 'react'

const ProductsPage = async () => {

    return (
        <MainLayout>
            <div
                className='size-full flex items-center justify-center overflow-y-auto'
            >
                <div className='size-full max-w-[2000px]'>
                    <LoadMore />
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductsPage;