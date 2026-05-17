"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { IoIosClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function AdminModal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
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
            className="fixed inset-0 z-110 flex items-center justify-center px-4 py-8"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            onClick={onClose}
          >
            <div
              className="bg-white dark:bg-slate-800 w-full max-w-lg max-h-full rounded-xl shadow-xl p-4 md:p-6 relative overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-red-500 transition-all text-xl"
                >
                  <IoIosClose className="text-4xl" />
                </button>
              </div>

              <div className="text-gray-700 dark:text-gray-200">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
