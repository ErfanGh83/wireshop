"use client";

import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "searchHistory";

type Props = {
  onSelect?: (value: string) => void; // Callback when user clicks a history item
};

const SearchHistoryContainer = ({ onSelect }: Props) => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
      if (Array.isArray(saved)) {
        setHistory(saved);
      }
    } catch {
      setHistory([]);
    }
  }, []);

  if (history.length === 0) return null; // Don't render if no history

  return (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-700 shadow-lg rounded-sm overflow-hidden z-41 border border-gray-200 dark:border-slate-600">
      {history.map((item, index) => (
        <button
          key={index}
          className="w-full flex items-start text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-600 transition"
          onClick={() => onSelect?.(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SearchHistoryContainer;
