/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import {
  MdArrowDropDown,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";
import { categories } from "./filtersList";

type Props = {
  category: string | null; // now stores the category ID
  setCategory: Dispatch<SetStateAction<string | null>>;
};

// Recursive dropdown item
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
        className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded"
        onClick={handleClick}
      >
        {isLeaf ? (
          selectedCategory === node.id ? (
            <MdRadioButtonChecked className="text-blue-500 text-2xl" />
          ) : (
            <MdRadioButtonUnchecked className="text-gray-500 text-2xl" />
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
        <div className="w-full bg-gray-100 p-4 space-y-3 max-h-64 overflow-y-auto">
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
