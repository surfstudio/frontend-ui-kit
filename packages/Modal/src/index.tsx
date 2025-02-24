import type { CSSProperties, KeyboardEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

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

const Modal = (props: ModalProps) => {
    const { isOpen, onCancel, children, title, width = 520, centered = false, className } = props;

    const dialogRef = useRef<HTMLDialogElement>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (['Escape'].includes(e.key)) {
            onCancel();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            dialogRef?.current?.showModal();

            modalRef?.current?.focus();
        } else {
            document.body.style.overflow = '';
            dialogRef?.current?.close();
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <dialog
            ref={dialogRef}
            className={`modalOverlay ${!isOpen ? 'notOpen' : ''} ${className ?? ''}`}
            onClick={onCancel}>
            <div
                ref={modalRef}
                className={`modalLayout ${centered ? 'centered' : ''}}`}
                style={{ width }}
                role="button"
                onKeyDown={handleKeyDown}
                tabIndex={0}
                onClick={(e) => e.stopPropagation()}>
                <div className={'modalContent'}>
                    <header className={'modalHeader'}>{title}</header>
                    <div className={'container'}>{children}</div>
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
