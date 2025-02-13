import React, { ReactNode, useEffect, useRef, useState } from "react";
import cls from "./Select.module.scss";
import cn from "classnames";

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
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  icon,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelect = (val: string) => {
    onChange(val);
    handleClose();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!selectRef.current?.contains(event.target as Node)) {
        handleClose();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={selectRef}
      className={cn(cls.selectWrapper, { [cls.disabled]: disabled })}
    >
      <div
        className={cls.selectBox}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span>
          {options.find((opt) => opt.value === value)?.label || placeholder}
        </span>
        {icon ?? <span className={cls.arrow}>&#9662;</span>}
      </div>
      {isOpen && (
        <ul className={cls.optionsList}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={cls.option}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
