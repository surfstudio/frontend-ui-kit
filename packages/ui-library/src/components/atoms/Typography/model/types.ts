import { CSSProperties } from "react";

export type TFontWeight = "regular" | "medium" | "semiBold" | "bold";

export interface IDefaultTypographyProps {
  uppercase?: boolean;
  fontWeight?: TFontWeight;
  color?: CSSProperties["color"];
}
