import AdminAddUser from "@/components/adminPage/AdminAddUser";
import AdminCommentContainer from "@/components/adminPage/AdminCommentContainer";
import AdminCompletedOrdersList from "@/components/adminPage/AdminCompletedOrders";
import AdminCreateProductForm from "@/components/adminPage/AdminCreateProductForm";
import AdminEditProduct from "@/components/adminPage/AdminEditProduct";
import AdminOrdersList from "@/components/adminPage/AdminOrdersList";
import AdminTabsContainer from "@/components/adminPage/AdminTabsContainer";
import MainLayout from "@/components/layouts/MainLayout";
import { Suspense } from "react";

const adminTabs = [
  {
    title: "ویرایش محصولات",
    component: <AdminEditProduct />,
  },
  {
    title: "بررسی کامنت",
    component: <AdminCommentContainer />,
  },
  {
    title: "سفارشات در جریان",
    component: <AdminOrdersList />,
  },
  {
    title: "سفارشات تکمیل شده",
    component: <AdminCompletedOrdersList />,
  },
  {
    title: "افزودن محصول",
    component: <AdminCreateProductForm />,
  },
  {
    title: "افزودن عضو",
    component: <AdminAddUser />,
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className=" size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center overflow-hidden ">
        <div className="bg-white dark:bg-slate-600 p-2 w-full h-full overflow-hidden md:pb-3 pb-20">
          <Suspense fallback="در حال بارگذاری...">
            <AdminTabsContainer contains={adminTabs} />
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}
