import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [expandedTab, setExpendedTab] = useState(0);

    const tabs = items.map((item, index) => {
        const isExpanded = index === expandedTab;

        return (
            <div key={item.id}>
                <div>
                    {item.label} {isExpanded ? "EXPANDED!" : "COLLAPSED"}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{tabs}</div>;
};

export default Accordion;
