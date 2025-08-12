import { ERROR_MESSAGES } from "@/lib/api/constants";
import { postProductComment } from "@/lib/api/productApi";
import React, { useRef } from "react";
import { toast } from "react-toastify";

function ProductCommentForm({ id }: { id: string }) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (!inputRef.current?.value) {
      toast.error("کامنت نمیتواند خالی باشد");
      return;
    }
    if (inputRef.current?.value.length < 10) {
      toast.error("کامنت باید حداقل 10 کارکتر باشد");
      return;
    }

    postProductComment(id, { content: inputRef.current?.value })
      .then(() => {
        toast.success("کامنت با موفقیت  ارسال شد.\nدر انتظار تایید ادمین");
        inputRef.current!.value = "";
      })
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.comment[
            err.status as keyof typeof ERROR_MESSAGES.comment
          ]
        )
      );
  };
  return (
    <div className="mt-4 pl-3">
      <label className="block mb-1">ثبت نظر</label>
      <textarea
        ref={inputRef}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-slate-700 dark:border-gray-600 min-h-30 max-h-60 "
        rows={3}
        placeholder="نظر خود را بنویسید..."
      />
      <button
        onClick={handleSubmit}
        className="mt-2 hover:scale-105 ease-out transition-all cursor-pointer bg-blue-100 hover:bg-blue-200 text-black px-4 py-2 rounded-lg dark:bg-slate-500 dark:text-gray-100"
      >
        ارسال نظر
      </button>
    </div>
  );
}

export default ProductCommentForm;
