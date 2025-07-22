import React from 'react'

function ProductCommentForm() {
  return (
    <div className="mt-4 pl-3">
      <label className="block mb-1">ثبت نظر</label>
      <textarea
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:border-gray-600 min-h-30 max-h-60 "
        rows={3}
        placeholder="نظر خود را بنویسید..."
      />
      <button className="mt-2 hover:scale-105 ease-out transition-all cursor-pointer bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 rounded-lg dark:bg-slate-500 dark:text-gray-100">
        ارسال نظر
      </button>
    </div>
  );
}

export default ProductCommentForm