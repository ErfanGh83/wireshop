"use client";

import { isUserLoggedIn } from "@/lib/auth-utils/server";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SignupOrLoginButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const hasToken = await isUserLoggedIn();
                setIsLoggedIn(hasToken);
            } catch {
                setIsLoggedIn(false);
            }
        })();
    }, []);

    if (isLoggedIn) return null;

    return (
        <div className="flex items-center gap-2">
            <Link
                href="/auth?mode=login"
                className="px-4 py-2 text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
                ورود
            </Link>
            <Link
                href="/auth?mode=signup"
                className="w-16 sm:w-fit flex items-center justify-center sm:px-4 py-2 text-sm md:text-base rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-sm"
            >
                ثبت نام
            </Link>
        </div>
    );
};

export default SignupOrLoginButton;
