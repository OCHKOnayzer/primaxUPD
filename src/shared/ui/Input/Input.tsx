import React from "react";
import type { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({
  label,
  required,
  value,
  onChange,
  type,
  placeholder,
  error,
  name,
  autoFocus,
  className,
  disabled,
  size,
}) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        autoFocus={autoFocus}
        className={className}
      />
    </div>
  );
};
