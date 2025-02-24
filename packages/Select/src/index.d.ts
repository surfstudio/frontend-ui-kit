import React, { ReactNode } from 'react';
interface Option {
    label: string;
    value: string;
}
export interface SelectProps {
    options: Option[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    icon?: ReactNode;
    className?: string;
}
declare const Select: React.FC<SelectProps>;
export default Select;
