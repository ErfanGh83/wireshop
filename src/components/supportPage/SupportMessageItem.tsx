"use client";

import { useState } from "react";
import SupportModal from "./SupportModal";
import { lastMessage } from "@/types/chat";
import { formatRelativeTime } from "@/lib/date_formatter";

interface Props {
  isNew: boolean;
  userName: string;
  date: string;
  lastMessage?: lastMessage;
  conversationId: string;
}

function SupportMessageItem({
  date,
  lastMessage,
  isNew,
  userName,
  conversationId,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  if (!lastMessage) return;

  return (
    <div
      className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-4 space-y-2 border-r-4"
      style={{
        borderColor: isNew === true ? "oklch(62.3% 0.214 259.815)" : "#4ade80",
      }}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl">{userName}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{formatRelativeTime(date)}</span>
      </div>
      <p
        className={`text-gray-700 dark:text-gray-200 text-justify transition-all ease-in-out text-ellipsis text-sm`}
      >
        {lastMessage.content}
      </p>

      <div className="flex justify-between items-start pt-2">
        <div className="flex flex-row gap-3">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              isNew === true
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {isNew === true ? "پیام جدید" : "مشاهده شده"}
          </span>
          <span className="text-emerald-500 bg-emerald-100 px-2 py-1 rounded-full text-xs hidden sm:block">
            {lastMessage.senderRole === "user" ? "از کاربر" : "از پشتیبانی"}
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-3">
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
