"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import SupportModalItem from "./SupportModalItem";
import { useEffect, useRef, useState } from "react";
import {
  connectSocket,
  disconnectSocket,
  joinConversation,
  onReceiveMessage,
  sendMessage,
} from "@/lib/socket";
import { Message } from "@/types/chat";
import { getConversationByID } from "@/lib/api/chatApi";
import { Error } from "@/types/error";
import Spinner from "../spinner/Spinner";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  conversationId: string;
  userName: string;
}

export default function SupportModal({
  isOpen,
  onClose,
  conversationId,
  userName,
}: ModalProps) {
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [chat, setChat] = useState<Message[] | null>(null);
  const [err, setErr] = useState<Error>();

  useEffect(() => {
    if (!isOpen) return;

    getConversationByID(conversationId)
      .then((conversation) => {
        setChat(conversation.messages);
      })
      .catch((err) =>
        setErr({
          status: err.status,
          response: err.response?.message,
          message: err.message,
        })
      );

    connectSocket();

    joinConversation(conversationId);

    onReceiveMessage((msg: Message) => {
      setChat((prev) => (prev ? [...prev, msg] : [msg]));
    });

    return () => {
      disconnectSocket();
    };
  }, [isOpen, conversationId]);

  function handleSendMessage() {
    if (messageRef.current && messageRef.current.value) {
      sendMessage(messageRef.current.value.trim());
      messageRef.current.value = "";
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 z-110 flex items-center px-4 justify-center"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            onClick={onClose}
          >
            <div
              className="bg-white dark:bg-slate-800 w-[350px] md:w-[500px] lg:w-[700px] mx-auto rounded-xl shadow-xl p-4 md:p-6 relative flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {err ? (
                <div className="text-2xl text-center my-20 mx-auto text-red-500">
                  {err?.status == 401
                    ? "لطفا دوباره به عنوان پشتیبان وارد شوید."
                    : err?.message ||
                      err?.response ||
                      "خطای غیر منتظره ای رخ داد."}
                </div>
              ) : chat ? (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {userName}
                    </h2>
                    <button
                      onClick={onClose}
                      className="text-gray-500 hover:text-red-500 transition-all text-xl"
                    >
                      <IoIosClose className="text-4xl" />
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                    {chat?.map((item) => (
                      <SupportModalItem
                        key={item.id}
                        sender={item.senderRole === "user" ? "user" : "support"}
                        text={item.content}
                      />
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <textarea
                      ref={messageRef}
                      placeholder="پیام شما..."
                      rows={1}
                      onInput={(e) => {
                        e.currentTarget.style.height = "auto";
                        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                      }}
                      className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 dark:bg-slate-600 dark:border-gray-500 resize-none max-h-32 leading-6 overflow-auto"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all h-fit"
                    >
                      ارسال
                    </button>
                  </div>
                </>
              ) : (
                <div className="mx-auto my-20 text-center">
                  <Spinner />
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
