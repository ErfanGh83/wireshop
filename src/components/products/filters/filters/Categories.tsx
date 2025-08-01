"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import {
  MdArrowDropDown,
} from "react-icons/md";
import { categories } from "./filtersList";
import CategoryItem from "./CategoryItem";

type Props = {
  category: string | null; // now stores the category ID
  setCategory: Dispatch<SetStateAction<string | null>>;
};


const Categories = ({ category, setCategory }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full flex flex-col items-center justify-between text-2xl bg-blue-100 rounded-lg overflow-hidden ${
        isOpen ? "h-fit" : "h-16"
      }`}
    >
      {/* Top bar */}
      <div
        className="w-full h-16 flex flex-row items-center justify-between px-4 cursor-pointer"
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
        <div className="w-full bg-gray-100 p-4 space-y-3 max-h-72 overflow-y-auto">
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
