"use client";

import { useState } from "react";

export const useTooltip = () => {
    const [hoveredText, setHoveredText] = useState<string | null>(null);
    const [tooltipPos, setTooltipPos] =
        useState<{ x: number; y: number } | null>(null);

    const Tooltip = () =>
        hoveredText && tooltipPos ? (
            <div
                className="
                    fixed z-50 px-2 py-1 text-sm bg-black text-white rounded 
                    w-fit whitespace-nowrap pointer-events-none text-right
                "
                style={{
                    top: tooltipPos.y + 12,
                    right: `calc(100vw - ${tooltipPos.x - 12}px)`
                }}
                dir="rtl"
            >
                {hoveredText}
            </div>
        ) : null;

    return {
        hoveredText,
        setHoveredText,
        tooltipPos,
        setTooltipPos,
        Tooltip,
    };
};
