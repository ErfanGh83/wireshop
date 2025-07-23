interface Props {
  status: "pending" | "replied";
  userName: string;
  date: string;
  message: string;
}

function SupportMessageItem({ date, message, status, userName }: Props) {
  return (
    <div
      className="bg-white dark:bg-slate-700 rounded-xl shadow-md p-4 space-y-2 border-r-4"
      style={{
        borderColor: status === "pending" ? "#facc15" : "#4ade80",
      }}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-xl">{userName}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-200 line-clamp-4 md:line-clamp-3 text-justify text-ellipsis text-sm">
        {message}
      </p>

      <div className="flex justify-between items-center pt-2">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {status === "pending" ? "در انتظار پاسخ" : "پاسخ داده‌شده"}
        </span>

        <button className="bg-indigo-400 px-3 py-2 rounded-2xl dark:text-blue-300 text-white cursor-pointer hover:bg-indigo-300 transition-all active:bg-indigo-200 text-sm">
          نمایش بیشتر
        </button>
      </div>
    </div>
  );
}

export default SupportMessageItem;
