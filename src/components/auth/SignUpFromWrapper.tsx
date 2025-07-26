'use client';

import React, { useEffect, useState } from 'react';
import { PiPhone } from 'react-icons/pi';
import { MdLock } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import GenericForm, { FormField } from '../forms/GenericForm';
import VerificationCodeInput from './VerificationCodeInput';
import { BiCalendar } from 'react-icons/bi';
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { CompleteSignupSchema, VerifyCodeSchema } from '@/zod/schemas';

const STORAGE_KEY = 'auth:signup-form';

const SignUpFormWrapper = () => {
    const [formData, setFormData] = useState<Record<string, string>>({
        phone: '',
        birthdate: '',
        password: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [step, setStep] = useState<'signup' | 'verify'>('signup');
    const [code, setCode] = useState('');
    const [cooldown, setCooldown] = useState(60);
    const [verificationError, setVerificationError] = useState('');

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

    const handleChange = (name: string, value: string) => {
        const updated = { ...formData, [name]: value };
        setFormData(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validateSignupForm = () => {
        try {
            CompleteSignupSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error: any) {
            // Zod errors have "issues" array
            if (error?.issues && Array.isArray(error.issues)) {
                const newErrors: Record<string, string> = {};
                for (const issue of error.issues) {
                    const field = issue.path?.[0];
                    if (typeof field === 'string') {
                        newErrors[field] = issue.message;
                    }
                }
                setErrors(newErrors);
            } else {
                console.error('Validation error:', error);
                setErrors({ general: 'خطایی در اعتبارسنجی داده‌ها رخ داد' });
            }
            return false;
        }
    };



    const handleSubmit = () => {
        if (validateSignupForm()) {
            setStep('verify');
        }
    };

    const handleResendCode = () => {
        setCooldown(60);
        setVerificationError('');
    };

    const handleBack = () => {
        setStep('signup');
        setVerificationError('');
    };

    const handleCodeChange = (code: string) => {
        setCode(code);
        setVerificationError('');
    };

    const validateVerificationCode = () => {
        try {
            VerifyCodeSchema.parse({
                phone: formData.phone,
                code: code
            });
            setVerificationError('');
            return true;
        } catch (error: any) {
            const zodErrors = error?.errors;
            if (Array.isArray(zodErrors)) {
                setVerificationError(zodErrors.map(err => err.message).join(', '));
            } else {
                console.error('Verification error:', error);
                setVerificationError('خطایی در اعتبارسنجی کد رخ داد');
            }
            return false;
        }
    };


    const handleFinalSubmission = () => {
        if (validateVerificationCode()) {
            console.log('Final submission:', {
                ...formData,
                code
            });
            // API call would go here
        }
    };

    const fields: FormField[] = [
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
                            // Convert to Gregorian date in YYYY-MM-DD format
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
            icon: <PiPhone className='rotate-270' />,
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
                        <GenericForm
                            fields={fields}
                            onSubmit={handleSubmit}
                            submitLabel="ثبت نام"
                        />
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
                            error={verificationError}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SignUpFormWrapper;