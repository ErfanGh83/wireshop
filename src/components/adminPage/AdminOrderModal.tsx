"use client";

import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import { completeOrder, getOrderById } from "@/lib/api/adminApi";
import { Order } from "@/types/cart";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "@/lib/api/constants";

export default function AdminOrderModal({ id }: { id: string }) {
  const [order, setOrder] = useState<Order | null>();

  useEffect(() => {
    getOrderById(id)
      .then((res) => setOrder(res))
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد.")
      );
  }, []);

  if (!order) return <Spinner />;

  const handleSubmit = () => {
    completeOrder(id)
      .then(() => toast.success("وضعیت سفارش با موفقیت تغییر یافت"))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.admin[
            err.status as keyof typeof ERROR_MESSAGES.admin
          ] ||
            err.response.error ||
            "خطایی رخ داده است."
        )
      );
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg max-w-lg w-full p-6 relative shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        جزییات سبد خرید
      </h2>

      <div className="mb-4">
        <p>
          <strong>وضعیت:</strong>{" "}
          {order.status == "paid" ? "پرداخت شده" : "در حال ارسال"}
        </p>
        <p>
          <strong>نوع وسیله نقلیه:</strong>{" "}
          {order.vehicleType == "motorcycle" ? "موتور" : "پیک آپ"}
        </p>
        <p>
          <strong>وزن کل (کیلوگرم):</strong> {order.WeightKg}
        </p>
        <p>
          <strong>هزینه کل:</strong> {order.cost} تومان
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">آدرس ارسال</h3>
        <p>
          {order.address.province}، {order.address.city}
        </p>
        <p>کد پستی: {order.address.postalCode}</p>
        <p>توضیحات: {order.address.description}</p>
        <p>پلاک: {order.address.plaque}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">آیتم‌ها</h3>
        {order.items.length === 0 ? (
          <p>هیچ آیتمی موجود نیست.</p>
        ) : (
          <ul className="space-y-2 max-h-48 overflow-y-auto">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="border rounded p-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{item.product.name}</p>
                  <p>تعداد: {item.quantity}</p>
                  <p>قیمت واحد: {item.product.price} تومان</p>
                  <p>وزن واحد: {item.product.weightKg} کیلوگرم</p>
                  <p>وضعیت موجودی: {item.available ? "موجود" : "ناموجود"}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="px-4 py-3 bg-blue-500 text-white dark:bg-purple-600 hover:bg-blue-600 dark:hover:bg-purple-700 transition-all"
        onClick={handleSubmit}
      >
        نهائی کردن سفارش
      </button>
    </div>
  );
}
