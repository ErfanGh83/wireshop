'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginFormWrapper from '@/components/auth/LoginFormWrapper';
import SignUpFormWrapper from '@/components/auth/SignUpFromWrapper';
import { useSearchParams } from 'next/navigation';
import { getInitialTheme } from '@/lib/utils';
import TopBar from '@/components/auth/BottomBar';
import Background from '@/components/auth/Background';
import ForgotPasswordFormWrapper from '@/components/auth/ForgotPasswordFormWrapper';
import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6';

// Isolated component so we can wrap it in Suspense
function ModeInitializer({
  setMode
}: {
  setMode: React.Dispatch<React.SetStateAction<'login' | 'signup' | 'forgotpass'>>;
}) {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get('mode');

  useEffect(() => {
    if (modeParam === 'signup') setMode('signup');
    else if (modeParam === 'forgotpass') setMode('forgotpass');
    else setMode('login');
  }, [modeParam, setMode]);

  return null;
}

const Page = () => {
  const [bg, setBg] = useState('/images/auth-bg-light.jpg');
  const [mode, setMode] = useState<'login' | 'signup' | 'forgotpass'>('login');

  useEffect(() => {
    if (getInitialTheme() === 'dark') setBg('/images/auth-bg-dark.jpg');
  }, []);

  return (
    <div dir='ltr' className='w-screen h-screen flex items-center justify-center bg-transparent overflow-y-auto'>

      <Background backgroundImage={bg} />

      {/* Form Container */}
      <div dir='rtl' className='size-full min-h-[700px] md:w-3/5 md:h-5/6 xl:w-2/5 lg:h-3/4 flex justify-center items-center bg-white dark:bg-slate-800 text-black dark:text-white border-l-[2px] dark:border-none border-gray-100 relative shadow-2xl overflow-hidden'>
        <Link href={'/'} className='size-fit absolute top-0 right-0 text-3xl m-8 cursor-pointer z-20'><FaXmark /></Link>
        <div className="w-fit absolute z-10 bottom-6 left-1/2 -translate-x-1/2">
          <TopBar mode={mode} setMode={setMode} />
        </div>


        {/* Wrap useSearchParams inside Suspense */}
        <Suspense fallback={null}>
          <ModeInitializer setMode={setMode} />
        </Suspense>

        <AnimatePresence mode="wait">
          {mode === 'login' && (
            <motion.div
              key="login"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute w-full h-full flex flex-col items-center justify-start pt-28 gap-6"
            >
              <LoginFormWrapper />
              <button
                onClick={() => setMode('forgotpass')}
                className='text-md font-medium cursor-pointer text-blue-500'
              >
                رمز عبور را فراموش کردم
              </button>
            </motion.div>
          )}

          {mode === 'signup' && (
            <motion.div
              key="signup"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute w-full h-full flex flex-col items-center justify-start pt-28 gap-6"
            >
              <SignUpFormWrapper />
            </motion.div>
          )}

          {mode === 'forgotpass' && (
            <motion.div
              key="forgotpass"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute w-full h-full flex flex-col items-center justify-center gap-6"
            >
              <ForgotPasswordFormWrapper setMode={setMode} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Page;
