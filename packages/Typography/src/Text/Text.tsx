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

type TTextSize = 'default' | 'small';

type TTextType = 'default' | 'caption';

export interface ITextProps extends IDefaultTypographyProps, Omit<HTMLAttributes<HTMLElement>, 'color'> {
    size?: TTextSize;
    type?: TTextType;
    tag?: keyof HTMLElementTagNameMap;
}

export const Text = (props: ITextProps) => {
    const {
        tag = 'div',
        color,
        size = 'default',
        type = 'default',
        fontWeight = 'regular',
        uppercase = false,
        children,
        className,
        ...rest
    } = props;

    const Tag = tag;

    return (
        <Tag
            style={{
                fontWeight: EFontWeight[fontWeight],
                color: color ?? 'inherit',
            }}
            className={`text ${className ?? ''} ${uppercase ? 'uppercase' : ''} ${size === 'small' ? 'small' : ''} ${type === 'caption' ? 'caption' : ''}`}
            {...rest}>
            {children}
        </Tag>
    );
};
