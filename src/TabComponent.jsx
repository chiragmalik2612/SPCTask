import { useState } from "react";
import "./TabComponent.css";

const TabComponent = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={activeTab === index ? "btn-active" : "btn"}
                        disabled={activeTab === index}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="view">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default TabComponent;
