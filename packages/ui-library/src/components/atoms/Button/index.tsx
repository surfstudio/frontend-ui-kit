import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
    buttonClassName?: string;
    containerClassName?: string;
}

export const Button = ({
    children,
    type = 'button',
    disabled = false,
    isLoading = false,
    buttonClassName = '',
    containerClassName = '',
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`button ${buttonClassName}`}
            disabled={disabled || isLoading}
            onClick={onClick}
            {...props}
        >
            <div className={`buttonContentContainer ${containerClassName}`}>{children}</div>
        </button>
    );
};

export default Button;
