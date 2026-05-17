import ProductPageContainer from "@/components/productPage/ProductPageContainer";
import { Suspense } from "react";

function page() {
  return (
    <div className="w-screen overflow-y-auto size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center overflow-hidden">
      <div className="w-screen bg-white dark:bg-slate-900 h-screen ">
        <Suspense fallback="در حال بارگذاری...">
          <ProductPageContainer />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
