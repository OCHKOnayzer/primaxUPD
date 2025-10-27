import React from "react";
import clsx from "clsx";

import { ButtonProps } from "@/types/buttonTypes";

const variantButtonStyles = {
  default: "bg-indigo-600 text-white hover:bg-indigo-700",
  bordered:
    "border-[2px] border-[rgba(255,255,255,0.329)] border rounded-[10px] text-gray-900 hover:border-[rgba(255,255,255,0.679)]",
};

const sizesButtonsStyles = {
  sm: "px-1 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  type,
  onClick,
  disabled,
  className
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "transition font-medium disabled:opacity-50 disabled:cursor-not-allowed",
        variantButtonStyles[variant],
        sizesButtonsStyles[size],
        className
      )}
    >
      {children}
    </button>
  );
};
