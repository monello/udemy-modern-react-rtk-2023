import React from "react";
import className from "classnames";

const Button = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) => {
    const classes = className("px-3 py-1.5 border", {
        "border-blue-500 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-400 bg-yellow-400 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        // Note: classes listed later will overwrite classes listed earlier, in this case bg (background) will be used over other bd-xxx
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
    });
    return <button className={classes}>{children}</button>;
};

Button.propTypes = {
    singleVariationCheck: ({
        primary,
        secondary,
        success,
        warning,
        danger,
    }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);
        if (count > 1) {
            return new Error("Only 1 Button variation can be used at a time");
        }
    },
};

export default Button;
