"use client"

import React, { Dispatch, SetStateAction } from 'react'
import { orders } from './ordersList'


type Props = {
    order: string | null
    setOrder: Dispatch<SetStateAction<string | null>>
}

const OrdersModule = ({ order, setOrder }: Props) => {


    return (
        <div className='absolute top-0 right-0 mt-12 h-fit w-36 border-[1px] border-gray-700 rounded-md overflow-hidden'>
            {
                orders.map((orderOption) => (
                    <button
                        key={orderOption.en}
                        onClick={() => setOrder(orderOption.en)}
                        className={`w-full h-fit px-1 py-2 text-md cursor-pointer border-b-[1px] border-b-gray-400 text-black dark:text-white dark:bg-slate-600 ${orderOption.en === order? 'bg-blue-300' : 'bg-white hover:bg-blue-200'}`}
                        dir='rtl'
                    >
                        <p>{ orderOption.fa }</p>
                    </button>
                ))
            }
        </div>
    )
}

export default OrdersModule