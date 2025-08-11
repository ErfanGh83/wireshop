"use client";

import CartItem from "./CartItem";
import { TiShoppingCart } from "react-icons/ti";
import { RiEBike2Line, RiTruckLine } from "react-icons/ri";
import { Cart } from "@/types/cart";
import { getAllCart } from "@/lib/api/cartApi";
import { useEffect, useState } from "react";

export default function CartContainer() {
  const [cart, setCart] = useState<Cart | undefined>();
  const [isChanged, setIsChanged] = useState<boolean>(true)

  useEffect(() => {
    if(!isChanged) return

    getAllCart().then((result) => setCart(result));
    setIsChanged(false)
  }, [isChanged]);

  return (
    <div className="max-w-3xl mx-auto p-1 md:p-3 lg:p-6 rounded-2xl space-y-4">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white text-start">
        <TiShoppingCart className="inline-block pl-1 text-3xl" />
        سبد خرید شما
      </h2>

      {!cart?.items || cart.items.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          سبد خرید شما خالی است.
        </p>
      ) : (
        <>
          <div className="divide-y divide-gray-200 dark:divide-gray-600">
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                itemId={item.id}
                productId={item.product.id}
                name={item.product.name}
                price={item.product.price}
                quantity={item.quantity}
                productWeightKg={item.product.weightKg}
                weightKg={item.weightKg}
                onChange={() => setIsChanged(true)}
              />
            ))}
          </div>

          <div className="text-right mt-4">
            <h4 className="font-bold text-xl text-gray-900 dark:text-white">
              مجموع هزینه: {cart.cost} تومان
            </h4>
            <h4 className="font-bold text-xl text-gray-900 dark:text-white">
              مجموع وزن: {cart.weightKg || 0} کیلوگرم
            </h4>
          </div>

          <div className="text-right mt-4 p-2 bg-slate-200 dark:bg-gray-800/70 max-w-sm rounded shadow">
            <span className="font-semibold text-xl text-gray-700 dark:text-white">
              روش ارسال:
            </span>
            <span className="font-bold text-xl pr-1 text-green-500">
              {cart.vehicleType == "motorcycle" ? (
                <>
                  <RiEBike2Line className="inline-block mx-1 text-xl" />
                  موتور
                </>
              ) : cart.vehicleType == "pickup_truck" ? (
                <>
                  <RiTruckLine className="inline-block mx-1 text-xl" />
                  پیک آپ
                </>
              ) : (
                <>{cart.vehicleType}</>
              )}
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
