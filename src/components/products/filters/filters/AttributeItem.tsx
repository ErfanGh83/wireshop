/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const AttributeItem = ({
    attribute,
    categoryId,
    setSelectedCategory,
    setSelectedValue,
    selectedValue,
}: {
    attribute: any;
    categoryId: string;
    setSelectedCategory: Dispatch<SetStateAction<string | null>>;
    selectedCategory: string | null;
    setSelectedValue: Dispatch<SetStateAction<string | null>>;
    selectedValue: string | null;
}) => {
    const [open, setOpen] = useState(false);
    const [hoveredText, setHoveredText] = useState<string | null>(null);
    const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

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
        setSelectedValue(val);
    };

    return (
        <div className="my-2" dir="rtl">
            {/* Tooltip */}
            {hoveredText && tooltipPos && (
                <div
                    className="
            fixed z-50 px-2 py-1 text-sm bg-black text-white rounded 
            w-fit whitespace-nowrap pointer-events-none text-right
        "
                    style={{
                        top: tooltipPos.y + 12,
                        right: `calc(100vw - ${tooltipPos.x - 12}px)` // ➜ Tooltip on LEFT side
                    }}
                    dir="rtl"
                >
                    {hoveredText}
                </div>
            )}


            <div
                className="flex justify-between items-center cursor-pointer p-2 bg-gray-100 dark:bg-slate-500 rounded"
                onClick={(e) => { e.stopPropagation(); setOpen((p) => !p); }}
            >
                <span
                    className="text-md truncate max-w-[60vw] sm:max-w-[40vw]"
                    onMouseEnter={(e) => {
                        setHoveredText(attribute.name);
                        setTooltipPos({ x: e.clientX, y: e.clientY });
                    }}
                    onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    {attribute.name}
                </span>
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
                            <span
                                className="truncate max-w-[52vw] sm:max-w-[36vw] text-sm"
                                onMouseEnter={(e) => {
                                    setHoveredText(val);
                                    setTooltipPos({ x: e.clientX, y: e.clientY });
                                }}
                                onMouseMove={(e) => setTooltipPos({ x: e.clientX, y: e.clientY })}
                                onMouseLeave={() => setHoveredText(null)}
                            >
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
