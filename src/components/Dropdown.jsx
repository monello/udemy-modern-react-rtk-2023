import React, { useState } from "react";

const Dropdown = ({ options, selection, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleSelect = (selectedOption) => {
        setIsOpen(false);
        onSelect(selectedOption);
    };

    const optionElements = options.map((option) => (
        <div key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
        </div>
    ));

    const content = selection ? selection.label : "Select ...";

    return (
        <div>
            <div onClick={handleClick}>{content}</div>
            {isOpen && <div>{optionElements}</div>}
        </div>
    );
};

export default Dropdown;
