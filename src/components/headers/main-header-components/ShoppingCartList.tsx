"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type CartItem = {
  id: number;
  title: string;
  thumbnailUrl: string;
  price: number;
};

type Props = {
  items: CartItem[];
  onRemove?: (id: number) => void;
};

const ShoppingCartList = ({ items, onRemove }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className="
        absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg 
        border border-gray-200 dark:border-gray-700 z-20
      "
    >
      {/* Header */}
      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <span className="font-semibold text-gray-800 dark:text-gray-200">
          سبد خرید
        </span>
        <span className="text-sm text-gray-500">{items.length} مورد</span>
      </div>

      {/* Cart Items */}
      <div className="max-h-64 overflow-y-auto">
        {items.length === 0 ? (
          <p className="p-4 text-sm text-gray-500">سبد خرید شما خالی است.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-3 border-b border-gray-100 dark:border-gray-700 last:border-none"
            >
              <Image
                src={item.thumbnailUrl}
                alt={item.title}
                width={50}
                height={50}
                className="rounded"
              />
              <div className="ml-3 flex-1">
                <p className="w-full text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-1">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">{item.price} تومان</p>
              </div>
              {onRemove && (
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  حذف
                </button>
              )}
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between mb-3">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              جمع کل:
            </span>
            <span className="text-gray-800 dark:text-gray-200">
              {total} تومان
            </span>
          </div>
          <Link
            href="/cart"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg"
          >
            مشاهده سبد خرید
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartList;
