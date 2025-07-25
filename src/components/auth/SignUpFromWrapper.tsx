"use client"

import React from 'react';
import { PiPhone } from 'react-icons/pi';
import GenericForm, { FormField } from '../forms/GenericForm';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';

const SignUpFormWrapper = () => {

    const fields: FormField[] = [
        {
            name: 'name',
            label: 'نام',
            icon: <MdPerson />,
            type: 'text',
            error: '',
            placeholder: 'نام خود را وارد کنید',
        },
        {
            name: 'email',
            label: 'ایمیل',
            icon: <MdEmail />,
            type: 'email',
            error: '',
            placeholder: 'ایمیل خود را وارد کنید',
        },
        {
            name: 'password',
            label: 'رمز عبور',
            icon: <MdLock />,
            type: 'password',
            error: '',
            placeholder: 'رمز عبور را وارد کنید',
        },
        {
            name: 'phone',
            label: 'شماره تلفن',
            icon: <PiPhone className='rotate-270' />,
            type: 'tel',
            error: '',
            placeholder: 'شماره تلفن خود را وارد کنید',
        },
    ];

    const handleSubmit = (data: Record<string, string>) => {
        console.log('Form submitted:', data);
    };

    return <GenericForm fields={fields} onSubmit={handleSubmit} submitLabel="ورود" />;
};

export default SignUpFormWrapper;
