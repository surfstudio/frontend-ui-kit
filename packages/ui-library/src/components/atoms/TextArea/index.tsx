import { ChangeEvent } from "react";
import cn from "classnames";
import cls from "./TextArea.module.scss";

type TextAreaProps = {
  className?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  error?: boolean;
};

const TextArea = ({
  className,
  value,
  onChange,
  rows = 3,
  disabled = false,
  error,
  ...props
}: TextAreaProps) => (
  <textarea
    className={cn(
      cls.textarea,
      { [cls.error]: error, [cls.disabled]: disabled },
      className,
    )}
    value={value}
    onChange={onChange}
    rows={rows}
    disabled={disabled}
    {...props}
  />
);

export default TextArea;
