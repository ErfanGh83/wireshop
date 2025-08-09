import AdminCreateProductForm from "@/components/adminPage/AdminCreateProductForm";
import AdminEditProduct from "@/components/adminPage/AdminEditProduct";
import AdminTabsContainer from "@/components/adminPage/AdminTabsContainer";
import MainLayout from "@/components/layouts/MainLayout";

const adminTabs = [
  {
    title: "ویرایش محصولات",
    component: <AdminEditProduct />,
  },
  {
    title: "افزودن محصول",
    component: <AdminCreateProductForm />,
  },
  // {
  //   title: "لیست سفارشات",
  //   component: (
  //     <AdminTable
  //       url="order_list"
  //       tableHead={["نام مشتری", "تاریخ", "مبلغ", "جزئیات"]}
  //       tableStyle={{
  //         head: "text-green-700 uppercase",
  //         body: "text-green-900 font-light",
  //       }}
  //     />
  //   ),
  // },
  // {
  //   title: "تغییر دسترسی",
  //   component: (
  //     <AdminTable
  //       url="change_access"
  //       tableHead={["نام کاربر", "دسترسی", "تغییر"]}
  //       tableStyle={{
  //         head: "text-purple-700",
  //         body: "text-purple-400",
  //       }}
  //     />
  //   ),
  // },
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

// tableBody: [
//       [
//         {
//           content: (
//             <Image
//               src="https://www.wireandcableyourway.com/media/wysiwyg/3420_2.jpg"
//               width={50}
//               height={50}
//               alt="cable picture"
//             />
//           ),
//         },
//         { content: "کابل مخصوص" },
//         {
//           content: "تغییر",
//           className: "text-green-600 dark:text-green-400",
//         },
//       ],
//     ]

// const adminTabs = [
//   {
//     title: "ویرایش محصولات",
//     component: () => (
//       <AdminTable
//         url="edit_item"
//         tableHead={["عکس محصول", "نام محصول", "تغییر"]}
//       />
//     ),
//   },
//   {
//     title: "لیست سفارشات",
//     component: () => (
//       <AdminTable
//         url="order_list"
//         tableHead={["نام مشتری", "تاریخ", "مبلغ", "جزئیات"]}
//       />
//     ),
//   },
//   {
//     title: "تغییر دسترسی",
//     component: () => (
//       <AdminTable
//         tableHead={["نام کاربر", "دسترسی", "تغییر"]}
//         url="change_access"
//       />
//     ),
//     // modalStyle
//   },
// ];
