import { addCartItem, removeCartItem } from "@/lib/api/cartApi";
import React from "react";

type Props = {
  title: string;
  quantity: number;
  price: number;
  discount: number;
  total: number;
  itemId: string;
  productId: string;
};

const ShoppingCartItem = ({
  title,
  quantity,
  price,
  discount,
  total,
  itemId,
  productId,
}: Props) => {

  const handleChangeNumber = async (amount: number) => {
    try {
      if (amount > 0) await addCartItem(productId, amount);
      else if (amount < 0) await removeCartItem(itemId, -amount);
    } catch (err) {
      console.error("خطا در تغییر تعداد:", err);
    }
  };

  return (
    <div className="w-full h-36 py-2 px-2 flex flex-row items-center gap-3 bg-white dark:bg-slate-700 dark:text-white border-[1px] border-gray-300 dark:border-transparent shadow-sm rounded-lg">
      {/* تصویر محصول */}
      {/* <div className='relative w-12 h-12 shrink-0'>
                <Image 
                    src={image} 
                    alt={title} 
                    fill
                    className='object-cover rounded-lg'
                />
            </div> */}

      {/* اطلاعات محصول */}
      <div className="flex-1 overflow-hidden">
        <h3 className="text-sm font-medium truncate">{title}</h3>

        {/* قیمت و تعداد */}
        <div className="flex items-center justify-between mt-2">
          {/* قیمت واحد */}
          <div className="text-sm">{(price / 10).toFixed(2)} تومان</div>

          {/* کنترل‌های تعداد و جمع کل */}
          <div className="flex items-center gap-3">
            {/* دکمه‌های افزایش/کاهش تعداد */}
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

            {/* جمع کل */}
            <span className="font-bold text-sm min-w-[80px] text-left">
              {total.toFixed(2)} تومان
            </span>
          </div>
        </div>

        {/* تخفیف */}
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
