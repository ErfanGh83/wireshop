import PurchaseReceipt from "@/components/receipt/PurchaseReceipt";
import { Suspense } from "react";

function page() {
  return (
    <div className=" overflow-y-auto size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto">
      <div className="bg-white dark:bg-slate-600 shadow-xl overflow-y-auto md:overflow-y-hidden rounded-2xl md:p-6 p-4 w-full h-full grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-6">
        <Suspense fallback="در حال صدور رسید...">
          <PurchaseReceipt />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
