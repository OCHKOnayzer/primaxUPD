import type { CommonProps } from "@/types";

export enum InputType {
  text = "text",
  password = "password",
  email = "email",
  number = "number",
}

export interface InputProps extends CommonProps {
  label: string;
  required?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: InputType | string;
  placeholder?: string;
  error?: string;
  name?: string;
  autoFocus?: boolean;
}
