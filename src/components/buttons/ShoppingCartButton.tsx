import { CgShoppingCart } from 'react-icons/cg';

const ShoppingCartButton = ({ itemCount = 2 }) => {
  return (
    <div className="relative">
      <button
        className='h-8 md:size-10 p-2 border-b-1 border-black dark:border-white text-lg md:text-2xl border-[1px] dark:border-transparent rounded-sm cursor-pointer bg-white dark:bg-slate-500 text-black dark:text-gray-100 hover:text-blue-400 transition-colors'
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