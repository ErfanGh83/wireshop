"use client";

import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { newCategories } from "./filtersList";
import CategoryItem from "./CategoryItem";
import { useTooltip } from "@/hooks/useToolTip";

type Props = {
  category: string | null;
  setCategory: Dispatch<SetStateAction<string | null>>;
};

const Categories = ({ category, setCategory }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { setHoveredText, setTooltipPos, Tooltip } = useTooltip();

  const orderedCategories = useMemo(() => {
    if (!category) return newCategories;

    const selected = newCategories.find((c) => c.id === category);
    const rest = newCategories.filter((c) => c.id !== category);

    return selected ? [selected, ...rest] : newCategories;
  }, [category]);

  return (
    <div
      className={`w-full flex flex-col items-center justify-between text-xl 
      bg-blue-100 dark:bg-slate-600 dark:text-white rounded-lg overflow-hidden
      ${isOpen ? "min-h-16" : "h-16"}`}
    >
      <Tooltip />

      <div
        dir="rtl"
        className="w-full h-16 px-4 py-4 flex flex-row items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p
          onMouseEnter={(e) => {
            setHoveredText("دسته بندی");
            setTooltipPos({ x: e.clientX, y: e.clientY });
          }}
          onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
          onMouseLeave={() => setHoveredText(null)}
        >
          دسته بندی
        </p>

        <MdArrowDropDown
          className={`transition-transform duration-200 ${isOpen ? "" : "-rotate-90"
            }`}
        />
      </div>

      {isOpen && (
        <div className="w-full bg-gray-100 dark:bg-slate-500 p-4 space-y-3 overflow-y-auto max-h-[60vh]">
          {orderedCategories.map((cat) => (
            <CategoryItem
              key={cat.id}
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