'use client'

import CartItem from "./CartItem";
import { TiShoppingCart } from "react-icons/ti";
import { RiEBike2Line } from "react-icons/ri";

interface CartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartContainer() {
  const items: CartProduct[] = [
    { id: "1", name: "کابل ۲ متری", price: 120000, quantity: 2 },
    { id: "2", name: "ترمینال برق", price: 30000, quantity: 3 },
  ];

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemove = (id: string) => {
    console.log("remove", id);
    // setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-1 md:p-3 lg:p-6 rounded-2xl space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white text-start">
        <TiShoppingCart className="inline-block pl-1 text-3xl" />
        سبد خرید شما
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          سبد خرید شما خالی است.
        </p>
      ) : (
        <>
          <div className="divide-y divide-gray-200 dark:divide-gray-600">
            {items.map((item) => (
              <CartItem key={item.id} {...item} onRemove={handleRemove} />
            ))}
          </div>

          <div className="text-right mt-4">
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              مجموع: {total.toLocaleString()} تومان
            </span>
          </div>

          <div className="text-right mt-4 p-2 bg-gray-100 dark:bg-gray-800/70 max-w-sm rounded shadow">
            <span className="font-semibold text-xl text-gray-700 dark:text-white">
              روش ارسال:
            </span>
            <span className="font-bold text-xl pr-1 text-green-500">
              <RiEBike2Line className="inline-block mx-1 text-xl" />
              موتور
            </span>
          </div>

          <div className="flex justify-end">
            <button className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full cursor-pointer active:bg-blue-400 dark:bg-purple-900 dark:hover:bg-purple-800 dark:hover:active:bg-purple-600 transition">
              ادامه فرایند خرید
            </button>
          </div>
        </>
      )}
    </div>
  );
}
