import React from "react";
import Table from "./Table";

const SortableTable = (props) => {
    const { config } = props;

    const handleClick = (label) => {
        console.log(`Label: ${label}`);
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () => (
                <th onClick={() => handleClick(column.label)}>
                    {column.label} [^v]
                </th>
            ),
        };
    });

    return <Table {...props} config={updatedConfig} onClick={handleClick} />;
};

export default SortableTable;
