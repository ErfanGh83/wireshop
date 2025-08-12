import { formatRelativeTime } from "@/lib/date_formatter";
import { FaRegUser } from "react-icons/fa";

interface Props {
  firstname?: string;
  lastname?: string;
  text: string;
  createdAt: string;
  phone: string;
}

function ProductCommentItem({
  text,
  createdAt,
  phone,
  lastname,
  firstname,
}: Props) {

  return (
    <li className="p-2 pr-0 m-1 mr-0 grid grid-cols-10 lg:grid-cols-12 xl:grid-cols-15">
      <div className="p-3 w-10 mt-1 h-10 bg-blue-200 dark: dark:bg-slate-900 rounded-full col-span-1">
        <FaRegUser className=" text-black dark:text-white" />
      </div>
      <div className="lg:col-span-11 xl:col-span-14 mr-3 col-span-9 bg-blue-50 dark:bg-slate-800/80 dark:text-white text-black rounded-xl p-3">
        <div className="flex flex-row justify-between">
          <h4 className="text-lg font-bold text-left">
            {lastname && firstname ? (
              `${firstname} ${lastname}`
            ) : (
              <span dir="ltr" className="inline-block">
                {"0" + phone.slice(3, 5) + "****" + phone.slice(9)}
              </span>
            )}
          </h4>
          <p>{formatRelativeTime(createdAt)}</p>
        </div>
        <p className="text-cyan-800 dark:text-gray-300/80">{text}</p>
      </div>
    </li>
  );
}

export default ProductCommentItem;
