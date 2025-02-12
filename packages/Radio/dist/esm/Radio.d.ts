import type { ReactNode } from 'react';
import React from 'react';
export type TRadioProps = {
    /** Значение радио-кнопки */
    value: string;
    /** Имя группы радио-кнопок */
    name: string;
    /** Состояние выбора */
    checked: boolean;
    /** Обработчик изменения */
    onChange: (value: string) => void;
    /** Дополнительный CSS к ласс */
    className?: string;
    /** Отображать ли иконку */
    hasIcon?: boolean;
    /** Иконка для выбранного состояния */
    checkedIcon?: ReactNode;
    /** Иконка для невыбранного состояния */
    uncheckedIcon?: ReactNode;
    /** Отображать ли рамку */
    bordered?: boolean;
    /** Заголовок */
    title?: string;
    /** Текст описания */
    text?: string;
    /** Дополнительный контент */
    extra?: ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'name' | 'onChange'>;
export declare const Radio: ({ value, name, checked, onChange, className, hasIcon, checkedIcon, uncheckedIcon, bordered, title, text, extra, disabled, required, ...restProps }: TRadioProps) => import("react/jsx-runtime").JSX.Element;
