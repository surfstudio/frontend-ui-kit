"use strict";
'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Input = (0, react_1.forwardRef)((_a, ref) => {
    var { label, type = 'text', error, inputClassName, password } = _a, props = __rest(_a, ["label", "type", "error", "inputClassName", "password"]);
    const inputID = (0, react_1.useId)();
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const passwordType = showPassword ? 'text' : 'password';
    const passwordIcon = showPassword ? password === null || password === void 0 ? void 0 : password.showIcon : password === null || password === void 0 ? void 0 : password.hideIcon;
    const handleChangeShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: `input-wrapper ${inputClassName}}}`, children: [label && ((0, jsx_runtime_1.jsx)("label", { htmlFor: inputID, className: "input-label", children: label })), (0, jsx_runtime_1.jsxs)("div", { className: "input-inner", children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ className: "input", ref: ref, type: password ? passwordType : type }, props, { id: inputID })), password && ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: handleChangeShowPassword, children: passwordIcon }))] }), error && (0, jsx_runtime_1.jsx)("p", { className: "input-error", children: error })] }));
});
Input.displayName = 'Input';
exports.default = Input;
