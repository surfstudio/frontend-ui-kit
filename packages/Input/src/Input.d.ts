import type { ReactNode, InputHTMLAttributes } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    error?: string;
    inputClassName?: string;
    password?: {
        showIcon: ReactNode;
        hideIcon: ReactNode;
    };
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
