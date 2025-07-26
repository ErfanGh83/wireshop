'use client';

import React, { useEffect, useState } from 'react';
import { PiPhone } from 'react-icons/pi';
import { MdLock } from 'react-icons/md';
import GenericForm, { FormField } from '../forms/GenericForm';

const STORAGE_KEY = 'auth:login-form';

const LoginFormWrapper = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    phone: '',
    password: '',
  });

  // Restore from localStorage
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

  // Update localStorage when formData changes
  const handleChange = (name: string, value: string) => {
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const fields: FormField[] = [
    {
      name: 'phone',
      label: 'شماره تلفن',
      icon: <PiPhone className='rotate-270' />,
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

  const handleSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
    localStorage.removeItem(STORAGE_KEY);
  };

  return <GenericForm fields={fields} onSubmit={handleSubmit} submitLabel="ورود" />;
};

export default LoginFormWrapper;
