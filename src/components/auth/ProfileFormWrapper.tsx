'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import GenericForm from '../forms/GenericForm';
import { changeUserInfo } from '@/lib/api/authApi';
import { ApiError } from '@/lib/api/apiClient';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import ProfileFormFields from './ProfileFormFields';
import { changeUserInfoSchema } from '@/zod/schemas';

type Props = {
    refetch: () => void
    setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

const ProfileFormWrapper = ({ setModalIsOpen, refetch }: Props) => {

    const [formData, setFormData] = useState<Record<string, string | null>>({
        firstname: '',
        lastname: '',
        password: '',
        birthdate: null,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (name: string, value: string | null) => {
        const updated = { ...formData, [name]: value };
        setFormData(updated);
    };

    const fields = ProfileFormFields({ formData, errors, handleChange });

    const router = useRouter()


    const handleSubmit = async () => {
        const parsed = changeUserInfoSchema.safeParse(formData);

        if (!parsed.success) {
            const fieldErrors: Record<string, string> = {};
            parsed.error.issues.forEach((err) => {
                if (err.path[0]) {
                    fieldErrors[err.path[0] as string] = err.message;
                }
            });
            setErrors(fieldErrors);
            toast.error("لطفا مشخصات معتبر وارد کنید");
            return;
        }


        try {
            if (formData.firstname || formData.lastname || formData.password || formData.birthdate) {
                const response = await changeUserInfo(
                    formData.firstname || undefined,
                    formData.lastname || undefined,
                    formData.password || undefined,
                    formData.birthdate || undefined
                );
                console.log(response)
                toast.success("تغییرات مشخصات کاربری با موفقیت انجام شد");
                refetch()
                setModalIsOpen(false);
            }
            else {
                toast.warn('حداقل یک مورد از مشخصات باید تغییر کند')
            }

        } catch (err) {
            if (err instanceof ApiError) {
                if (err.status === 400) {
                    toast.error("لطفا مشخصات مناسب را وارد کنید");
                } else if (err.status === 404 || err.status === 401) {
                    toast.error("خطا، لطفا مجدد وارد حساب خود شوید");
                    router.push("/auth?mode=login");
                } else {
                    toast.error("خطا در ثبت تغییرات، لطفا دوباره تلاش کنید");
                }
            } else {
                toast.error("مشکل شبکه یا خطای ناشناخته");
                console.error("Unexpected login error:", err);
            }
        }
    };


    return <GenericForm fields={fields} onSubmit={handleSubmit} submitLabel="ثبت تغییرات" />;
};

export default ProfileFormWrapper;