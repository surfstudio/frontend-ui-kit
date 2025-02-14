import type { CSSProperties, ReactNode } from 'react';
export type ModalProps = {
    isOpen: boolean;
    children: ReactNode;
    onCancel: () => void;
    cancelText?: ReactNode;
    okText?: ReactNode;
    title?: ReactNode;
    width?: CSSProperties['width'];
    centered?: boolean;
    className?: string;
};
declare const Modal: (props: ModalProps) => import('react/jsx-runtime').JSX.Element;
export default Modal;
