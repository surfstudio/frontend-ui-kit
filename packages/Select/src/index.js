"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Select = ({ options, value, onChange, placeholder, icon, disabled = false, className, }) => {
    var _a;
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const selectRef = (0, react_1.useRef)(null);
    const handleClose = () => {
        setIsOpen(false);
    };
    const handleSelect = (val) => {
        onChange(val);
        handleClose();
    };
    (0, react_1.useEffect)(() => {
        function handleClickOutside(event) {
            var _a;
            if (!((_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                handleClose();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: selectRef, className: `selectWrapper ${disabled ? 'disabled' : ''} ${className !== null && className !== void 0 ? className : ''}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'selectBox', onClick: () => !disabled && setIsOpen(!isOpen), children: [(0, jsx_runtime_1.jsx)("span", { children: ((_a = options.find((opt) => opt.value === value)) === null || _a === void 0 ? void 0 : _a.label) || placeholder }), icon !== null && icon !== void 0 ? icon : (0, jsx_runtime_1.jsx)("span", { className: 'arrow', children: "\u25BE" })] }), isOpen && ((0, jsx_runtime_1.jsx)("ul", { className: 'optionsList', children: options.map((opt) => ((0, jsx_runtime_1.jsx)("li", { className: 'option', onClick: () => handleSelect(opt.value), children: opt.label }, opt.value))) }))] }));
};
exports.default = Select;
