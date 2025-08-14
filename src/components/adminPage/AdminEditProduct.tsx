"use client";

import { getAllProduct } from "@/lib/api/adminApi";
import AdminTable from "./AdminTable";
import { ProductListResponse } from "@/types/product";
import Image from "next/image";
import AdminEditProductModal from "./AdminEditProductModal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "@/lib/api/constants";

function AdminEditProduct() {
  const [rowData, setRowData] = useState<ProductListResponse | null>();
  useEffect(() => {
    getAllProduct()
      .then((res) => setRowData(res))
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد")
      );
  }, []);

  if (!rowData) {
    return (
      <div className="text-center py-10 text-gray-500">
        در حال بارگذاری محصولات...
      </div>
    );
  }

  console.log("rowData", rowData.data)

  const tableData = rowData.data.map((item) => [
    item.images[0] ? <Image
      src={BASE_URL + item.images[0]}
      crossOrigin="anonymous"
      alt={item.name}
      className="rounded"
      width={50}
      height={50}
      priority
    /> : null,
    item.name,
  ]);

  const tableModal = rowData.data.map((item) => (
    <AdminEditProductModal key={item.id} id={item.id} />
  ));

  return (
    <AdminTable
      tableModal={tableModal}
      tableData={tableData}
      tableHead={["عکس محصول", "نام محصول", "تغییر"]}
      tableStyle={{
        head: "text-blue-700 text-right",
        body: "text-blue-900",
      }}
    />
  );
}

export default AdminEditProduct;
