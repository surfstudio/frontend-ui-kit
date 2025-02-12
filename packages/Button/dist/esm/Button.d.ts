import { ButtonHTMLAttributes, ReactNode } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
    buttonClassName?: string;
    containerClassName?: string;
}
export declare const Button: ({ children, type, disabled, isLoading, buttonClassName, containerClassName, onClick, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
