import React, { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
    const { config } = props;

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () => (
                <th onClick={() => handleClick(column.label)}>
                    {column.label} [{column.label === sortBy && sortOrder}]
                </th>
            ),
        };
    });

    return <Table {...props} config={updatedConfig} onClick={handleClick} />;
};

export default SortableTable;
