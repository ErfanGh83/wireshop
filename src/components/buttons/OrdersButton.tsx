import React, { Dispatch, SetStateAction } from 'react'
import { BiSort } from 'react-icons/bi'

type Props = {
    setOrdersModalIsOpen: Dispatch<SetStateAction<boolean>>
    ordersModalIsOpen: boolean
}

const OrdersButton = ({ setOrdersModalIsOpen, ordersModalIsOpen }: Props) => {
    
    const handleClick = () => {
        if(ordersModalIsOpen){
            setOrdersModalIsOpen(false)
        }
        else {
            setOrdersModalIsOpen(true)
        }
    }

    return (
        <button
            onClick={handleClick}
            className='size-fit p-1 flex items-center justify-center gap-1 border-[1px] text-black dark:text-white border-gray-300 shadow-md hover:text-blue-500 rounded-sm dark:hover:text-blue-400 hover:shadow-blue-500 hover:border-blue-300 transition-all text-sm sm:text-xl cursor-pointer bg-white dark:bg-slate-800'
        >
            {ordersModalIsOpen ? <p className='text-md'>بستن منو</p> : <p className='text-md'>مرتب سازی</p>}
            <BiSort />
        </button>
    )
}

export default OrdersButton