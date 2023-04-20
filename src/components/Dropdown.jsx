import React, { useState } from "react";

const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleSelect = (selectedOption) => {
        setIsOpen(false);
        onChange(selectedOption);
    };

    const optionElements = options.map((option) => (
        <div key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
        </div>
    ));

    return (
        <div>
            <div onClick={handleClick}>{value?.label || "Select ..."}</div>
            {isOpen && <div>{optionElements}</div>}
        </div>
    );
};

export default Dropdown;
