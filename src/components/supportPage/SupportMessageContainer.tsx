"use client";

import { getAllConversations } from "@/lib/api/chatApi";
import SupportMessageItem from "./SupportMessageItem";
import { useEffect, useState } from "react";
import { AllConversation } from "@/types/chat";
import { Error } from "@/types/error";
import Spinner from "../spinner/Spinner";
import { ERROR_MESSAGES } from "@/lib/api/constants";

function SupportMessageContainer() {
  const [data, setData] = useState<AllConversation[] | null>();
  const [err, setErr] = useState<Error>();

  useEffect(() => {
    getAllConversations()
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((err) => {
        setErr({
          status: err.status,
          response: err.response?.message,
          message:
            err.status in ERROR_MESSAGES.support
              ? ERROR_MESSAGES.support[
                  err.status as keyof typeof ERROR_MESSAGES.support
                ]
              : err.message,
        });
      });
  }, []);

  if (!data && !err)
    return (
      <div className="mx-auto mt-10 text-center h-40">
        <Spinner />
      </div>
    );

  if (err) {
    return (
      <div className="text-2xl text-center mt-10 mx-auto text-red-500">
        {err?.status == 401
          ? "لطفا دوباره به عنوان پشتیبان وارد شوید."
          : err?.message || err?.response || "خطای غیر منتظره ای رخ داد."}
      </div>
    );
  }

  return (
    <div className="p-1 md:p-4 lg:p-6 space-y-4 mx-auto max-w-[1200px]">
      <h1 className="text-2xl font-bold mb-4">پیام‌های کاربران</h1>

      {data?.map((item) => (
        <SupportMessageItem
          key={item.id}
          date={item.updatedAt}
          lastMessage={item.lastMessage}
          isNew={item.newMessage}
          userName={item.userPhone}
          conversationId={item.id}
        />
      ))}

      {data?.filter((item) => item.lastMessage != undefined).length == 0 && (
        <h4 className="text-slate-800 dark:text-slate-300 font-semibold">
          پیامی برای نمایش وجود ندارد.
        </h4>
      )}
    </div>
  );
}

export default SupportMessageContainer;
