"use client";

import { useState } from "react";
import SupportModal from "./SupportModal";

interface Props {
  isNew: boolean;
  userName: string;
  date: string;
  lastMessage: string;
  conversationId: string;
}

function SupportMessageItem({ date, lastMessage, isNew, userName, conversationId }: Props) {
  // const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div
      className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-4 space-y-2 border-r-4"
      style={{
        borderColor: isNew === true ? "oklch(62.3% 0.214 259.815)" : "#4ade80",
      }}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl">{userName}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <p
        className={`text-gray-700 dark:text-gray-200 text-justify transition-all ease-in-out text-ellipsis text-sm`}
      >
        {lastMessage}
      </p>

      {/* {isMaximized && (
        <motion.textarea
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          defaultValue={repliedMessage}
          disabled={isNew == "replied"}
          placeholder="پاسخ شما..."
          className={`${
            isNew == "replied" && "cursor-not-allowed"
          } w-full mt-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-slate-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-500 text-sm resize-none min-h-[80px]`}
        />
      )} */}

      <div className="flex justify-between items-start pt-2">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isNew === true
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {isNew === true ? "پیام جدید" : "مشاهده شده"}
        </span>

        <div className="flex flex-col-reverse md:flex-row gap-3">
          {/* {isNew == "pending" && isMaximized && (
            <button className="bg-blue-50 py-2 px-3 select-none text-sm rounded-2xl cursor-pointer hover:bg-blue-100 text-gray-700 hover:text-gray-900 active:bg-blue-200 transition-all">
              ارسال پاسخ
            </button>
          )} */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-400 dark:bg-purple-500 px-3 select-none py-2 rounded-2xl text-white cursor-pointer dark:hover:bg-purple-400 dark:active:bg-purple-300 hover:bg-indigo-300 transition-all active:bg-indigo-200 text-sm"
          >
            نمایش چت
          </button>

          <SupportModal
            isOpen={isModalOpen}
            conversationId={conversationId}
            onClose={() => setIsModalOpen(false)}
            userName={userName}
          />
        </div>
      </div>
    </div>
  );
}

export default SupportMessageItem;
