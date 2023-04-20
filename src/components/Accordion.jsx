import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedTab, setExpandedTab] = useState(-1);

    const handleClick = (targetTabIndex) => {
        // When you are depended on the previous value of state to update the state
        // It is safest to use this functional approach inside the setNAMEOFFUNCTION() version of updating the state
        // When you add a function, you automatically get the most updated value of the state (Guaranteed to be the updated state)
        // instead of potentially a stale version
        // Now we use this prevIndex (guaranteed updated value) inside the function to do our comparions
        // then return the final value from the function
        setExpandedTab((prevIndex) => {
            return prevIndex === targetTabIndex ? -1 : targetTabIndex;
        });
    };

    const tabs = items.map((item, index) => {
        const isExpanded = index === expandedTab;
        const icon = (
            <span className="text-2xl">
                {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
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
