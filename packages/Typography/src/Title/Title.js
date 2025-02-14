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
const DEFAULT_LEVEL = 5;
export const Title = (props) => {
    const { children, level = DEFAULT_LEVEL, color, uppercase = true, className, fontWeight } = props, rest = __rest(props, ["children", "level", "color", "uppercase", "className", "fontWeight"]);
    const Tag = `h${level}`;
    return (_jsx(Tag, Object.assign({ style: {
            fontWeight: fontWeight ? EFontWeight[fontWeight] : '',
            color: color !== null && color !== void 0 ? color : 'inherit',
        }, className: `heading ${className !== null && className !== void 0 ? className : ''} ${uppercase ? 'uppercase' : ''}` }, rest, { children: children })));
};
