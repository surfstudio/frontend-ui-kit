import { InputHTMLAttributes, ReactNode } from "react";

export type TCheckboxProps = {
  bordered?: boolean;
  disabled?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  color?: string;
  className?: string;
  children: ReactNode;
  onChange?: (checked: boolean) => void;
  checkedIcon?: ReactNode;
  uncheckedIcon?: ReactNode;
  indeterminateIcon?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange">;

export const Checkbox = ({
  bordered = false,
  disabled = false,
  checked = false,
  indeterminate = false,
  color,
  className,
  children,
  onChange,
  checkedIcon,
  uncheckedIcon,
  indeterminateIcon,
  ...props
}: TCheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const getIcon = () => {
    if (indeterminate) return indeterminateIcon;
    if (checked) return checkedIcon;
    return uncheckedIcon;
  };

  return (
    <label className={`checkboxContainer ${className}`}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <span aria-hidden="true">{getIcon()}</span>
      {bordered && color && <div style={{ backgroundColor: color }} />}
      <span className="checkboxText">{children}</span>
    </label>
  );
};
