'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginFormWrapper from '@/components/auth/LoginFormWrapper';
import SignUpFormWrapper from '@/components/auth/SignUpFromWrapper';
import { useSearchParams } from 'next/navigation';
import { getInitialTheme } from '@/lib/utils';
import TopBar from '@/components/auth/TopBar';
import Background from '@/components/auth/Background';

const Page = () => {
  const [bg, setBg] = useState('/images/auth-bg-light.jpg')
  const searchParams = useSearchParams();
  const modeParam = searchParams.get('mode');
  const [mode, setMode] = useState<'login' | 'signup'>(modeParam === 'signup' ? 'signup' : 'login');

  useEffect(() => {
    if (getInitialTheme() === 'dark') setBg('/images/auth-bg-dark.jpg')
  }, [])

  return (
    <div className='w-screen h-screen flex items-center justify-start bg-transparent'>

      <Background backgroundImage={bg} />

      <TopBar mode={mode} setMode={setMode} />

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
