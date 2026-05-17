'use client';

import React, { useEffect, useState } from 'react';
import { PiPhone } from 'react-icons/pi';
import { MdLock } from 'react-icons/md';
import GenericForm, { FormField } from '../forms/GenericForm';
import { login } from '@/lib/api/authApi';
import { ApiError } from '@/lib/api/apiClient';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const STORAGE_KEY = 'auth:login-form';

const LoginFormWrapper = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>({
    phone: '',
    password: '',
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

  const handleChange = (name: string, value: string) => {
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const fields: FormField[] = [
    {
      name: 'phone',
      label: 'شماره تلفن',
      icon: <PiPhone className="rotate-270" />,
      type: 'tel',
      placeholder: 'شماره تلفن خود را وارد کنید',
      error: '',
      value: formData.phone,
      onChange: (value: string) => handleChange('phone', value),
    },
    {
      name: 'password',
      label: 'رمز عبور',
      icon: <MdLock />,
      type: 'password',
      placeholder: 'رمز عبور را وارد کنید',
      error: '',
      value: formData.password,
      onChange: (value: string) => handleChange('password', value),
    },
  ];

  const handleSubmit = async (data: Record<string, string>) => {
    try {
      const response = await login(data.phone, data.password);
      console.log('Login successful:', response);

      // Example: save token, redirect, etc.
      localStorage.removeItem(STORAGE_KEY);
      toast.success('ورود با موفقیت انجام شد');
      router.push('/');

    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 401) {
          toast.error('رمز عبور اشتباه است');
        }
        else if (err.status === 400) {
          toast.error('شماره تلفن یا رمز وارد شده نامعتبر');
        }
        else if (err.status === 404) {
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

  return <GenericForm fields={fields} onSubmit={handleSubmit} submitLabel="ورود" />;
};

export default LoginFormWrapper;
