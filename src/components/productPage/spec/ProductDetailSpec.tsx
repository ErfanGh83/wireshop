"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  value: string;
}

function ProductDetailSpec({ label, value }: Props) {
  return (
    <motion.div
      className="flex flex-col bg-blue-50 dark:bg-slate-700 rounded-xl px-4 py-3 shadow-sm cursor-default"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        className:"px-2",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      <span className="text-sm text-gray-600 dark:text-gray-300 opacity-70">
        {label}
      </span>
      <span className="font-medium text-gray-800 dark:text-gray-100">
        {value}
      </span>
    </motion.div>
  );
}

export default ProductDetailSpec;
