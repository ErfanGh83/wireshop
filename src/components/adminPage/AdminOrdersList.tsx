"use client";

import { getAllOrders } from "@/lib/api/adminApi";
import { OrdersResponse } from "@/types/cart";
import { ReactNode, useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import AdminOrderModal from "./AdminOrderModal";

function AdminOrdersList() {
  const [rowData, setRowData] = useState<OrdersResponse | null>();

  useEffect(() => {
    getAllOrders().then((res) => setRowData(res));
  }, []);

  if (!rowData) {
    return (
      <div className="text-center py-10 text-gray-500">
        در حال بارگذاری سفارشات...
      </div>
    );
  }

  const tableData: ReactNode[][] = rowData.map((item) => [
    item.status == "paid"
      ? "پرداخت شده"
      : item.status == "sending"
      ? "در حال ارسال"
      : "کامل شده",
    item.cost,
    `${item.address.province}, ${item.address.city}, ${item.address.description}, ${item.address.plaque}, ${item.address.postalCode}`,
  ]);

  const tableModal = rowData.map((item) => <AdminOrderModal id={item.id} />);

  return (
    <AdminTable
      tableModal={tableModal}
      tableData={tableData}
      tableHead={["وضعیت سفارش", "هزینه", "آدرس"]}
      tableStyle={{
        head: "text-blue-700 text-right",
        body: "text-blue-900",
      }}
    />
  );
}

export default AdminOrdersList;
