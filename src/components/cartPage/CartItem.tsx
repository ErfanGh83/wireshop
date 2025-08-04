import { FaChevronUp, FaChevronDown, FaTrash } from "react-icons/fa";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onRemove: (id: string) => void;
}

export default function CartItem({
  id,
  name,
  price,
  quantity,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 my-2 bg-white dark:bg-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all w-full gap-y-3 md:gap-y-0">
      {/* اطلاعات محصول */}
      <div className="flex items-center gap-3 md:gap-6 w-full md:w-auto">
        <img
          src="/pizza.jpg"
          alt={name}
          className="w-16 h-16 rounded-md object-cover border border-gray-200 dark:border-gray-600"
        />
        <div className="text-right">
          <h2 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white truncate max-w-[140px] sm:max-w-xs">
            {name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
            اندازه پیش‌فرض
          </p>
        </div>
      </div>

      {/* کنترل‌ها */}
      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3 md:gap-10">
        {/* تعداد */}
        <div className="flex items-center gap-2 border rounded-md px-2 py-1 border-gray-300 dark:border-gray-600">
          <span className="font-bold text-base sm:text-lg text-gray-800 dark:text-white">
            {quantity}
          </span>
          <div className="flex flex-col items-center justify-center text-gray-600 dark:text-gray-300">
            <FaChevronUp
              size={14}
              className="cursor-pointer hover:text-blue-500 transition"
            />
            <FaChevronDown
              size={14}
              className="cursor-pointer hover:text-blue-500 transition"
            />
          </div>
        </div>

        {/* قیمت */}
        <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white whitespace-nowrap">
          {(price * quantity).toLocaleString()} تومان
        </div>

        {/* حذف */}
        <FaTrash
          onClick={() => onRemove(id)}
          className="text-gray-500 dark:text-gray-300 hover:text-red-500 transition cursor-pointer"
        />
      </div>
    </div>
  );
}
