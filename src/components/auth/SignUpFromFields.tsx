// components/signup/SignUpFormFields.tsx
'use client';

import React from 'react';
import { PiPhone } from 'react-icons/pi';
import { MdLock } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { FormField } from '../forms/GenericForm';

interface Props {
    formData: Record<string, string>;
    errors: Record<string, string>;
    handleChange: (name: string, value: string) => void;
}

const SignUpFormFields = ({ formData, errors, handleChange }: Props): FormField[] => {
    return [
        {
            name: 'birthdate',
            label: 'تاریخ تولد',
            icon: <BiCalendar />,
            error: errors.birthdate,
            customRender: (
                <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    value={formData.birthdate}
                    onChange={(date) => {
                        if (date) {
                            const gregorianDate = date.convert(persian).format('YYYY-MM-DD');
                            handleChange('birthdate', gregorianDate);
                        } else {
                            handleChange('birthdate', '');
                        }
                    }}
                    style={{
                        direction: 'rtl',
                        width: '100%',
                        height: '48px',
                        borderRadius: '0.5rem',
                        border: errors.birthdate ? '2px solid #ef4444' : '2px solid #e5e7eb',
                        padding: '0 1rem',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                    }}
                    containerStyle={{ width: '100%' }}
                    inputClass="text-right"
                />
            ),
        },
        {
            name: 'phone',
            label: 'شماره تلفن',
            icon: <PiPhone className="rotate-270" />,
            type: 'tel',
            placeholder: 'شماره تلفن را وارد کنید',
            value: formData.phone,
            error: errors.phone,
            onChange: (val: string) => handleChange('phone', val),
        },
        {
            name: 'password',
            label: 'رمز عبور',
            icon: <MdLock />,
            type: 'password',
            placeholder: 'رمز عبور را وارد کنید',
            value: formData.password,
            error: errors.password,
            onChange: (val: string) => handleChange('password', val),
        },
    ];
};

export default SignUpFormFields;
