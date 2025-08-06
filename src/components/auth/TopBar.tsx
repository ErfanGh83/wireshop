import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { FaXmark } from 'react-icons/fa6'

type Props = {
    mode: string,
    setMode: Dispatch<SetStateAction<"login" | "signup" | "forgotpass">>
}

const TopBar = ({ mode, setMode }: Props) => {
    return (
        <div className='size-full'>
            <div className='size-full flex flex-row-reverse items-center justify-end px-4 gap-2'>

                <button
                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    className='size-fit mx-1 my-1 cursor-pointer text-xl text-blue-500'
                >
                    {mode === 'login' ? ' ثبت نام کنید' : mode === 'signup' ? ' از اینجا وارد شوید' : 'ورود'}
                </button>

                <p className='text-xl text-gray-700 dark:text-gray-200'>
                    {mode === 'login'
                        ? 'حساب کاربری ندارید؟'
                        : mode === 'signup' ?
                         'حساب کاربری دارید؟'
                         :
                         'بازکشت به صفحه'
                        }
                </p>

                <Link href={'/'} className='size-fit'><FaXmark /></Link>
            </div>
        </div>
    )
}

export default TopBar