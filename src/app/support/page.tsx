import MainLayout from "@/components/layouts/MainLayout";
import SupportMessageContainer from "@/components/supportPage/SupportMessageContainer";
import { Suspense } from "react";

function page() {
  return (
    <MainLayout>
      <div className=" overflow-y-auto size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center overflow-auto">
        <div className="bg-white dark:bg-slate-600 shadow-xl overflow-y-auto md:pt-14 md:p-6 p-2 w-full h-full">
          <Suspense fallback="در حال بارگذاری...">
            <SupportMessageContainer />
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
