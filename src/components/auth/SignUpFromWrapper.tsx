'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GenericForm from '../forms/GenericForm';
import VerificationCodeInput from './VerificationCodeInput';
import SignUpFormFields from './SignUpFromFields';
import { useSignUpHandlers } from './useSignUpHandlres';

const SignUpFormWrapper = () => {
    const {
        formData,
        errors,
        step,
        cooldown,
        verificationError,
        handleChange,
        handleSubmit,
        handleResendCode,
        handleBack,
        handleCodeChange,
        handleFinalSubmission,
        setCooldown,
    } = useSignUpHandlers();

    const fields = SignUpFormFields({ formData, errors, handleChange });

    return (
        <div className="w-full h-fit flex justify-center items-center">
            <AnimatePresence mode="wait">
                {step === 'signup' ? (
                    <motion.div
                        className="w-full h-fit flex items-center justify-center"
                        key="signup"
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
                        key="verify"
                        className="w-3/5"
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
