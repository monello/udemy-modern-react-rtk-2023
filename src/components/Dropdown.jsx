import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            // check that the diff is still in the DOM, if not then just return, no point on wasting time to carry om
            if (!divEl.current) {
                return;
            }

            // check if the user clicked on an element that is withiin the Dropdown component DOM tree
            // If it is then the user clicked something that is pat of the Dropdown, so NOT Click-Outside
            // If not, then we need to close the dropdown
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handler, true);

        // CLEAN-UP function
        // Seeing as this useEffect has no dependencies in the array, this function will only run when the component is removed from the DOM
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

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
        <div ref={divEl} className="w-48 relative">
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
