"use client";

import { getAllCompletedOrders } from "@/lib/api/adminApi";
import { OrdersResponse } from "@/types/cart";
import { ReactNode, useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import AdminCompletedOrderModal from "./AdminCompletedOrderModal";
import { toast } from "react-toastify";

function AdminCompletedOrdersList() {
  const [rowData, setRowData] = useState<OrdersResponse | null>();

  useEffect(() => {
    getAllCompletedOrders()
      .then((res) => {
        setRowData(res)
        // console.log(res)
      })
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد")
      );
  }, []);

  if (!rowData) {
    return (
      <div className="text-center py-10 text-gray-500">
        در حال بارگذاری سفارشات...
      </div>
    );
  }

  const tableData: ReactNode[][] = rowData?.map((item) => [
    "کامل شده",
    item.cost,
    `${item.address.province}, ${item.address.city}, ${item.address.description}, ${item.address.plaque}, ${item.address.postalCode}`,
  ]);

  const tableModal = rowData?.map((item) => (
    <AdminCompletedOrderModal key={item.id} id={item.id} />
  ));

  return (
    <AdminTable
      tableModal={tableModal}
      tableData={tableData}
      tableHead={["وضعیت سفارش", "هزینه", "آدرس", "جزئیات سفارش"]}
      tableStyle={{
        head: "text-blue-700 text-right",
        body: "text-blue-900 dark:text-blue-200",
      }}
    />
  );
}

export default AdminCompletedOrdersList;
