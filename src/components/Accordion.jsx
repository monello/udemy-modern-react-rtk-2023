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
                <div
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && (
                    <div className="border-b p-5">{item.content}</div>
                )}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{tabs}</div>;
};

export default Accordion;
