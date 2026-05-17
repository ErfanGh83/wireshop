'use client';

import { useEffect, useState } from 'react';
import { CompleteSignupSchema, VerifyCodeSchema } from '@/zod/schemas';
import { validateSignupForm } from './validateSignupForm';
import { validateVerificationCode } from './validateVerificationCode';
import {
    createUser,
    requestOtp,
    verifyOtp,
} from '@/lib/api/authApi';

import { ApiError } from '@/lib/api/apiClient';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

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
    const [cooldown, setCooldown] = useState(300);
    const [verificationError, setVerificationError] = useState('');
    const router = useRouter()

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

    const handleSubmit = async () => {
        const isValid = validateSignupForm({
            formData,
            setErrors,
            schema: CompleteSignupSchema,
        });

        if (!isValid) return;

        try {
            await requestOtp(formData.phone); // Send phone number to get verification code
            setStep('verify');
        } catch (err) {
            if (err instanceof ApiError && err.status === 409) {
                setErrors((prev) => ({
                    ...prev,
                    phone: 'کاربر قبلاً ثبت‌نام کرده است',
                }));
            } else {
                toast.error('خطایی از سمت سرور رخ داده است');
            }
        }
    };


    const handleResendCode = async () => {
        try {
            await requestOtp(formData.phone);
            setCooldown(300);
            setVerificationError('');
        } catch (err) {
            if (err instanceof ApiError) {
                setVerificationError(
                    'خطایی در ارسال مجدد کد رخ داد'
                );
            }
            else {
                toast.error('خطایی از سمت سرور رخ داده است');
            }

        }
    };


    const handleBack = () => {
        setStep('signup');
        setVerificationError('');
    };

    const handleCodeChange = (code: string) => {
        setCode(code);
        setVerificationError('');
    };

    //if code is verified and user data gets sent to the backend
    const handleFinalSubmission = async () => {
        const isValid = validateVerificationCode({
            setError: setVerificationError,
            formData: { phone: formData.phone },
            code,
            schema: VerifyCodeSchema,
        });

        if (!isValid) return;

        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const verificationResult = await verifyOtp(formData.phone, code)
        }
        catch (err) {
            if (err instanceof ApiError) {
                if (err.status === 400) {
                    setVerificationError('کد وارد شده اشتباه است');
                } else if (err.status === 404) {
                    setVerificationError('کاربری با این شماره یافت نشد');
                } else {
                    setVerificationError('خطایی در تایید کد رخ داد');
                }
            } else {
                setVerificationError('مشکل شبکه یا خطای ناشناخته');
                console.error('Unexpected login error:', err);
            }
            return
        }

        try {
            const result = await createUser(
                formData.phone,
                formData.password,
                formData.birthdate
            );
            console.log('Signup successful:', result); // likely contains JWT
            router.push('/')
            // Store token or redirect...
        } catch (err) {
            if (err instanceof ApiError && err.status === 400) {
                setVerificationError('شماره تلفن هنوز تأیید نشده است');
            } else {
                setVerificationError('خطایی در ثبت‌نام نهایی رخ داد');
                console.error('Final submission error:', err);
            }
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
