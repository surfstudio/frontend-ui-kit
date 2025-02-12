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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Button = (_a) => {
    var { children, type = 'button', disabled = false, isLoading = false, buttonClassName = '', containerClassName = '', slots = {}, onClick } = _a, props = __rest(_a, ["children", "type", "disabled", "isLoading", "buttonClassName", "containerClassName", "slots", "onClick"]);
    const { prefix: Prefix, content: Content, suffix: Suffix, loader: Loader } = slots;
    return (_jsx("button", Object.assign({ type: type, className: `Button ${buttonClassName}`, disabled: disabled || isLoading, onClick: onClick }, props, { children: _jsx("div", { className: `ButtonContainer ${containerClassName}`, children: isLoading ? (_jsx(_Fragment, { children: Loader })) : (_jsxs(_Fragment, { children: [Prefix, Content, Suffix] })) }) })));
};
