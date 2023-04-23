import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

const Link = ({ to, children }) => {
    const { navigate } = useNavigation();
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

    const classes = classNames("text-blue-500");
    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
};

export default Link;
