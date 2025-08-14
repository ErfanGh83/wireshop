import React, { useEffect, useState } from "react";
import ProductCommentItem from "./ProductCommentItem";
import { getProductComment } from "@/lib/api/productApi";
import { toast } from "react-toastify";
import { ERROR_MESSAGES } from "@/lib/api/constants";
import Spinner from "@/components/spinner/Spinner";
import { CommentResponse } from "@/types/comment";

function ProductCommentContainer({ id }: { id: string }) {
  const [comments, setComments] = useState<CommentResponse | null>(null);

  useEffect(() => {
    getProductComment(id)
      .then((res) => setComments(res))
      .catch((err) =>
        toast.error(
          ERROR_MESSAGES.comment[
            err.status as keyof typeof ERROR_MESSAGES.comment
          ]
        )
      );
  }, [id]);

  if (comments === null) return <Spinner />;

  console.log("comments", comments);

  return (
    <>
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-black mx-2" />
        <p className="px-4 text-center whitespace-nowrap text-black dark:text-gray-100">
          نظرات ({comments.length})
        </p>
        <div className="flex-grow border-t border-black mx-2" />
      </div>
      {comments.length > 0 ? (
        <ul className="mt-2">
          {comments.map((item) => (
            <ProductCommentItem
              key={item.content + item.user}
              text={item.content}
              firstname={item.user.firstname || ""}
              createdAt={item.createdAt}
              phone={item.user.phone}
              lastname={item.user.lastname || ""}
            />
          ))}
        </ul>
      ) : (
        <p className="text-black/60 dark:text-white/60 text-center">
          کامنتی یافت نشد.
        </p>
      )}
    </>
  );
}

export default ProductCommentContainer;
