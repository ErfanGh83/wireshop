
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    mode: string,
    setMode: Dispatch<SetStateAction<"login" | "signup" | "forgotpass">>
}

const BottomBar = ({ mode, setMode }: Props) => {
    return (
        <div className='w-screen flex items-center justify-center mx-auto'>
            <div className='size-fit flex flex-row-reverse items-center justify-end gap-1'>

                <button
                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                    className='min-w-fit size-fit mx-1 my-1 cursor-pointer text-md sm:text-xl text-blue-500'
                >
                    {mode === 'login' ? ' ثبت نام کنید' : mode === 'signup' ? ' از اینجا وارد شوید' : 'ورود'}
                </button>

                <p className='min-w-fit text-md sm:text-xl text-gray-700 dark:text-gray-200'>
                    {mode === 'login'
                        ? 'حساب کاربری ندارید؟'
                        : mode === 'signup' ?
                         'حساب کاربری دارید؟'
                         :
                         'بازکشت به صفحه'
                        }
                </p>
            </div>
        </div>
    )
}

export default BottomBar