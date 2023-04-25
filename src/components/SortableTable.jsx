import React from "react";
import Table from "./Table";

const SortableTable = (props) => {
    const { config } = props;
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () => <th>{column.label} [^v]</th>,
        };
    });

    return <Table {...props} config={updatedConfig} />;
};

export default SortableTable;
