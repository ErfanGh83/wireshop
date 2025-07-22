import MainLayout from "@/components/layouts/MainLayout";
import ProductImageSlider from "@/components/productPage/slider/ProductImageSlider";
import ProductDetailSpec from "@/components/productPage/spec/ProductDetailSpec";
import ProductPageComment from "@/components/productPage/comment/ProductPageComment";
import { productComments, productImageList, productSpecs } from "../../../public/api/examples";


export default function page() {
  return (
    <MainLayout>
      <div className=" overflow-y-auto size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto">
        <div className="bg-white dark:bg-slate-600 shadow-xl overflow-y-auto md:overflow-y-hidden rounded-2xl md:p-6 p-4 w-full h-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {/* Product Image */}
          <div className="flex justify-center items-center md:col-span-2">
            <ProductImageSlider images={productImageList} discount={10} isFeatured />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start space-y-4 md:col-span-3 lg:col-span-4 md:overflow-y-auto pr-1 pt-10">
            <div className="border-r-6 rounded-md p-2 flex flex-col justify-start space-y-4 col-span-3 border-blue-100">
              <h1 className="text-3xl font-bold">نام محصول</h1>
              <p className="text-xl font-semibold">
                قیمت: ۵۰۰۰۰ تومان به ازای هر متر
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                این محصول با کیفیت بالا مناسب برای پروژه‌های مختلف بوده و در
                اندازه‌های دلخواه قابل سفارش است.
              </p>

              {/* Length Input */}
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min={1}
                  placeholder="طول (متر)"
                  className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:border-gray-600"
                />
                <button className="bg-blue-100 hover:scale-105 ease-out transition-all cursor-pointer hover:bg-blue-200 hover:text-blue-900 text-black px-4 py-2 rounded-lg dark:bg-slate-500 hover:dark:text-black dark:text-gray-100">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>

            {/* item Sepcs */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">مشخصات کابل</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                {productSpecs.map((item) => (
                  <ProductDetailSpec
                    label={item.label}
                    value={item.value}
                    key={item.label}
                  />
                ))}
              </div>
            </div>

            {/* Comment Box */}
            <div className="mt-4 pl-3">
              <label className="block mb-1">ثبت نظر</label>
              <textarea
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:border-gray-600 min-h-30 max-h-60 "
                rows={3}
                placeholder="نظر خود را بنویسید..."
              />
              <button className="mt-2 hover:scale-105 ease-out transition-all cursor-pointer bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 rounded-lg dark:bg-slate-500 dark:text-gray-100">
                ارسال نظر
              </button>
            </div>

            {/* previous comments */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-black mx-2" />
              <p className="px-4 text-center whitespace-nowrap text-black dark:text-gray-100">
                نمایش نظرات (1)
              </p>
              <div className="flex-grow border-t border-black mx-2" />
            </div>
            <ul className="mt-2">
              {productComments.map((item) => (
                <ProductPageComment
                  key={item.id}
                  text={item.text}
                  userName={item.userName}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
