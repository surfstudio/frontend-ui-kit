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
export var EFontWeight;
(function (EFontWeight) {
    EFontWeight[EFontWeight["regular"] = 400] = "regular";
    EFontWeight[EFontWeight["medium"] = 500] = "medium";
    EFontWeight[EFontWeight["semiBold"] = 600] = "semiBold";
    EFontWeight[EFontWeight["bold"] = 700] = "bold";
})(EFontWeight || (EFontWeight = {}));
export const Text = (props) => {
    const { tag = 'div', color, size = 'default', type = 'default', fontWeight = 'regular', uppercase = false, children, className } = props, rest = __rest(props, ["tag", "color", "size", "type", "fontWeight", "uppercase", "children", "className"]);
    const Tag = tag;
    return (_jsx(Tag, Object.assign({ style: {
            fontWeight: EFontWeight[fontWeight],
            color: color !== null && color !== void 0 ? color : 'inherit',
        }, className: `text ${className !== null && className !== void 0 ? className : ''} ${uppercase ? 'uppercase' : ''} ${size === 'small' ? 'small' : ''} ${type === 'caption' ? 'caption' : ''}` }, rest, { children: children })));
};
