import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoReceipt } from "react-icons/io5";
import Link from "next/link";
import { toast } from "react-toastify";
import { getOrdersHistory } from "@/lib/api/adminApi";
import { Order } from "@/types/order";
// import { mockOrders } from "../../../public/api/examples";

type Props = {
  tab: "sending" | "completed";
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

const statusLabels: Record<"sending" | "completed", string> = {
  sending: "در حال ارسال",
  completed: "تکمیل شده",
};

const OrdersModal = ({ tab, setModalIsOpen }: Props) => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [currentTab, setCurrentTab] = useState<"sending" | "completed">(tab);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  // Sync tab from parent
  useEffect(() => {
    setCurrentTab(tab);
  }, [tab]);

  // Fetch orders
  useEffect(() => {
    getOrdersHistory()
      .then((res) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        setOrders(res);
        toast.success("سفارشات با موفقیت بارگذاری شد.");
      })
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد.")
      );
  }, []);

  // useEffect(() => {
  //   setOrders(mockOrders);
  // }, []);

  const filteredOrders =
    orders?.filter((order) => order.status === currentTab) ?? [];

  return (
    <div
      dir="rtl"
      className="w-screen h-screen sm:h-[500px] sm:w-[500px] md:w-[600px] xl:w-[700px] xl:h-[600px]
      relative p-4 pt-12 sm:pt-4 bg-white dark:bg-slate-800 text-black dark:text-white
      rounded-lg shadow-lg flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h2 className="text-xl font-semibold mx-auto">
          سفارش‌های من
        </h2>
        <button
          onClick={handleCloseModal}
          className="absolute top-[5%] right-[3%] sm:top-0 sm:right-0 p-2
          text-gray-500 hover:text-red-500"
        >
          <FaXmark size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 shrink-0">
        {(["sending", "completed"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setCurrentTab(status)}
            className={`px-3 py-1 rounded text-sm cursor-pointer
              ${currentTab === status
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-600"
              }`}
          >
            {statusLabels[status]}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {orders === null ? (
          <p className="text-gray-500 dark:text-gray-300">
            در حال بارگذاری سفارش‌ها...
          </p>
        ) : filteredOrders.length === 0 ? (
          <div className="h-full py-16 flex flex-col items-center justify-center text-8xl text-gray-600 dark:text-gray-400">
            <IoReceipt />
            <p className="text-xl mt-4">سفارشی یافت نشد</p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="p-3 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
            >
              {/* Order Header */}
              <div className="flex justify-between">
                <span className="font-medium">
                  سفارش شماره {order.id}
                </span>
                <span className="text-sm text-gray-500">
                  {statusLabels[order.status]}
                </span>
              </div>

              {/* Items */}
              <div className="mt-2 space-y-1">
                {order.items.map((item) => (
                  <Link
                    href={`/product?id=${item.product.id}`}
                    key={item.id}
                    className="flex justify-between items-center text-sm
                    hover:bg-blue-50 dark:hover:bg-gray-800
                    py-2 px-1 rounded transition-colors"
                  >
                    <span className="truncate max-w-[220px]">
                      {item.product.name} × {item.quantity}
                    </span>

                    <span>
                      {(item.price * item.quantity).toLocaleString(
                        "fa-IR"
                      )}{" "}
                      ریال
                    </span>
                  </Link>
                ))}
              </div>

              <hr className="w-5/6 mx-auto my-2 border-gray-300 dark:border-gray-700" />

              {/* Total */}
              <div className="mt-2 font-semibold">
                جمع کل: {order.cost.toLocaleString("fa-IR")} ریال
              </div>

              {/* Address */}
              <div className="mt-1 text-xs text-gray-500">
                {order.address.province}، {order.address.city}،
                پلاک {order.address.plaque}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrdersModal;
