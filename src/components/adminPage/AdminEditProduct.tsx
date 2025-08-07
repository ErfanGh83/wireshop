'use client'

import { getAllProduct } from "@/lib/api/adminApi";
import AdminTable from "./AdminTable";
import { ProductListResponse } from "@/types/product";
import Image from "next/image";
import AdminEditProductModal from "./AdminEditProductModal";
import { useEffect, useState } from "react";

function AdminEditProduct() {
  const [rowData, setRowData] = useState<ProductListResponse | null>();
  useEffect(() => {
    getAllProduct().then((res) => setRowData(res));
  }, []);

  if (!rowData) {
    return (
      <div className="text-center py-10 text-gray-500">
        در حال بارگذاری محصولات...
      </div>
    );
  }

  const tableData = rowData.data.map((item) => [
    <Image
      src={item.images[0]}
      alt={item.name}
      className="rounded"
      width={50}
    />,
    item.name,
  ]);

  const tableModal = rowData.data.map((item) => (
    <AdminEditProductModal id={item.id} />
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
