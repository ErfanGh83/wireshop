"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import SupportModalItem from "./SupportModalItem";

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
  // const items = connectIo
  const items = [
    {
      sender: "user",
      text: "سلام، سفارشم هنوز به دستم نرسیده.",
    },
    {
      sender: "admin",
      text: "سلام! لطفاً شماره سفارش‌تون رو ارسال کنید تا بررسی کنیم.",
    },
    {
      sender: "user",
      text: "#123456",
    },
    {
      sender: "admin",
      text: "متشکرم. سفارشتون در حال ارسال هست و فردا به دستتون می‌رسه.",
    },
  ];

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
              className="bg-white dark:bg-slate-800 w-full max-w-lg mx-auto rounded-xl shadow-xl p-4 md:p-6 relative flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
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
                {items.map((item, index) => (
                  <SupportModalItem
                    key={index}
                    sender={item.sender as "user" | "admin"}
                    text={item.text}
                  />
                ))}
              </div>

              {/* ارسال پیام (خام، بدون منطق) */}
              {/* فرم ارسال پیام (نسخه textarea، بدون منطق) */}
              <div className="mt-4 flex gap-2">
                <textarea
                  placeholder="پیام شما..."
                  rows={1}
                  onInput={(e) => {
                    e.currentTarget.style.height = "auto";
                    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                  }}
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 dark:bg-slate-600 dark:border-gray-500 resize-none max-h-32 leading-6 overflow-auto"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all h-fit">
                  ارسال
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

