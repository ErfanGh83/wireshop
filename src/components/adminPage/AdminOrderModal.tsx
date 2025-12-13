"use client";

import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import { completeOrder, getOrderById } from "@/lib/api/adminApi";
import { Order } from "@/types/cart";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "@/lib/api/constants";
import { useRouter } from "next/navigation";

export default function AdminOrderModal({ id }: { id: string }) {
  const [order, setOrder] = useState<Order | null>();
  const router = useRouter()

  useEffect(() => {
    getOrderById(id)
      .then((res) => {
        setOrder(res);
        // toast.success("سفارش با موفقیت تغییر کرد: \nدر حال ارسال.");
      })
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد.")
      );
  }, [id]);

  if (!order) return <Spinner />;

  const handleSubmit = () => {
    completeOrder(id)
      .then(() => toast.success("سفارش با موفقیت کامل شد."))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.complete_cart[
            err.status as keyof typeof ERROR_MESSAGES.complete_cart
          ] ||
            err.response.error ||
            "خطایی رخ داده است."
        )
      );
  };

  return (
    <div className="bg-white dark:bg-slate-800 w-full">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-3">
        جزییات سبد خرید
      </h2>

      <div className="my-1 text-sm">
        <p className="m-2">
          <span className="font-semibold text-gray-700 dark:text-gray-300 m-1">
            وضعیت:
          </span>
          <span
            className={`px-2 py-1 rounded text-white text-xs ${
              order.status !== "paid" ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {order.status === "paid" ? "پرداخت شده" : "در حال ارسال"}
          </span>
        </p>
        <p className="m-2">
          <span className="font-semibold text-gray-700 dark:text-gray-300 m-1">
            هزینه کل:
          </span>
          {order.cost.toLocaleString()} ریال
        </p>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-1">
          آدرس ارسال
        </h3>
        <div className="my-1 text-sm text-gray-600 dark:text-gray-300">
          <p>
            {order.address.province}، {order.address.city}
          </p>
          <p>کد پستی: {order.address.postalCode}</p>
          <p>توضیحات: {order.address.description}</p>
          <p>پلاک: {order.address.plaque}</p>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-1">
          آیتم‌ها
        </h3>
        {order.items.length === 0 ? (
          <p className="text-sm text-gray-500">هیچ آیتمی موجود نیست.</p>
        ) : (
          <ul className="my-3 max-h-48 overflow-y-auto pr-1">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-slate-900/50"
              >
                <div className="flex justify-between items-center">
                  <div className="text-sm my-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-100" onClick={()=>router.push(`/product?id=${item.id}`)}>
                      {item.product.name}
                    </p>
                    <p>تعداد: {item.quantity}</p>
                    <p>قیمت واحد: {item.product.price.toLocaleString()} ریال</p>
                    {/* <p>وزن واحد: {item.product.weightKg} کیلوگرم</p> */}
                    <p>
                      وضعیت موجودی:{" "}
                      <span
                        className={`px-2 py-0.5 rounded text-white text-xs ${
                          item.available ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {item.available ? "موجود" : "ناموجود"}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="w-full mt-3 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
        onClick={handleSubmit}
      >
        نهائی کردن سفارش
      </button>
    </div>
  );
}
