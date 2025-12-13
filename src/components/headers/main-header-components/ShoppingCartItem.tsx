import { addCartItem, removeCartItem } from "@/lib/api/cartApi";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
  const router = useRouter()

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
        <h3 className="text-sm font-medium truncate hover:underline cursor-pointer" onClick={()=>router.push(`/product?id=${productId}`)}>{title}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="text-sm">{price} ریال</div>

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
              {total} ریال
            </span>
          </div>
        </div>

        {discount > 0 && (
          <div className="flex items-center gap-2 text-xs mt-2">
            <span className="line-through text-gray-500">
              {price} ریال
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
