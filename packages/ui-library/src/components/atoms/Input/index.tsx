"use client";

import type { ReactNode, InputHTMLAttributes } from "react";
import { useId, forwardRef, useState } from "react";
import cls from "./Input.module.scss";
import cn from "classnames";

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

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, type = "text", error, inputClassName, password, ...props },
    ref,
  ) => {
    const inputID = useId();
    const [showPassword, setShowPassword] = useState(false);

    const passwordType = showPassword ? "text" : "password";

    const passwordIcon = showPassword ? password?.showIcon : password?.hideIcon;

    const handleChangeShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className={cn(cls.inputWrapper, inputClassName)}>
        {label && (
          <label htmlFor={inputID} className={cls.inputLabel}>
            {label}
          </label>
        )}
        <div className={cls.inputInner}>
          <input
            className={cn(cls.input, { [cls.error]: error })}
            ref={ref}
            type={password ? passwordType : type}
            {...props}
            id={inputID}
          />
          {password && (
            <button type="button" onClick={handleChangeShowPassword}>
              {passwordIcon}
            </button>
          )}
        </div>
        {error && <p className={cls.inputError}>{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
