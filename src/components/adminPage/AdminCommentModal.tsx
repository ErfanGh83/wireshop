import { approveComment, rejectComment } from "@/lib/api/adminApi";
import { ERROR_MESSAGES } from "@/lib/api/constants";
import { toast } from "react-toastify";

interface Props {
  firstname?: string;
  lastname?: string;
  phone: string;
  createdAt: string;
  content: string;
  id: string;
}

const formatTimeAgo = (dateString: string) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now.getTime() - past.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds} ثانیه پیش`;
  if (minutes < 60) return `${minutes} دقیقه پیش`;
  if (hours < 24) return `${hours} ساعت پیش`;
  if (days < 7) return `${days} روز پیش`;
  if (weeks < 4) return `${weeks} هفته پیش`;
  if (months < 12) return `${months} ماه پیش`;
  return `${years} سال پیش`;
};

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
      <div>تلفن: {"0" + phone.slice(3)}</div>
      <div className="text-sm text-gray-500 mb-2">
        {formatTimeAgo(createdAt)}
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
