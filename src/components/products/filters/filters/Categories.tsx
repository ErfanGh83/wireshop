"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { categories } from "./filtersList";
import CategoryItem from "./CategoryItem";

type Props = {
  category: string | null;
  setCategory: Dispatch<SetStateAction<string | null>>;
};

const Categories = ({ category, setCategory }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 dark:bg-slate-600 dark:text-white rounded-lg overflow-hidden ${
      isOpen ? "min-h-16" : "h-16"
    }`}>
      {/* Top bar */}
      <div
        className="w-full h-16 px-4 py-4 flex flex-row items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>دسته بندی</p>
        <MdArrowDropDown
          className={`transition-transform duration-200 ${
            isOpen ? "" : "-rotate-90"
          }`}
        />
      </div>

      {/* Dropdown body */}
      {isOpen && (
        <div className="w-full bg-gray-100 dark:bg-slate-500 p-4 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
          {categories.map((cat) => (
            <CategoryItem
              key={cat.id || cat.en}
              node={cat}
              selectedCategory={category}
              setSelectedCategory={setCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;