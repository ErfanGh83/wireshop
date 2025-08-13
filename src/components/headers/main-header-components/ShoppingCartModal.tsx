"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import ShoppingCartItem from "./ShoppingCartItem";
import { getAllCart } from "@/lib/api/cartApi";
import { Cart } from "@/types/cart";
import Spinner from "@/components/spinner/Spinner";
import { useRouter } from "next/navigation";

type Props = {
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  ModalIsOpen: boolean;
};

const ShoppingCartModal = ({ setModalIsOpen, ModalIsOpen }: Props) => {
  const [cartItems, setCartItems] = useState<Cart | undefined>();
  const [err, setErr] = useState<string>("");
  const [isCartChanged, setIsCartChanged] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!ModalIsOpen || !isCartChanged) return;

    getAllCart()
      .then((res) => setCartItems(res))
      .catch((error) => setErr(error.message));
    setIsCartChanged(false);
  }, [ModalIsOpen, isCartChanged]);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="h-screen sm:h-[330px] md:h-[380px] xl:h-[450px] w-screen sm:w-[300px] md:w-[330px] xl:w-[380px] border-[1px] rounded-r-md rounded-b-md overflow-hidden border-gray-300 dark:border-slate-500 shadow-md bg-white dark:bg-slate-800 dark:text-white relative">
      <button
        onClick={handleCloseModal}
        className="size-fit absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
      >
        <FaXmark size={20} />
      </button>

      <div className="size-full flex flex-col justify-between">
        <div className="w-full h-10 flex items-center justify-center">
          سبد خرید
        </div>
        {cartItems ? (
          <>
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
                    setIsCartChanged={() => setIsCartChanged(true)}
                  />
                ))}
            </div>

            <div className="w-full h-12 flex items-center justify-center">
              <button
                onClick={() => router.push("/cart")}
                className="size-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors"
              >
                تسویه حساب
              </button>
            </div>
          </>
        ) : (
          <div className="mb-[70%] text-center">
            <Spinner size={30} />
          </div>
        )}

        {err && <div className="text-red-500 mx-auto my-auto">{err}</div>}
      </div>
    </div>
  );
};

export default ShoppingCartModal;
