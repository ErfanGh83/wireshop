"use client";

import { getAllComment } from "@/lib/api/adminApi";
import AdminTable from "./AdminTable";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CommentResponse } from "@/types/comment";
import AdminCommentModal from "./AdminCommentModal";
import { useRouter } from "next/navigation";
import { formatRelativeTime } from "@/lib/date_formatter";

function AdminCommentContainer() {
  const [rowData, setRowData] = useState<CommentResponse | null>();
  const router = useRouter();

  useEffect(() => {
    getAllComment()
      .then((res) => {
        setRowData(res);
        // console.log(res);
      })
      .catch((err) =>
        toast.error(err.response?.message || err.message || "خطایی رخ داد")
      );
  }, []);

  if (!rowData) {
    return (
      <div className="text-center py-10 text-gray-500">
        در حال بارگذاری محصولات...
      </div>
    );
  }

  const tableData = rowData.map((comment) => [
    comment.user.firstname && comment.user.lastname
      ? `${comment.user.firstname ?? ""} ${comment.user.lastname ?? ""}`.trim()
      : comment.user.phone.slice(9) +
        "****" +
        "0" +
        comment.user.phone.slice(3, 5),
    <p
      onClick={() => router.push(`/product?id=${comment.product.id}`)}
      key={comment.id}
      className="cursor-pointer hover:underline"
    >
      {comment.product.name}
    </p>,
    formatRelativeTime(comment.createdAt),
    comment.content,
  ]);

  const tableModal = rowData.map((comment) => (
    <AdminCommentModal
      key={comment.id}
      id={comment.id}
      content={comment.content}
      createdAt={comment.createdAt}
      firstname={comment.user.firstname || ""}
      lastname={comment.user.lastname || ""}
      phone={comment.user.phone}
    />
  ));

  return (
    <AdminTable
      tableModal={tableModal}
      tableData={tableData}
      tableHead={["کاربر", "محصول", "تاریخ ایجاد", "پیام", "جزئیات"]}
      tableStyle={{
        head: "text-blue-700 text-right",
        body: "text-blue-900 dark:text-blue-200 truncate",
      }}
    />
  );
}

export default AdminCommentContainer;
