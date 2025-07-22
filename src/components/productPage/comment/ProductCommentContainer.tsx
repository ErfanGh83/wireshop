import React from "react";
import { productComments } from "../../../../public/api/examples";
import ProductCommentItem from "./ProductCommentItem";

function ProductCommentContainer() {
  return (
    <>
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-black mx-2" />
        <p className="px-4 text-center whitespace-nowrap text-black dark:text-gray-100">
          نمایش نظرات (1)
        </p>
        <div className="flex-grow border-t border-black mx-2" />
      </div>
      <ul className="mt-2">
        {productComments.map((item) => (
          <ProductCommentItem
            key={item.id}
            text={item.text}
            userName={item.userName}
          />
        ))}
      </ul>
    </>
  );
}

export default ProductCommentContainer;
