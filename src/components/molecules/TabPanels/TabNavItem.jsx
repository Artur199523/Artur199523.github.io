import React from "react";

const TabNavItem = ({id, children, activeTab, setActiveTab}) => {
    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <div onClick={handleClick} className={activeTab === id ? "active" : ""}>
            {children}
        </div>
    );
}
export default TabNavItem