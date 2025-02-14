import { CSSProperties, HTMLAttributes } from 'react';
export declare enum EFontWeight {
    regular = 400,
    medium = 500,
    semiBold = 600,
    bold = 700,
}
export type TFontWeight = 'regular' | 'medium' | 'semiBold' | 'bold';
export interface IDefaultTypographyProps {
    uppercase?: boolean;
    fontWeight?: TFontWeight;
    color?: CSSProperties['color'];
}
export type TLevel = 1 | 2 | 3 | 4 | 5;
export interface ITitleProps extends IDefaultTypographyProps, Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> {
    level?: TLevel;
}
export declare const Title: (props: ITitleProps) => import('react/jsx-runtime').JSX.Element;
