/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const AttributeItem = ({
    attribute,
    categoryId,
    setSelectedCategory,
    selectedCategory,
}: {
    attribute: any;
    categoryId: string;
    setSelectedCategory: Dispatch<SetStateAction<string | null>>;
    selectedCategory: string | null;
}) => {
    const [open, setOpen] = useState(false);

    // highlight selected value if selectedCategory holds JSON
    const selectedValue = (() => {
        try {
            if (!selectedCategory) return null;
            const parsed = JSON.parse(selectedCategory);
            if (parsed?.categoryId === categoryId && parsed?.attribute === attribute.name) {
                return parsed.value;
            }
            return null;
        } catch {
            return null;
        }
    })();

    const onValueClick = (val: string, e: React.MouseEvent) => {
        e.stopPropagation();
        // set category state to a JSON string so parent can parse:
        // { categoryId, attribute, value }
        setSelectedCategory(JSON.stringify({
            categoryId,
            attribute: attribute.name,
            attributeId: attribute.id,
            value: val
        }));
    };

    return (
        <div className="my-2" dir="rtl">
            <div
                className="flex justify-between items-center cursor-pointer p-2 bg-gray-100 dark:bg-slate-500 rounded"
                onClick={(e) => { e.stopPropagation(); setOpen((p) => !p); }}
            >
                <span className="text-md truncate max-w-[60vw] sm:max-w-[40vw]">{attribute.name}</span>
                <MdArrowDropDown className={`transition-transform duration-200 ${open ? "" : "-rotate-90"}`} />
            </div>

            {open && (
                <div className="mr-4 mt-2 space-y-1">
                    {Array.isArray(attribute.values) && attribute.values.map((val: string, idx: number) => (
                        <div
                            key={idx}
                            onClick={(e) => onValueClick(val, e)}
                            className={`
    p-2 cursor-pointer rounded flex items-center gap-3 transition
    hover:bg-gray-200 dark:hover:bg-slate-600
  `}
                        >
                            {/* Custom Radio Button */}
                            <div
                                className={`
      w-4 h-4 flex-shrink-0 rounded-full border flex items-center justify-center
      ${selectedValue === val
                                        ? "border-blue-600"
                                        : "border-gray-400 dark:border-slate-400"}
    `}
                            >
                                {selectedValue === val && (
                                    <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                                )}
                            </div>

                            {/* Text */}
                            <span className="truncate max-w-[52vw] sm:max-w-[36vw] text-sm">
                                {val}
                            </span>
                        </div>


                    ))}
                </div>
            )}
        </div>
    );
};

export default AttributeItem;
