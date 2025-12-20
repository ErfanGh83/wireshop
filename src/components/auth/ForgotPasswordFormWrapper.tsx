'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PiPhone } from 'react-icons/pi';
import GenericForm, { FormField } from '../forms/GenericForm';
import { changePassword, fpRequestOtp, fpVerifyOtp } from '@/lib/api/authApi';
import { ApiError } from '@/lib/api/apiClient';
import { toast } from 'react-toastify';
import VerificationCodeInput from './VerificationCodeInput';
import { AnimatePresence, motion } from 'framer-motion';
import { MdLock } from 'react-icons/md';

const STORAGE_KEY = 'auth:forgotpass';

type Props = {
  setMode: Dispatch<SetStateAction<'login' | 'signup' | 'forgotpass'>>
}

const ForgotPasswordFormWrapper = ({ setMode }: Props) => {

  const [step, setStep] = useState<'enter-pnumber' | 'enter-code' | 'enter-password'>('enter-pnumber')
  const [cooldown, setCooldown] = useState(300);
  const [verificationError, setVerificationError] = useState('');

  const [formData, setFormData] = useState<Record<string, string>>({
    phone: '',
    password: '',
    code: ''
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFormData(JSON.parse(stored));
      } catch (err) {
        console.error('Failed to parse stored login form:', err);
      }
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'enter-code' && cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step, cooldown]);

  const handleChange = (name: string, value: string) => {
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleCodeChange = (code: string) => {
    const updated = { ...formData, code };
    setFormData(updated);
    setVerificationError('');
  };

  const handleBack = () => {
    setStep('enter-pnumber')
  }

  const handleResendCode = async () => {
    try {
      await fpRequestOtp(formData.phone);
      setCooldown(60);
      setVerificationError('');
    } catch (err) {
      if (err instanceof ApiError) {
        setVerificationError(
          'خطایی در ارسال مجدد کد رخ داد'
        );
      }
      else {
        toast.error('خطایی از سمت سرور رخ داده است');
      }

    }
  };

  const phoneField: FormField[] = [
    {
      name: 'phone',
      label: 'شماره تلفن',
      icon: <PiPhone className="rotate-270" />,
      type: 'tel',
      placeholder: 'شماره تلفن خود را وارد کنید',
      error: '',
      value: formData.phone,
      onChange: (value: string) => handleChange('phone', value),
    }
  ];

  const passField: FormField[] = [
    {
      name: 'password',
      label: 'رمز عبور',
      icon: <MdLock />,
      type: 'password',
      placeholder: 'رمز عبور جدید را وارد کنید',
      error: '',
      value: formData.password,
      onChange: (value: string) => handleChange('password', value),
    },
  ];

  const handleFirstStepSubmit = async (data: Record<string, string>) => {
    try {
      const response = await fpRequestOtp(data.phone);
      setStep('enter-code')

    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) {
          toast.error('رمز عبور اشتباه است');
        } else if (err.status === 404) {
          toast.error('کاربری با این شماره یافت نشد');
        } else {
          toast.error('خطایی در ورود رخ داد');
        }
      } else {
        toast.error('مشکل شبکه یا خطای ناشناخته');
        console.error('Unexpected login error:', err);
      }
    }
  };

  const handleSecondStepSubmit = async () => {
    try {
      const response = await fpVerifyOtp(formData.phone, formData.code);
      setStep('enter-password')

    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 400) {
          toast.error('رمز وارد شده اشتباه است');
        } else if (err.status === 404) {
          toast.error('کاربری با این شماره یافت نشد');
        } else {
          toast.error('خطایی در ورود رخ داد');
        }
      } else {
        toast.error('مشکل شبکه یا خطای ناشناخته');
        console.error('Unexpected login error:', err);
      }
    }
  };

  const handleThirdStepSubmit = async () => {
    try {
      const response = await changePassword(formData.phone, formData.password);
      localStorage.removeItem(STORAGE_KEY);
      toast.success('رمز عبور با موفقیت تغییر کرد')
      setMode('login')

    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) {
          toast.error('رمز عبور اشتباه است');
        } else if (err.status === 404) {
          toast.error('کاربری با این شماره یافت نشد');
        } else {
          toast.error('خطایی در ورود رخ داد');
        }
      } else {
        toast.error('مشکل شبکه یا خطای ناشناخته');
        console.error('Unexpected login error:', err);
      }
    }
  };

  return (
    <div className="w-full h-fit flex justify-center items-center">
      <AnimatePresence mode="wait">
        {step === 'enter-pnumber' ? (
          <motion.div
            className="w-full h-fit flex items-center justify-center"
            key="pnum"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <GenericForm
              fields={phoneField}
              onSubmit={handleFirstStepSubmit}
              submitLabel="ارسال کد"
            />
          </motion.div>
        ) : step === 'enter-code' ? (
          <motion.div
            key="verify"
            className="w-3/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <VerificationCodeInput
              onBack={handleBack}
              cooldown={cooldown}
              onResendCode={handleResendCode}
              resetCooldown={() => setCooldown(60)}
              onChange={handleCodeChange}
              onSubmit={handleSecondStepSubmit}
              error={verificationError}
            />
          </motion.div>
        )
          :
          (
            <motion.div
              className="w-full h-fit flex items-center justify-center"
              key="pass-change"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <GenericForm
                fields={passField}
                onSubmit={handleThirdStepSubmit}
                submitLabel="تغییر رمز عبور"
              />
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
};

export default ForgotPasswordFormWrapper;
