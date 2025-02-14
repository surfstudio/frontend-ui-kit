import React, { useState } from 'react';

type Tab = {
    id: number;
    label: string;
    content: React.ReactNode;
};

type TabsProps = {
    tabs: Tab[];
    className?: string;
};

const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
    const [activeTab, setActiveTab] = useState<number>(tabs[0]?.id || 0);

    return (
        <div className={`tabsContainer ${className ?? ''}`}>
            <div className="tabsHeader">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tabButton ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}>
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabsContent">
                {tabs.map((tab) => (
                    <div key={tab.id} className={`tabPanel ${activeTab === tab.id ? 'active' : ''}`}>
                        {activeTab === tab.id && tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
