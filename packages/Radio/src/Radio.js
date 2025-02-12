"use strict";
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
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const getIcon = (hasIcon, checked, checkedIcon, uncheckedIcon) => {
    if (!hasIcon)
        return null;
    if (checked) {
        return checkedIcon;
    }
    return uncheckedIcon;
};
const Radio = (_a) => {
    var { value, name, checked = false, onChange, className, hasIcon = true, checkedIcon, uncheckedIcon, bordered, title, text, extra, disabled, required } = _a, restProps = __rest(_a, ["value", "name", "checked", "onChange", "className", "hasIcon", "checkedIcon", "uncheckedIcon", "bordered", "title", "text", "extra", "disabled", "required"]);
    const icon = getIcon(hasIcon, checked, checkedIcon, uncheckedIcon);
    const handleChange = (e) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "Radio", children: [(0, jsx_runtime_1.jsx)("input", Object.assign({ value: value, type: "radio", id: `${name}-${value}`, name: name, checked: checked, onChange: handleChange, disabled: disabled, required: required }, restProps)), (0, jsx_runtime_1.jsxs)("label", { className: 'RadioLabel', htmlFor: `${name}-${value}`, "aria-checked": checked, role: "radio", children: [icon, (0, jsx_runtime_1.jsxs)("span", { className: "RadioLabelContentContainer", children: [title && (0, jsx_runtime_1.jsx)("h5", { className: "RadioLabelTitle", children: title }), text && (0, jsx_runtime_1.jsx)("p", { className: "RadioLabelText", children: text })] })] }), bordered && extra && (0, jsx_runtime_1.jsx)("div", { className: "RadioExtra", children: extra })] }));
};
exports.Radio = Radio;
