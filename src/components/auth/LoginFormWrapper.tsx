"use client"

import React from 'react';
import { PiPhone } from 'react-icons/pi';
import GenericForm, { FormField } from '../forms/GenericForm';

const LoginFormWrapper = () => {
  const fields: FormField[] = [
    {
      name: 'phone',
      label: 'شماره تلفن',
      icon: <PiPhone className='rotate-270' />,
      type: 'tel',
      placeholder: 'شماره تلفن خود را وارد کنید',
      error: '',
    },
  ];

  const handleSubmit = (data: Record<string, string>) => {
    console.log('Form submitted:', data);
  };

  return <GenericForm fields={fields} onSubmit={handleSubmit} submitLabel="ورود" />;
};

export default LoginFormWrapper;
