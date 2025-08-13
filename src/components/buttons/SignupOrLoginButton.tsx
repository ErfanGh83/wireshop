"use client"

import { isUserLoggedIn } from '@/lib/auth-utils/server'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NotificationButton from './NotificationButton'

const SignupOrLoginButton = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setIsLoggedIn(await isUserLoggedIn());
            } catch {
                setIsLoggedIn(false);
            }
        })();
    }, []);

    return (
        <div
            className={`flex flex-row-reverse items-center rounded-sm bg-transparent text-black dark:text-gray-100 ${isLoggedIn ? 'size-fit' : 'w-32 md:w-40 xl:w-44 h-8 md:h-10'}`}
        >

            <div
                className='size-full flex items-center justify-center gap-2 text-sm md:text-lg font-normal'
            >

                {
                    !isLoggedIn ?
                        <>
                            < Link
                                href={`/auth?mode=login`}
                                className='size-full flex items-center justify-center p-2 border-[1px] border-gray-300 shadow-md hover:text-blue-500 rounded-sm hover:shadow-blue-500 dark:hover:text-blue-400 hover:border-blue-300 transition-all'
                            >
                                <p>ورود</p>
                            </Link>

                            <Link
                                href={`/auth?mode=signup`}
                                className='size-full flex items-center justify-center p-2 border-[1px] border-gray-300 shadow-md hover:text-blue-500 rounded-sm hover:shadow-blue-500 dark:hover:text-blue-400 hover:border-blue-300 transition-all'
                            >
                                <p>ثبت نام</p>
                            </Link>
                        </>
                        :
                        <NotificationButton itemCount={1} setModuleIsOpen={function (value: React.SetStateAction<boolean>): void {
                            console.log(value)
                            throw new Error('Function not implemented.')
                        } } />
                }
            </div>
        </div >
    )
}

export default SignupOrLoginButton