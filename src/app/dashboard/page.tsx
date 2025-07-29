"use client";

import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { useAuthUser } from "@/components/auth/useAuthUser";

export default function DashboardPage() {
  const { userInfo, isLoggedIn, loading } = useAuthUser();

  if (loading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-screen text-lg">
          Loading...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {!isLoggedIn ? (
        <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-700 text-black dark:text-white">
          <Link
            href={"/auth"}
            className="
              w-fit px-4 py-2 text-base
              sm:px-6 sm:py-3 sm:text-lg
              md:px-8 md:py-4 md:text-2xl
              lg:text-3xl xl:text-4xl
              font-semibold border-2
              bg-blue-100 dark:bg-slate-600
              hover:border-blue-400 hover:text-blue-400
              dark:hover:text-purple-400 dark:hover:border-purple-400
              transition-colors rounded-lg
              text-center
            "
          >
            لطفا ابتدا وارد حساب کاربری خود شوید
          </Link>
        </div>
      ) : (
        <div className="p-4">
          <p>User phone: {userInfo?.user.phone}</p>
        </div>
      )}
    </MainLayout>
  );
}
