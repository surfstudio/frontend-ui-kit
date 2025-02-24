import React, { ReactNode, useEffect, useRef, useState } from 'react';

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

const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    placeholder,
    icon,
    disabled = false,
    className,
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

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div ref={selectRef} className={`selectWrapper ${disabled ? 'disabled' : ''} ${className ?? ''}`}>
            <div className={'selectBox'} onClick={() => !disabled && setIsOpen(!isOpen)}>
                <span>{options.find((opt) => opt.value === value)?.label || placeholder}</span>
                {icon ?? <span className={'arrow'}>&#9662;</span>}
            </div>
            {isOpen && (
                <ul className={'optionsList'}>
                    {options.map((opt) => (
                        <li key={opt.value} className={'option'} onClick={() => handleSelect(opt.value)}>
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
