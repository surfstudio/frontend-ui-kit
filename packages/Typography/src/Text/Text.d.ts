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
type TTextSize = 'default' | 'small';
type TTextType = 'default' | 'caption';
export interface ITextProps extends IDefaultTypographyProps, Omit<HTMLAttributes<HTMLElement>, 'color'> {
    size?: TTextSize;
    type?: TTextType;
    tag?: keyof HTMLElementTagNameMap;
}
export declare const Text: (props: ITextProps) => import('react/jsx-runtime').JSX.Element;
export {};
