import { ReactNode } from "react";
import { ButtonVariant, ButtonSize, ButtonType } from "./enums/buttonEnums";

export interface ButtonItnerface {
  children?: ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  type: ButtonType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}
