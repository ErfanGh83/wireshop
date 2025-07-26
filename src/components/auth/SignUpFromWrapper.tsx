'use client';

import React, { useEffect, useState } from 'react';
import { PiPhone } from 'react-icons/pi';
import { MdLock, MdPerson } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import GenericForm, { FormField } from '../forms/GenericForm';
import VerificationCodeInput from './VerificationCodeInput';
import { BiCalendar } from 'react-icons/bi';
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const STORAGE_KEY = 'auth:signup-form';

const SignUpFormWrapper = () => {
    const [formData, setFormData] = useState<Record<string, string>>({
        name: '',
        phone: '',
        birthdate: '',
        password: '',
    });

    const [step, setStep] = useState<'signup' | 'verify'>('signup');
    const [code, setCode] = useState('');
    const [cooldown, setCooldown] = useState(60);

    // Load saved form data
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setFormData(JSON.parse(stored));
            } catch (err) {
                console.error('Failed to parse stored form:', err);
            }
        }
    }, []);

    // Cooldown timer
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (step === 'verify' && cooldown > 0) {
            timer = setInterval(() => {
                setCooldown((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [step, cooldown]);

    useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            const parsedData = JSON.parse(stored);
            setFormData(parsedData);
        } catch (err) {
            console.error('Failed to parse stored form:', err);
        }
    }
}, []);

    const handleChange = (name: string, value: string) => {
        const updated = { ...formData, [name]: value };
        setFormData(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    const handleSubmit = () => {
        //validation
        if (formData) {
            setStep('verify');
        }
        else {
            //throw an error
        }
    };

    const handleResendCode = () => {
        setCooldown(60);
    };

    const handleBack = () => {
        setStep('signup');
    };

    const handleCodeChange = (code: string) => {
        setCode(code);
    };

    const handleFinalSubmission = () => {

        const codeVerificationObj = {
            code: code,
            phone: formData.phone
        }

        if (codeVerificationObj) {
            //valid
            console.log(formData)
        }
        else {
            //throw an error
        }
    }

    const fields: FormField[] = [
        {
            name: 'name',
            label: 'نام کاربری',
            icon: <MdPerson />,
            type: 'text',
            placeholder: 'نام کاربری خود را وارد کنید',
            value: formData.name,
            onChange: (val: string) => handleChange('name', val),
        },

        {
            name: 'birthdate',
            label: 'تاریخ تولد',
            icon: <BiCalendar />,
            customRender: (
                <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    value={formData.birthdate}
                    onChange={(date) => handleChange('birthdate', date?.format?.('YYYY-MM-DD') ?? '')}
                    style={{
                        direction: 'rtl',
                        width: '100%',
                        height: '48px',
                        borderRadius: '0.5rem',
                        border: '2px solid #e5e7eb',
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
            icon: <PiPhone className='rotate-270' />,
            type: 'tel',
            placeholder: 'شماره تلفن را وارد کنید',
            value: formData.phone,
            onChange: (val: string) => handleChange('phone', val),
        },
        {
            name: 'password',
            label: 'رمز عبور',
            icon: <MdLock />,
            type: 'password',
            placeholder: 'رمز عبور را وارد کنید',
            value: formData.password,
            onChange: (val: string) => handleChange('password', val),
        },
    ];

    return (
        <div className="w-full h-fit flex justify-center items-center">
            <AnimatePresence mode='wait'>
                {step === 'signup' ? (
                    <motion.div
                        className='w-full h-fit flex items-center justify-center'
                        key='signup'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        <GenericForm fields={fields} onSubmit={handleSubmit} submitLabel="ثبت نام" />
                    </motion.div>
                ) : (
                    <motion.div
                        key='verify'
                        className='w-3/5'
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
                            onSubmit={handleFinalSubmission}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

};

export default SignUpFormWrapper;
