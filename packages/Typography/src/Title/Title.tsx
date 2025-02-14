import { CSSProperties, HTMLAttributes } from 'react';

export enum EFontWeight {
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
const DEFAULT_LEVEL = 5;

export const Title = (props: ITitleProps) => {
    const { children, level = DEFAULT_LEVEL, color, uppercase = true, className, fontWeight, ...rest } = props;
    const Tag: keyof HTMLElementTagNameMap = `h${level}`;

    return (
        <Tag
            style={{
                fontWeight: fontWeight ? EFontWeight[fontWeight] : '',
                color: color ?? 'inherit',
            }}
            className={`heading ${className ?? ''} ${uppercase ? 'uppercase' : ''}`}
            {...rest}>
            {children}
        </Tag>
    );
};
