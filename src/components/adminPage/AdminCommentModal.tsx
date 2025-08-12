import { approveComment, rejectComment } from "@/lib/api/adminApi";
import { ERROR_MESSAGES } from "@/lib/api/constants";
import { formatRelativeTime } from "@/lib/date_formatter";
import { toast } from "react-toastify";

interface Props {
  firstname?: string;
  lastname?: string;
  phone: string;
  createdAt: string;
  content: string;
  id: string;
}


function AdminCommentModal({
  content,
  createdAt,
  firstname,
  id,
  lastname,
  phone,
}: Props) {
  const fullName =
    firstname && lastname
      ? `${firstname ?? ""} ${lastname ?? ""}`.trim()
      : "بی نام";

  const onApprove = () => {
    approveComment(id)
      .then(() => toast.success("کامنت با موفقیت قبول شد"))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.manage_comment[
            err.status as keyof typeof ERROR_MESSAGES.manage_comment
          ] ||
            err.response.error ||
            "خطایی رخ داده است"
        )
      );
  };
  const onReject = () => {
    rejectComment(id)
      .then(() => toast.success("کامنت با موفقیت رد شد"))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.manage_comment[
            err.status as keyof typeof ERROR_MESSAGES.manage_comment
          ] ||
            err.response.error ||
            "خطایی رخ داده است"
        )
      );
  };

  return (
    <div className=" p-4 mb-3">
      <div className="font-bold mb-1">کاربر: {fullName}</div>
      <div>تلفن: {"0" + phone.slice(3, 5) + "****" + phone.slice(9)}</div>
      <div className="text-sm text-gray-500 mb-2">
        {formatRelativeTime(createdAt)}
      </div>
      <div className="mb-3">{content}</div>
      <div className="flex gap-2">
        <button
          onClick={() => onApprove()}
          className="bg-green-400 hover:bg-green-500 cursor-pointer text-white rounded-xl px-4 py-1 transition-colors"
        >
          قبول
        </button>
        <button
          onClick={() => onReject()}
          className="bg-red-400 hover:bg-red-500 cursor-pointer text-white rounded-xl px-4 py-1 transition-colors"
        >
          رد
        </button>
      </div>
    </div>
  );
}

export default AdminCommentModal;
