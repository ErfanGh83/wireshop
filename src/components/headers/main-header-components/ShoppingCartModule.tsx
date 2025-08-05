import React, { Dispatch, SetStateAction } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { cartItems } from './exampleCartItems'
import ShoppingCartItem from './ShoppingCartItem'

type Props = {
    setModuleIsOpen: Dispatch<SetStateAction<boolean>>
}

const ShoppingCartModule = ({ setModuleIsOpen }: Props) => {

    const handleCloseModule = () => {
        setModuleIsOpen(false)
    }

    return (
        <div
            className="h-screen sm:h-[330px] md:h-[380px] xl:h-[450px] w-screen sm:w-[300px] md:w-[330px] xl:w-[380px] border-[1px] rounded-r-md rounded-b-md overflow-hidden border-gray-300 dark:border-slate-500 shadow-md bg-white dark:bg-slate-800 dark:text-white relative"
        >
            <button
                onClick={handleCloseModule}
                className="size-fit absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
            >
                <FaXmark size={20} />
            </button>

            <div
                className='size-full flex flex-col justify-between'
            >
                <div
                    className='w-full h-10 flex items-center justify-center'
                >
                    سبد خرید
                </div>

                <div
                    className='size-full flex flex-col gap-2 overflow-y-auto p-2 bg-gray-100 dark:bg-slate-800'
                >
                    {
                        cartItems.map((item, index) => (
                            <ShoppingCartItem key={index} title={item.title} image={item.image} quantity={item.quantity} price={item.price} discount={item.discount} total={item.total} onIncrease={() => {}} onDecrease={() => {}} />
                        ))
                    }
                </div>

                <div
                    className='w-full h-12 flex items-center justify-center'
                >
                    <button className='size-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors'>تسویه حساب</button>
                </div>
            </div>

        </div>
    )
}

export default ShoppingCartModule