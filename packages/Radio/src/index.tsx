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

const getIcon = (hasIcon: boolean, checked: boolean, checkedIcon?: ReactNode, uncheckedIcon?: ReactNode) => {
    if (!hasIcon) return null;

    if (checked) {
        return checkedIcon;
    }
    return uncheckedIcon;
};

export const Radio = ({
    value,
    name,
    checked = false,
    onChange,
    className,
    hasIcon = true,
    checkedIcon,
    uncheckedIcon,
    bordered,
    title,
    text,
    extra,
    disabled,
    required,
    ...restProps
}: TRadioProps) => {
    const icon = getIcon(hasIcon, checked, checkedIcon, uncheckedIcon);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="radio">
            <input
                value={value}
                type="radio"
                id={`${name}-${value}`}
                name={name}
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                required={required}
                {...restProps}
            />
            <label className="radioLabel" htmlFor={`${name}-${value}`} aria-checked={checked} role="radio">
                {icon}
                <span className="radioLabelContentContainer">
                    {title && <h5 className="radioLabelTitle">{title}</h5>}
                    {text && <p className="radioLabelText">{text}</p>}
                </span>
            </label>
            {bordered && extra && <div className="radioExtra">{extra}</div>}
        </div>
    );
};
