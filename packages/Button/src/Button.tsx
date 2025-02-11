import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
}

export const Button = ({
	children,
	className = '',
	type = 'button',
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={className}
			{...props}
		>
			{children}
		</button>
	);
};