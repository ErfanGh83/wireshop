"use client";

import {
  getAllFilteredProducts,
  getFilteredProductsByQuery,
} from "@/lib/api/adminApi";
import AdminTable from "./AdminTable";
import { ProductListResponse } from "@/types/product";
import Image from "next/image";
import AdminEditProductModal from "./AdminEditProductModal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "@/lib/api/constants";
import { useRouter } from "next/navigation";
import AdminDiscountModal from "./AdminDiscountModal";

interface Filter {
  query?: string;
  hasDiscount?: boolean;
  isActiveDiscount?: boolean;
  pageNum: number;
}

function AdminEditProduct() {
  const [rowData, setRowData] = useState<ProductListResponse | null>();
  const [filters, setFilters] = useState<Filter>({
    pageNum: 1,
    query: "افشان",
  });
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams();
    queryParams.append("page", String(filters.pageNum));

    if (filters.query && filters.query.length > 2) {
      console.log("1111111111111");

      queryParams.append("q", filters.query);
      getFilteredProductsByQuery(queryParams.toString())
        .then((res) => {
          console.log("222222222");
          console.log(res);
          setRowData(res);
        })
        .catch((err) =>
          toast.error(err.response?.message || err.message || "خطایی رخ داد")
        );
      console.log("finisssssssssssshhhhhhhhhhh");
      return;
    }

    if (filters.hasDiscount !== undefined)
      queryParams.append("hasAnyActiveDiscount", String(filters.hasDiscount));
    if (filters.isActiveDiscount !== undefined)
      queryParams.append(
        "hasEffectiveDiscount",
        String(filters.isActiveDiscount)
      );

    console.log("query string:", queryParams.toString());
    console.log("filters:", filters);

    getAllFilteredProducts(queryParams.toString())
      .then((res) => {
        console.log(res);
        setRowData((prev) => {
          if (!prev || filters.pageNum == 1) return res;

          return {
            ...res,
            data: [...prev.data, ...res.data],
          };
        });
      })
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد")
      );
  }, [filters]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setFilters({ query: query, pageNum: 1 });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  if (!rowData) {
    return (
      <div className="text-center py-10 text-gray-500">
        در حال بارگذاری محصولات...
      </div>
    );
  }

  console.log("rowData", rowData.data);

  const tableData = rowData.data.map((item) => [
    item.images[0] ? (
      <Image
        src={BASE_URL + item.images[0].url}
        crossOrigin="anonymous"
        alt={item.name}
        className="rounded"
        width={50}
        height={50}
        priority
      />
    ) : null,
    <p onClick={() => router.push(`/product?id=${item.id}`)} key={item.id}>
      {item.name}
    </p>,
  ]);

  const tableModal = rowData.data.map((item) => (
    <AdminEditProductModal key={item.id} id={item.id} />
  ));

  const tableDiscountModal = rowData.data.map((item) => (
    <AdminDiscountModal key={item.id} id={item.id} />
  ));

  const filterSection = (
    <div className="p-2 w-full gap-4 flex flex-col md:flex-row mb-4 items-center">
      <input
        className="w-full dark:bg-slate-800 text-slate-600 dark:text-white
               py-2 px-6 max-w-96 rounded-full border-2
               focus:bg-slate-200 focus:dark:bg-slate-700/80
               transition-all dark:border-slate-700 border-slate-400"
        type="text"
        placeholder="جستجوی نام محصول"
        defaultValue={filters.query || ""}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex gap-3 flex-wrap">
        <div>
          <input
            type="radio"
            id="has-discount"
            name="discount-filter"
            className="peer hidden"
            checked={filters.hasDiscount === true}
            onChange={() =>
              setFilters({
                pageNum: 1,
                hasDiscount: true,
                isActiveDiscount: undefined,
              })
            }
          />
          <label
            htmlFor="has-discount"
            className="
          cursor-pointer px-4 py-2 rounded-full text-sm
          border border-blue-500
          text-blue-600 dark:text-blue-400
          peer-checked:bg-blue-600
          peer-checked:text-white
          peer-checked:border-blue-600
          transition-all
        "
          >
            دارای تخفیف
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="active-discount"
            name="discount-filter"
            className="peer hidden"
            checked={filters.isActiveDiscount === true}
            onChange={() =>
              setFilters({
                pageNum: 1,
                isActiveDiscount: true,
                hasDiscount: undefined,
              })
            }
          />
          <label
            htmlFor="active-discount"
            className="
          cursor-pointer px-4 py-2 rounded-full text-sm
          border border-blue-500
          text-blue-600 dark:text-blue-400
          peer-checked:bg-blue-600
          peer-checked:text-white
          peer-checked:border-blue-600
          transition-all
        "
          >
            تخفیف فعال
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="all-products"
            name="discount-filter"
            className="peer hidden"
            checked={
              filters.hasDiscount === undefined &&
              filters.isActiveDiscount === undefined
            }
            onChange={() =>
              setFilters({
                pageNum: 1,
              })
            }
          />
          <label
            htmlFor="all-products"
            className="
          cursor-pointer px-4 py-2 rounded-full text-sm
          border border-gray-400
          text-gray-600 dark:text-gray-300
          peer-checked:bg-gray-600
          peer-checked:text-white
          peer-checked:border-gray-600
          transition-all
        "
          >
            همه
          </label>
        </div>
      </div>
    </div>
  );

  const showMoreBtn = (
    <div className="w-full flex">
      {rowData.data.length % 10 == 0 && (
        <button
          className="text-white px-4 mx-auto py-2 my-4 rounded-lg text-center bg-blue-600 dark:bg-blue-400"
          onClick={() =>
            setFilters((prev) => {
              return { ...prev, pageNum: prev.pageNum + 1 };
            })
          }
        >
          نمایش بیشتر
        </button>
      )}
    </div>
  );

  return (
    <AdminTable
      tableModal={tableModal}
      tableData={tableData}
      tableHead={["عکس محصول", "نام محصول", "تخفیف", "تغییر"]}
      tableStyle={{
        head: "text-blue-700 text-right",
        body: "text-blue-900 dark:text-blue-100",
      }}
      tableDiscountModal={tableDiscountModal}
      filterSection={filterSection}
      hasDiscount={true}
      showMoreBtn={showMoreBtn}
    />
  );
}

export default AdminEditProduct;
