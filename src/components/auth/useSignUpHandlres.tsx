// components/signup/useSignUpHandlers.ts
'use client';

import { useEffect, useState } from 'react';
import { CompleteSignupSchema, VerifyCodeSchema } from '@/zod/schemas';
import { validateSignupForm } from './validateSignupForm';
import { validateVerificationCode } from './validateVerificationCode';

const STORAGE_KEY = 'auth:signup-form';

export const useSignUpHandlers = () => {
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

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = () => {
        if (
            validateSignupForm({
                formData,
                setErrors,
                schema: CompleteSignupSchema,
            })
        ) {
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

    const handleFinalSubmission = () => {
        if (
            validateVerificationCode({
                setError: setVerificationError,
                formData: { phone: formData.phone },
                code,
                schema: VerifyCodeSchema,
            })
        ) {
            console.log('Final submission:', {
                ...formData,
                code,
            });
            // API call here
        }
    };

    return {
        formData,
        errors,
        step,
        code,
        cooldown,
        verificationError,
        handleChange,
        handleSubmit,
        handleResendCode,
        handleBack,
        handleCodeChange,
        handleFinalSubmission,
        setCooldown,
    };
};
