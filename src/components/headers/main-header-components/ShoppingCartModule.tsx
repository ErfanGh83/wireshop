"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import ShoppingCartItem from "./ShoppingCartItem";
import { getAllCart } from "@/lib/api/cartApi";
import { Cart } from "@/types/cart";

type Props = {
  setModuleIsOpen: Dispatch<SetStateAction<boolean>>;
  moduleIsOpen: boolean;
};

const ShoppingCartModule = ({ setModuleIsOpen, moduleIsOpen }: Props) => {
  const [cartItems, setCartItems] = useState<Cart | undefined>();

  useEffect(() => {
    if (!moduleIsOpen) return;

    getAllCart().then((res) => setCartItems(res));
  }, [moduleIsOpen]);

  const handleCloseModule = () => {
    setModuleIsOpen(false);
  };

  return (
    <div className="h-screen sm:h-[330px] md:h-[380px] xl:h-[450px] w-screen sm:w-[300px] md:w-[330px] xl:w-[380px] border-[1px] rounded-r-md rounded-b-md overflow-hidden border-gray-300 dark:border-slate-500 shadow-md bg-white dark:bg-slate-800 dark:text-white relative">
      <button
        onClick={handleCloseModule}
        className="size-fit absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
      >
        <FaXmark size={20} />
      </button>

      <div className="size-full flex flex-col justify-between">
        <div className="w-full h-10 flex items-center justify-center">
          سبد خرید
        </div>

        <div className="size-full flex flex-col gap-2 overflow-y-auto p-2 bg-gray-100 dark:bg-slate-800">
          {cartItems &&
            cartItems.items.map((item, index) => (
              <ShoppingCartItem
                key={index}
                title={item.product.name}
                quantity={item.quantity}
                price={item.product.price}
                discount={0}
                total={item.quantity * item.product.price}
                itemId={item.id}
                productId={item.product.id}
              />
            ))}
        </div>

        <div className="w-full h-12 flex items-center justify-center">
          <button className="size-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors">
            تسویه حساب
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModule;
