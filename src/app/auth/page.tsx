'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginFormWrapper from '@/components/auth/LoginFormWrapper';
import SignUpFormWrapper from '@/components/auth/SignUpFromWrapper';
import { useSearchParams } from 'next/navigation';
import { getInitialTheme } from '@/lib/utils';
import TopBar from '@/components/auth/TopBar';
import Background from '@/components/auth/Background';
import ForgotPasswordFormWrapper from '@/components/auth/ForgotPasswordFormWrapper';

const Page = () => {
  const [bg, setBg] = useState('/images/auth-bg-light.jpg')
  const searchParams = useSearchParams();
  const modeParam = searchParams.get('mode');
  const [mode, setMode] = useState<'login' | 'signup' | 'forgotpass'>(modeParam === 'signup' ? 'signup' : modeParam === 'forgotpass' ? 'forgotpass' : 'login');

  useEffect(() => {
    if (getInitialTheme() === 'dark') setBg('/images/auth-bg-dark.jpg')
  }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-transparent'>

      <Background backgroundImage={bg} />

      {/* Form Container */}
      <div className='size-full md:w-3/5 md:h-5/6 xl:w-2/5 lg:h-3/4 flex justify-center items-center bg-white dark:bg-slate-700 text-black dark:text-white border-l-[2px] dark:border-none border-gray-100 relative shadow-2xl overflow-hidden'>

        <div className='absolute z-10 top-4 right-0'>
          <TopBar mode={mode} setMode={setMode} />
        </div>

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
              <LoginFormWrapper />
              <button onClick={() => setMode('forgotpass')} className='text-md font-medium cursor-pointer text-blue-500'>رمز عبور را فراموش کردم</button>
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
              <SignUpFormWrapper />
            </motion.div>
          )}

          {mode === 'forgotpass' && (
            <motion.div
              key="signup"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute w-full h-full flex flex-col items-center justify-center gap-6"
            >
              <ForgotPasswordFormWrapper setMode={setMode}/>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
};

export default Page;