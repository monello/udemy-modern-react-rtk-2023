import React, { useState } from "react";

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    const optionElements = options.map((option) => (
        <div key={option.value}>{option.label}</div>
    ));

    return (
        <div>
            <div onClick={handleClick}>Select Option</div>
            {isOpen && <div>{optionElements}</div>}
        </div>
    );
};

export default Dropdown;
