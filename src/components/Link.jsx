import React, { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
    const { navigate } = useContext(NavigationContext);
    const handleClick = (event) => {
        // if the use explicitly forces "Open in New Tab" using Ctrl + click (Windows) or Cmd + click (MacOS),
        // the we don't want to preventDefault
        // Windows: event.ctrKey
        // MacOS: event.metaKey
        if (event.ctrlKey || event.metaKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    return (
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
