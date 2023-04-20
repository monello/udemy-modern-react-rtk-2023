import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedTab, setExpandedTab] = useState(0);

    const handleClick = (targetTabIndex) => {
        setExpandedTab(targetTabIndex);
    };

    const tabs = items.map((item, index) => {
        const isExpanded = index === expandedTab;
        const icon = (
            <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        );
        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}>
                    {icon}
                    {item.label}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{tabs}</div>;
};

export default Accordion;
