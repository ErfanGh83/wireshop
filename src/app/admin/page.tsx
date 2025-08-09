import AdminAddUser from "@/components/adminPage/AdminAddUser";
import AdminCreateProductForm from "@/components/adminPage/AdminCreateProductForm";
import AdminEditProduct from "@/components/adminPage/AdminEditProduct";
import AdminOrdersList from "@/components/adminPage/AdminOrdersList";
import AdminTabsContainer from "@/components/adminPage/AdminTabsContainer";
import MainLayout from "@/components/layouts/MainLayout";

const adminTabs = [
  {
    title: "ویرایش محصولات",
    component: <AdminEditProduct />,
  },
  {
    title: "لیست سفارشات",
    component: <AdminOrdersList />,
  },
  {
    title: "افزودن محصول",
    component: <AdminCreateProductForm />,
  },
  {
    title: "افزودن عضو",
    component: <AdminAddUser />,
  }
];

export default function Home() {
  return (
    <MainLayout>
      <div className=" size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-hidden">
        <div className="bg-white dark:bg-slate-600 shadow-xl rounded-2xl md:p-4 p-2 w-full h-full overflow-hidden">
          <AdminTabsContainer contains={adminTabs} />
        </div>
      </div>
    </MainLayout>
  );
}
