import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

export const Button = ({
	children,
	type = 'button',
	disabled = false,
	isLoading = false,
	buttonClassName = '',
	containerClassName = '',
	slots = {},
	onClick,
	...props
}: ButtonProps) => {
	const {
		prefix: Prefix,
		content: Content,
		suffix: Suffix,
		loader: Loader
	} = slots;

	return (
		<button
			type={type}
			className={`Button ${buttonClassName}`}
			disabled={disabled || isLoading}
			onClick={onClick}
			{...props}
		>
			<div className={`ButtonContainer ${containerClassName}`}>
				{isLoading ? (
					<>{Loader}</>
				) : (
					<>
						{Prefix}
						{Content}
						{Suffix}
					</>
				)}

			</div>
		</button>
	);
};