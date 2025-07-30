"use client";

import { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import {
  connectSocket,
  disconnectSocket,
  identify,
  onMessageSaved,
  onReceiveMessage,
} from "@/lib/socket";
import { getUserConversation } from "@/lib/api/chatApi";
import { Conversation, Message } from "@/types/chat";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<Conversation | null>(null);
  const [messageText, setMessageText] = useState("");

  // const userId = localStorage.getItem("userId");
  const userId = "b1f53907-7a31-4fbe-887c-5506eec49a99";
  console.log("chat", chat)

  useEffect(() => {
    getUserConversation().then((conversation) => {
      setChat(conversation);
    });
  }, [])

  useEffect(() => {
    if (!userId || !isOpen) return 
    
    connectSocket();

    identify(userId, "user");


    // onReceiveMessage((msg: Message) => {
    //   setChat((prev) =>
    //     prev ? { ...prev, messages: [...prev.messages, msg] } : null
    //   );
    // });

    onMessageSaved((msg: Message) => {
      setChat((prev) =>
        prev ? { ...prev, messages: [...prev.messages, msg] } : null
      );
    });

    return () => {
      disconnectSocket();
    };
  }, [isOpen]);

  function handleSendMessage() {
    if (messageText.trim() && userId) {
      import("@/lib/socket").then(({ sendMessage }) => {
        sendMessage(userId, messageText.trim());
      });
      setMessageText("");
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          isOpen
            ? " bg-blue-400 hover:bg-blue-500 dark:hover:bg-purple-400 dark:bg-purple-600 dark:text-gray-300"
            : " bg-blue-100 hover:bg-blue-200 dark:hover:bg-purple-400 dark:bg-purple-500 dark:text-gray-300"
        } fixed bottom-8 left-8 z-55 transition-all cursor-pointer text-black p-4 rounded-full shadow-lg dark:text-gray-100`}
      >
        <FaCommentDots className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-0 right-0 left-0 top-0 bg-black/50 dark:bg-black/80 z-45"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              exit={{ x: -30, opacity: 0 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
              className="fixed bottom-24 left-6 w-70 md:w-120 max-w-full h-120 bg-white dark:bg-slate-700 text-black dark:text-gray-100 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-600">
                <h2 className="font-semibold">پشتیبانی</h2>
                <button
                  className="cursor-pointer hover:scale-120 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm">
                {chat?.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`${
                      msg.senderId === userId
                        ? "bg-blue-100 self-end ml-auto dark:bg-slate-600"
                        : "bg-gray-200 self-start mr-auto dark:bg-slate-500"
                    } text-right p-2 rounded-lg w-fit`}
                  >
                    {msg.content}
                  </div>
                ))}
              </div>

              <div className="p-3">
                <div className="flex items-center space-x-2">
                  <textarea
                    placeholder="پیام شما..."
                    rows={1}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onInput={(e) => {
                      e.currentTarget.style.height = "auto";
                      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                    }}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 dark:bg-slate-600 dark:border-gray-500 resize-none max-h-32 leading-6 overflow-auto"
                  />
                  <button
                    className="bg-blue-100 hover:bg-blue-200 hover:dark:bg-purple-300 cursor-pointer transition-all px-4 mb-auto py-2 rounded-lg text-black dark:bg-slate-500 dark:text-gray-100"
                    onClick={handleSendMessage}
                  >
                    ارسال
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
