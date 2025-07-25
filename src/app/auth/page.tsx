'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import LoginFormWrapper from '@/components/auth/LoginFormWrapper';
import SignUpFormWrapper from '@/components/auth/SignUpFromWrapper';
import { useSearchParams } from 'next/navigation';
import { FaXmark } from 'react-icons/fa6';
import Link from 'next/link';
import { getInitialTheme } from '@/lib/utils';

const Page = () => {
  const [bg, setBg] = useState('/images/auth-bg-light.jpg')
  const searchParams = useSearchParams();
  const modeParam = searchParams.get('mode');
  const [mode, setMode] = useState<'login' | 'signup'>(modeParam === 'signup' ? 'signup' : 'login');

  useEffect(() => {
    if(getInitialTheme() === 'dark') setBg('/images/auth-bg-dark.jpg')
  },[])

  return (
    <div className='w-screen h-screen flex items-center justify-start bg-transparent'>
      {/* Background Image */}
      <div className='w-screen h-screen fixed -z-10 top-0 left-0'>
        <Image
          src={bg}
          alt="Authentication Background"
          fill
          className="object-cover"
          priority
        />
      </div>

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

      {/* Form Container */}
      <div className='w-2/5 h-full flex justify-center items-center bg-white dark:bg-slate-700 text-black dark:text-white border-l-[2px] dark:border-none border-gray-100 relative overflow-hidden'>

        <AnimatePresence mode="wait">
          {mode === 'login' && (
            <motion.div
              key="login"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute w-full h-full flex flex-col items-center justify-center gap-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">ورود</h2>
              <LoginFormWrapper />
            </motion.div>
          )}

          {mode === 'signup' && (
            <motion.div
              key="signup"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute w-full h-full flex flex-col items-center justify-center gap-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">ثبت نام</h2>
              <SignUpFormWrapper />
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};

export default Page;
