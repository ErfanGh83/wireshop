import React, { Dispatch, SetStateAction } from 'react'
import { BiSort } from 'react-icons/bi'

type Props = {
    setOrdersModuleIsOpen: Dispatch<SetStateAction<boolean>>
    ordersModuleIsOpen: boolean
}

const OrdersButton = ({ setOrdersModuleIsOpen, ordersModuleIsOpen }: Props) => {
    
    const handleClick = () => {
        if(ordersModuleIsOpen){
            setOrdersModuleIsOpen(false)
        }
        else {
            setOrdersModuleIsOpen(true)
        }
    }

    return (
        <button
            onClick={handleClick}
            className='size-fit p-1 flex items-center justify-center gap-1 rounded-md border-[1px] border-black text-sm sm:text-xl cursor-pointer hover:text-blue-400 text-black bg-white dark:text-white dark:bg-slate-600 transition-colors'
        >
            {ordersModuleIsOpen ? <p className='text-md'>بستن منو</p> : <p className='text-md'>مرتب سازی</p>}
            <BiSort />
        </button>
    )
}

export default OrdersButton