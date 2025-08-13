import { Dispatch, SetStateAction } from 'react';
import { CgShoppingCart } from 'react-icons/cg';

type Props = {
  itemCount: number
  setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

const ShoppingCartButton = ({ itemCount = 2, setModalIsOpen }:Props) => {
  
  return (
    <div className="size-8 sm:size-10 relative">
      <button
        onClick={() => setModalIsOpen(true)}
        className='size-full flex items-center justify-center cursor-pointer text-xl border-[1px] text-black dark:text-white border-gray-300 shadow-md hover:text-blue-500 rounded-sm dark:hover:text-blue-400 hover:shadow-blue-500 hover:border-blue-300 transition-all'
      >
        <CgShoppingCart />
      </button>
 
      {itemCount > 0 && (
        <div className="absolute -top-1 -right-1">
          <div className="size-4 md:size-5 flex items-center justify-center bg-red-500 rounded-full">
            <span className="text-xs text-white font-bold">
              {itemCount > 9 ? '9+' : itemCount}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartButton