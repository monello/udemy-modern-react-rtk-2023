import React from "react";
import Link from "./Link";

const SideBar = () => {
    const links = [
        { label: "Dropdown", to: "/" },
        { label: "Accordion", to: "/accordion" },
        { label: "Button", to: "/button" },
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link
                key={link.label}
                to={link.to}
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                {link.label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
            {renderedLinks}
        </div>
    );
};

export default SideBar;
