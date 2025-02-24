import { ChangeEvent } from 'react';

type TextAreaProps = {
    className?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
    error?: boolean;
};

const TextArea = ({ className, value, onChange, rows = 3, disabled = false, error, ...props }: TextAreaProps) => (
    <textarea
        className={`textarea ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${className ?? ''}`}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        {...props}
    />
);

export default TextArea;
