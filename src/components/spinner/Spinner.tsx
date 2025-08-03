// components/ui/Spinner.tsx
import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 36,
  color = "text-blue-500",
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-3 border-t-transparent ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    </div>
  );
};

export default Spinner;
