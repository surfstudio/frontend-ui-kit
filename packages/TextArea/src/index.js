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
import { jsx as _jsx } from "react/jsx-runtime";
const TextArea = (_a) => {
    var { className, value, onChange, rows = 3, disabled = false, error } = _a, props = __rest(_a, ["className", "value", "onChange", "rows", "disabled", "error"]);
    return (_jsx("textarea", Object.assign({ className: `textarea ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${className !== null && className !== void 0 ? className : ''}`, value: value, onChange: onChange, rows: rows, disabled: disabled }, props)));
};
export default TextArea;
