import React from "react";

const Accordion = ({ items }) => {
    const tabs = items.map((item) => (
        <div key={item.id}>
            <div>{item.label}</div>
            <div>{item.content}</div>
        </div>
    ));
    return <div>{tabs}</div>;
};

export default Accordion;
