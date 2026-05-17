import CartContainer from "@/components/cartPage/CartContainer";
import MainLayout from "@/components/layouts/MainLayout";
import { Suspense } from "react";

function page() {
  return (
    <MainLayout>
      <div className=" overflow-y-auto size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto">
        <div className="bg-white dark:bg-slate-700 shadow-xl overflow-y-auto rounded-2xl md:p-6 p-4 w-full h-full">
          <Suspense fallback="در حال بارگذاری...">
            <CartContainer />
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
