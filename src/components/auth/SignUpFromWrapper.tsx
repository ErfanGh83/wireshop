'use client';

import React, { useEffect, useState } from 'react';
import { PiPhone } from 'react-icons/pi';
import { MdLock, MdPerson } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import GenericForm, { FormField } from '../forms/GenericForm';
import VerificationCodeInput from './VerificationCodeInput';

const STORAGE_KEY = 'auth:signup-form';

const SignUpFormWrapper = () => {
    const [formData, setFormData] = useState<Record<string, string>>({
        name: '',
        phone: '',
        password: '',
    });

    const [step, setStep] = useState<'signup' | 'verify'>('signup');
    const [, setCode] = useState('');
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

    const handleChange = (name: string, value: string) => {
        const updated = { ...formData, [name]: value };
        setFormData(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        setStep('verify');
    };

    const handleResendCode = () => {
        setCooldown(60);
        console.log('Code resent');
    };

    const handleBack = () => {
        setStep('signup');
    };

    const handleCodeChange = (code: string) => {
        setCode(code);
        if (code.length === 6) {
            console.log('Verification code entered:', code);
            // Verify here...
        }
    };

    const fields: FormField[] = [
        {
            name: 'name',
            label: 'نام',
            icon: <MdPerson />,
            type: 'text',
            placeholder: 'نام خود را وارد کنید',
            value: formData.name,
            onChange: (val: string) => handleChange('name', val),
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
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

};

export default SignUpFormWrapper;
