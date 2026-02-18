import { addCartItem, removeCartItem } from "@/lib/api/cartApi";
import { ERROR_MESSAGES } from "@/lib/api/constants";
import { useRouter } from "next/navigation";
import { FaChevronUp, FaChevronDown, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface CartItemProps {
  itemId: string;
  productId: string;
  name: string;
  price: number;
  // weightKg: number;
  quantity: number;
  // unit: number;
  onChange: () => void;
}

export default function CartItem({
  itemId,
  productId,
  name,
  price,
  quantity,
  // unit,
  onChange,
}: CartItemProps) {
  const router = useRouter();
  const handleChangeNumber = async (amount: number) => {
    if (amount > 0)
      await addCartItem({ productId: productId, quantity: amount })
        .then(() => toast.success("با موفقیت اضافه شد"))
        .catch((err) =>
          toast.error(
            ERROR_MESSAGES.cart[
              err.status as keyof typeof ERROR_MESSAGES.cart
            ] ||
              err.response.error ||
              "خطایی رخ داده است"
          )
        );
    else if (amount < 0)
      await removeCartItem(itemId, -amount)
        .then(() => toast.success("با موفقیت کم شد"))
        .catch((err) =>
          toast.error(
            ERROR_MESSAGES.cart[
              err.status as keyof typeof ERROR_MESSAGES.cart
            ] ||
              err.response.error ||
              "خطایی رخ داده است"
          )
        );

    onChange();
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 my-2 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all w-full gap-y-3 md:gap-y-0">
      <div className="flex flex-col text-right w-full sm:w-auto">
        <h2
          className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white truncate cursor-pointer hover:underline"
          onClick={() => router.push(`/product?id=${productId}`)}
        >
          {name}
        </h2>
        {/* <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
           هر واحد: {unit} 
        </p> */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
          واحد کل: {quantity}
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

        {price ? (
          <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white whitespace-nowrap">
            {(price * quantity).toLocaleString()} ریال
          </div>
        ) : (
          <div>قیمت موجود نیست.</div>
        )}

        <FaTrash
          className="text-gray-500 dark:text-gray-300 hover:text-red-500 transition cursor-pointer"
          onClick={() => handleChangeNumber(-quantity)}
        />
      </div>
    </div>
  );
}
