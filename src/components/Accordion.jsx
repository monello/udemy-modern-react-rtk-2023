import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [expandedTab, setExpendedTab] = useState(0);

    const tabs = items.map((item, index) => {
        const isExpanded = index === expandedTab;

        const handleClick = () => {
            setExpendedTab(index);
        };

        return (
            <div key={item.id}>
                <div onClick={handleClick}>
                    {item.label} {isExpanded ? "EXPANDED!" : "COLLAPSED"}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{tabs}</div>;
};

export default Accordion;
