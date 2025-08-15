import PurchaseReceipt from "@/components/receipt/PurchaseReceipt";
import { Suspense } from "react";

function page() {
  return (
    <div>
      <Suspense fallback="در حال صدور رسید...">
        <PurchaseReceipt />
      </Suspense>
    </div>
  );
}

export default page;
