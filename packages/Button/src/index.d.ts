import { ButtonHTMLAttributes, ReactNode } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
    buttonClassName?: string;
    containerClassName?: string;
    slots?: {
        prefix?: ReactNode;
        content?: ReactNode;
        suffix?: ReactNode;
        loader?: ReactNode;
    };
}
declare const Button: ({
    children,
    type,
    disabled,
    isLoading,
    buttonClassName,
    containerClassName,
    slots,
    onClick,
    ...props
}: ButtonProps) => import('react/jsx-runtime').JSX.Element;
export default Button;
