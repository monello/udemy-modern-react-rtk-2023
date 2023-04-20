import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

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
            <div
                className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
                onClick={handleClick}
            >
                {value?.label || "Select ..."}
                <GoChevronDown className="text-lg" />
            </div>
            {isOpen && (
                <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
                    {optionElements}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
