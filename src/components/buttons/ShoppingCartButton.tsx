import { Dispatch, SetStateAction } from "react";
import { CgShoppingCart } from "react-icons/cg";

type Props = {
  itemCount: number;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ShoppingCartButton = ({ itemCount = 2, setModalIsOpen }: Props) => {
  return (
    <div className="relative">
      <button
        onClick={() => setModalIsOpen(true)}
        className="size-10 md:size-11 flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-gray-800"
        aria-label="Shopping cart"
      >
        <CgShoppingCart className="text-xl md:text-2xl" />
      </button>

      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center size-4 md:size-5 rounded-full bg-red-500 text-white text-xs font-bold">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartButton;
