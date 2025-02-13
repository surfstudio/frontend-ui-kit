import cn from "classnames";
import type { HTMLAttributes } from "react";
import { EFontWeight } from "../../model/enums.ts";
import type { IDefaultTypographyProps } from "../../model/types.ts";

import cls from "./Title.module.scss";

export type TLevel = 1 | 2 | 3 | 4 | 5;

export interface ITitleProps
  extends IDefaultTypographyProps,
    Omit<HTMLAttributes<HTMLHeadingElement>, "color"> {
  level?: TLevel;
}
const DEFAULT_LEVEL = 5;

export const Title = (props: ITitleProps) => {
  const {
    children,
    level = DEFAULT_LEVEL,
    color,
    uppercase = true,
    className,
    fontWeight,
    ...rest
  } = props;
  const Tag: keyof HTMLElementTagNameMap = `h${level}`;

  return (
    <Tag
      style={{
        fontWeight: fontWeight ? EFontWeight[fontWeight] : "",
        color: color ?? "inherit",
      }}
      className={cn(className, cls.heading, { [cls.uppercase]: uppercase })}
      {...rest}
    >
      {children}
    </Tag>
  );
};
