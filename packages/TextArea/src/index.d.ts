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
declare const TextArea: ({
    className,
    value,
    onChange,
    rows,
    disabled,
    error,
    ...props
}: TextAreaProps) => import('react/jsx-runtime').JSX.Element;
export default TextArea;
