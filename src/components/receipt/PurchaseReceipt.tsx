"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function PurchaseReceipt() {
  const searchParams = useSearchParams();
  const refId = searchParams.get("refId");
  const success = searchParams.get("success");

  const formattedDate = useMemo(() => {
    const now = new Date();
    return now.toLocaleString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 text-center mt-30">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        رسید خرید
      </h2>

      <div className="my-2">
        <p className="text-lg">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            شماره مرجع:
          </span>{" "}
          {refId ?? "—"}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            وضعیت پرداخت:
          </span>{" "}
          {success == "true" ? (
            <span className="text-green-600 font-bold">موفق</span>
          ) : (
            <span className="text-red-600 font-bold">ناموفق</span>
          )}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          زمان: {formattedDate}
        </p>
      </div>

      {success == 'true' ? (
        <>
          <p className="text-gray-700 dark:text-gray-300">
            شکیبا باشید تا محصول برایتان ارسال شود.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            برای پیگیری سفارش به{" "}
            <a href="/dashboard" className="text-blue-500 underline">
              داشبورد کاربر
            </a>{" "}
            مراجعه کنید.
          </p>
        </>
      ) : (
        <p className="text-red-500 font-semibold">
          پرداخت ناموفق بود. لطفا بعدا دوباره تلاش کنید.
        </p>
      )}
    </div>
  );
}
