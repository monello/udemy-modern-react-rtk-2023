import React from "react";
import classNames from "classnames";

const Skeleton = ({ times }) => {
    // const boxes = [];

    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i}></div>);
    // }

    // the above could be achieved with the following
    return Array(times)
        .fill(0)
        .map((_, i) => <div key={i} />);
};

export default Skeleton;
