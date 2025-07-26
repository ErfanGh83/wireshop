import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { FaXmark } from 'react-icons/fa6'

type Props = {
    mode: string,
    setMode: Dispatch<SetStateAction<"login" | "signup">>
}

const TopBar = ({mode, setMode}: Props) => {
    return (
        <div className='w-2/5 h-12 bg-transparent fixed z-10 top-0 right-0'>
            <div className='w-full h-full flex flex-row-reverse items-center justify-end px-4 gap-2'>

                <button
                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    className='size-fit mx-1 my-1 cursor-pointer text-xl text-blue-500'
                >
                    {mode === 'login' ? ' ثبت نام کنید' : ' از اینجا وارد شوید'}
                </button>

                <p className='text-xl text-gray-700 dark:text-gray-200'>
                    {mode === 'login'
                        ? 'حساب کاربری ندارید؟'
                        : 'حساب کاربری دارید؟'}
                </p>

                <Link href={'/'} className='size-fit'><FaXmark /></Link>
            </div>

            <hr className='w-1/5 text-gray-400' />
        </div>
    )
}

export default TopBar