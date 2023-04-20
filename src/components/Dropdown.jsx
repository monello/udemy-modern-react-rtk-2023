import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

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
        <div
            className="hover:bg-sky-100 rounder cursor-pointer p-1"
            key={option.value}
            onClick={() => handleSelect(option)}
        >
            {option.label}
        </div>
    ));

    return (
        <div className="w-48 relative">
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                {value?.label || "Select ..."}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">{optionElements}</Panel>
            )}
        </div>
    );
};

export default Dropdown;
