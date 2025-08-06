'use client';

import React from 'react';
import { MdLock, MdPerson } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { FormField } from '../forms/GenericForm';

interface Props {
    formData: Record<string, string | null>;
    errors: Record<string, string>;
    handleChange: (name: string, value: string | null) => void;
}

const ProfileFormFields = ({ formData, errors, handleChange }: Props): FormField[] => {
    return [
        {
            name: 'firstname',
            label: 'نام',
            icon: <MdPerson />,
            type: 'text',
            placeholder: 'نام خود را وارد کنید',
            value: formData.firstname || null,
            error: errors.firstname,
            onChange: (val: string) => handleChange('firstname', val),
        },
        {
            name: 'lastname',
            label: 'نام خانوادگی',
            icon: <MdPerson />,
            type: 'text',
            placeholder: 'نام خانوادگی خود را وارد کنید',
            value: formData.lastname || null,
            error: errors.lastname,
            onChange: (val: string) => handleChange('lastname', val),
        },
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
                    value={formData.birthdate || null}
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
            name: 'password',
            label: 'رمز عبور',
            icon: <MdLock />,
            type: 'password',
            placeholder: 'رمز عبور را وارد کنید',
            value: formData.password || null,
            error: errors.password,
            onChange: (val: string) => handleChange('password', val),
        },
    ];
};

export default ProfileFormFields;