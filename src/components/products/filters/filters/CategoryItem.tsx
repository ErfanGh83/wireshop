/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from "react";
import {
  MdArrowDropDown,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";
import AttributeItem from "./AttributeItem";

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

  const isSelectedCategory = (() => {
    try {
      // If category is a JSON payload, compare categoryId field
      if (!selectedCategory) return false;
      const parsed = JSON.parse(selectedCategory);
      return parsed?.categoryId === node.id;
    } catch {
      return selectedCategory === node.id;
    }
  })();

  const toggleOpen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOpen((p) => !p);
  };

  // Click on radio toggles selecting category (keeps existing behavior)
  const handleSelectCategory = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCategory((prev) => (prev === node.id ? null : node.id));
  };

  return (
    <div className="w-full" dir="rtl">
      <div
        className="flex justify-between items-center cursor-pointer bg-gray-200 dark:bg-slate-600 p-2 rounded my-1"
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-3 w-5/6">

          {/* FIXED SIZE ICON BOX */}
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            {isSelectedCategory ? (
              <MdRadioButtonChecked
                className="text-blue-500 text-2xl"
                onClick={handleSelectCategory}
              />
            ) : (
              <MdRadioButtonUnchecked
                className="text-gray-500 text-2xl"
                onClick={handleSelectCategory}
              />
            )}
          </div>

          {/* Text with truncate */}
          <span className="text-base truncate text-black dark:text-white">
            {node.name}
          </span>
        </div>

        <MdArrowDropDown
          className={`transition-transform duration-200 ${open ? "" : "-rotate-90"}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleOpen(e);
          }}
        />
      </div>

      {open && (
        <div className="ml-4 border-r pr-4 border-gray-300 dark:border-gray-500">
          {Array.isArray(node.attributes) && node.attributes.map((attr: any) => (
            <AttributeItem
              key={attr.id}
              attribute={attr}
              categoryId={node.id}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
