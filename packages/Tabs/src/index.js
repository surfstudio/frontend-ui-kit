import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const Tabs = ({ tabs, className }) => {
    var _a;
    const [activeTab, setActiveTab] = useState(((_a = tabs[0]) === null || _a === void 0 ? void 0 : _a.id) || 0);
    return (_jsxs("div", { className: `tabsContainer ${className !== null && className !== void 0 ? className : ''}`, children: [_jsx("div", { className: "tabsHeader", children: tabs.map((tab) => (_jsx("button", { className: `tabButton ${activeTab === tab.id ? 'active' : ''}`, onClick: () => setActiveTab(tab.id), children: tab.label }, tab.id))) }), _jsx("div", { className: "tabsContent", children: tabs.map((tab) => (_jsx("div", { className: `tabPanel ${activeTab === tab.id ? 'active' : ''}`, children: activeTab === tab.id && tab.content }, tab.id))) })] }));
};
export default Tabs;
