import { addCartItem, removeCartItem } from "@/lib/api/cartApi";
import { FaChevronUp, FaChevronDown, FaTrash } from "react-icons/fa";

interface CartItemProps {
  itemId: string;
  productId: string;
  name: string;
  price: number;
  weightKg: number;
  quantity: number;
  productWeightKg: number;
  onChange: () => void;
}

export default function CartItem({
  itemId,
  productId,
  name,
  price,
  weightKg,
  quantity,
  productWeightKg,
  onChange,
}: CartItemProps) {
  const handleChangeNumber = async (amount: number) => {
    try {
      if (amount > 0) await addCartItem(productId, amount);
      else if (amount < 0) await removeCartItem(itemId, -amount);

      onChange();
    } catch (err) {
      console.error("خطا در تغییر تعداد:", err);
      // toast.error("خطا در بروزرسانی سبد خرید");
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 my-2 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all w-full gap-y-3 md:gap-y-0">
      <div className="flex flex-col text-right w-full sm:w-auto">
        <h2 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white truncate">
          {name}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
          وزن هر واحد: {productWeightKg} کیلوگرم
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
          وزن کل: {weightKg.toFixed(2)} کیلوگرم
        </p>
      </div>

      <div className="flex items-center justify-between md:justify-end w-full sm:w-auto gap-3 md:gap-10">
        <div className="flex items-center gap-2 border rounded-md px-2 py-1 border-blue-300 dark:border-purple-300">
          <span className="font-bold text-base sm:text-lg text-gray-800 dark:text-white">
            {quantity}
          </span>
          <div className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300">
            <FaChevronUp
              size={14}
              onClick={() => handleChangeNumber(1)}
              className="cursor-pointer hover:text-blue-500 transition-all hover:dark:text-purple-500"
            />
            <FaChevronDown
              size={14}
              onClick={() => handleChangeNumber(-1)}
              className="cursor-pointer hover:text-blue-500 transition-all hover:dark:text-purple-500"
            />
          </div>
        </div>

        <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white whitespace-nowrap">
          {(price * quantity).toLocaleString()} تومان
        </div>

        <FaTrash
          className="text-gray-500 dark:text-gray-300 hover:text-red-500 transition cursor-pointer"
          onClick={() => handleChangeNumber(-quantity)}
        />
      </div>
    </div>
  );
}
