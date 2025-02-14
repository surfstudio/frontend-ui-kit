import React from 'react';
type Tab = {
    id: number;
    label: string;
    content: React.ReactNode;
};
type TabsProps = {
    tabs: Tab[];
    className?: string;
};
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
