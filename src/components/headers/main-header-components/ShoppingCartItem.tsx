import { addCartItem, removeCartItem } from "@/lib/api/cartApi";
import React from "react";
import { toast } from "react-toastify";

type Props = {
  title: string;
  quantity: number;
  price: number;
  discount: number;
  total: number;
  itemId: string;
  productId: string;
  setIsCartChanged?: () => void;
};

const ShoppingCartItem = ({
  title,
  quantity,
  price,
  discount,
  total,
  itemId,
  productId,
  setIsCartChanged = () => {},
}: Props) => {
  const handleChangeNumber = async (amount: number) => {
    if (amount > 0)
      await addCartItem({ productId: productId, quantity: amount })
        .then(() => toast.success("محصول با موفقیت اضافه شد"))
        .catch((err) =>
          toast.error(err.response?.message || err.message || "خطایی رخ داد")
        );
    else if (amount < 0)
      await removeCartItem(itemId, -amount)
        .then(() => toast.success("محصول با موفقیت کم شد"))
        .catch((err) =>
          toast.error(err.response?.message || err.message || "خطایی رخ داد")
        );
    setIsCartChanged();
  };

  return (
    <div className="w-full h-36 py-2 px-2 flex flex-row items-center gap-3 bg-white dark:bg-slate-700 dark:text-white border-[1px] border-gray-300 dark:border-transparent shadow-sm rounded-lg">
      <div className="flex-1 overflow-hidden">
        <h3 className="text-sm font-medium truncate">{title}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="text-sm">{(price / 10).toFixed(2)} تومان</div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => handleChangeNumber(-1)}
                className="px-2 py-1 text-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="کاهش تعداد"
              >
                -
              </button>
              <span className="px-2 text-sm">{quantity}</span>
              <button
                onClick={() => handleChangeNumber(1)}
                className="px-2 py-1 text-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="افزایش تعداد"
              >
                +
              </button>
            </div>

            <span className="font-bold text-sm min-w-[80px] text-left">
              {total.toFixed(2)} تومان
            </span>
          </div>
        </div>

        {discount > 0 && (
          <div className="flex items-center gap-2 text-xs mt-2">
            <span className="line-through text-gray-500">
              {price.toFixed(2)} تومان
            </span>
            <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full">
              %{discount} تخفیف
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartItem;
