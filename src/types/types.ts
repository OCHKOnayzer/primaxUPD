export enum CommonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export interface CommonProps {
  size: CommonSize;
  className?: string;
  disabled?: boolean;
}
