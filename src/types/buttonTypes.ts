import { ReactNode } from "react";
import { ButtonVariant, ButtonSize, ButtonType } from "./enums/buttonEnums";

export interface ButtonProps {
  children?: ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  type: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
