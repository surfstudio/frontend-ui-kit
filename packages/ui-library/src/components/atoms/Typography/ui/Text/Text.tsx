import cn from "classnames";
import type { HTMLAttributes } from "react";
import { EFontWeight } from "../../model/enums";
import type { IDefaultTypographyProps } from "../../model/types";

import cls from "./Text.module.scss";

type TTextSize = "default" | "small";

type TTextType = "default" | "caption";

export interface ITextProps
  extends IDefaultTypographyProps,
    Omit<HTMLAttributes<HTMLElement>, "color"> {
  size?: TTextSize;
  type?: TTextType;
  tag?: keyof HTMLElementTagNameMap;
  lineThrough?: boolean;
}

export const Text = (props: ITextProps) => {
  const {
    tag = "div",
    color,
    size = "default",
    type = "default",
    fontWeight = "regular",
    uppercase = false,
    lineThrough,
    children,
    className,
    ...rest
  } = props;

  const Tag = tag;

  return (
    <Tag
      style={{
        fontWeight: EFontWeight[fontWeight],
        color: color ?? "inherit",
      }}
      className={cn(
        className,
        cls.text,
        { [cls.uppercase]: uppercase },
        { [cls.small]: size === "small" },
        { [cls.caption]: type === "caption" },
        { [cls.lineThrough]: lineThrough },
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};
