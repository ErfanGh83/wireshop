/* eslint-disable @typescript-eslint/no-explicit-any */

import { Dispatch, SetStateAction, useState } from "react";
import { MdArrowDropDown, MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const CategoryItem = ({
  node,
  selectedCategory,
  setSelectedCategory,
}: {
  node: any;
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}) => {
  const [open, setOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isLeaf = !hasChildren;

  const handleClick = () => {
    if (isLeaf) {
      // Toggle selection
      setSelectedCategory((prev) => (prev === node.id ? null : node.id));
    } else {
      setOpen((prev) => !prev);
    }
  };

  return (
    <div>
      <div
        className="flex flex-row-reverse justify-between items-center gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-slate-600 p-2 rounded"
        onClick={handleClick}
      >
        {isLeaf ? (
          selectedCategory === node.id ? (
            <MdRadioButtonChecked className="text-blue-500 dark:text-blue-300 text-2xl" />
          ) : (
            <MdRadioButtonUnchecked className="text-gray-500 dark:text-gray-200 text-2xl" />
          )
        ) : (
          <MdArrowDropDown
            className={`transition-transform duration-200 ${
              open ? "" : "-rotate-90"
            }`}
          />
        )}
        <span className="text-lg">{node.fa}</span>
      </div>

      {hasChildren && open && (
        <div className="pl-6 border-l border-gray-300">
          {node.children.map((child: any) => (
            <CategoryItem
              key={child.id || child.en}
              node={child}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem