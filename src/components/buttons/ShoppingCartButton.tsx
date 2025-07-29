"use client";

import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import ShoppingCartList from "../headers/main-header-components/ShoppingCartList";

type Props = {
  itemCount?: number;
};

const ShoppingCartButton = ({ itemCount = 2 }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="h-8 md:size-10 p-2 border-b-1 border-black dark:border-white text-lg md:text-2xl border-[1px] rounded-sm cursor-pointer bg-transparent text-black dark:text-gray-100 hover:text-blue-400 dark:hover:text-purple-400 transition-colors"
      >
        <CgShoppingCart />
      </button>

      {/* Badge */}
      {itemCount > 0 && (
        <div className="absolute -top-1 -right-1">
          <div className="size-4 md:size-5 flex items-center justify-center bg-red-500 rounded-full">
            <span className="text-xs text-white font-bold">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          </div>
        </div>
      )}

      {/* Dropdown */}
      {open && (
        <ShoppingCartList
          items={[
            { id: 1, title: "کابل usb", thumbnailUrl: "/images/shop-img1.jpg", price: 500000 },
            { id: 2, title: "کابل power", thumbnailUrl: "/images/shop-img2.jpg", price: 600000 },
          ]}
        />
      )}
    </div>
  );
};

export default ShoppingCartButton;
