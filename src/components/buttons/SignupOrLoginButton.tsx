"use client"

import { isUserLoggedIn } from '@/lib/auth-utils/server'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'

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
            className={`flex flex-row-reverse items-center p-1 rounded-sm bg-transparent text-black dark:text-gray-100 border-[1px] ${isLoggedIn ? 'w-fit px-2 gap-2' : 'w-32 md:w-40 xl:w-44 h-8 md:h-10'}`}
        >
            <div
                className='hidden xl:block md:size-fit p-1 m-auto text-blue-400 dark:text-purple-400'
            >
                <FaUser size={18} />
            </div>

            <div
                className='size-full flex items-center justify-center gap-1 text-sm md:text-lg font-normal'
            >

                {
                    !isLoggedIn ?
                        <>
                            < Link
                                href={`/auth?mode=login`}
                                className='size-full flex items-center justify-center md:pb-1 hover:text-blue-400 dark:hover:text-purple-400 transition-colors'
                            >
                                <p>ورود</p>
                            </Link>

                            <div
                                className='h-full border-l border-[1px]'
                            >
                            </div>

                            <Link
                                href={`/auth?mode=signup`}
                                className='size-full items-center justify-center pt-1 md:pt-0 mr-2 md:mx-3 hover:text-blue-400 dark:hover:text-purple-400 transition-colors'
                            >
                                <p>ثبت نام</p>
                            </Link>
                        </>
                        :
                        <Link
                            href={'/dashboard'}
                            className='size-fit items-center justify-center hover:text-blue-400 dark:hover:text-purple-400 transition-colors'
                        >
                            داشبورد
                        </Link>
                }
            </div>
        </div >
    )
}

export default SignupOrLoginButton