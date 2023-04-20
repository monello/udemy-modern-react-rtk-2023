import React from "react";
import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
    const classes = classNames(
        className,
        "border rounded p-3 shadow bg-white w-full"
    );

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};

export default Panel;
