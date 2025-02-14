import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
const Modal = (props) => {
    const { isOpen, onCancel, children, title, width = 520, centered = false, className } = props;
    const dialogRef = useRef(null);
    const modalRef = useRef(null);
    const handleKeyDown = (e) => {
        if (['Escape'].includes(e.key)) {
            onCancel();
        }
    };
    useEffect(() => {
        var _a, _b, _c;
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            (_a = dialogRef === null || dialogRef === void 0 ? void 0 : dialogRef.current) === null || _a === void 0 ? void 0 : _a.showModal();
            (_b = modalRef === null || modalRef === void 0 ? void 0 : modalRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else {
            document.body.style.overflow = '';
            (_c = dialogRef === null || dialogRef === void 0 ? void 0 : dialogRef.current) === null || _c === void 0 ? void 0 : _c.close();
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    return (_jsx("dialog", { ref: dialogRef, className: `modalOverlay ${!isOpen ? 'notOpen' : ''} ${className !== null && className !== void 0 ? className : ''}`, onClick: onCancel, children: _jsx("div", { ref: modalRef, className: `modalLayout ${centered ? 'centered' : ''}}`, style: { width }, role: "button", onKeyDown: handleKeyDown, tabIndex: 0, onClick: (e) => e.stopPropagation(), children: _jsxs("div", { className: 'modalContent', children: [_jsx("header", { className: 'modalHeader', children: title }), _jsx("div", { className: 'container', children: children })] }) }) }));
};
export default Modal;
