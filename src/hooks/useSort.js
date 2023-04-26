import { useState } from 'react';

const useSort = (data, config) => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

    const setSortableColumn = (label) => {
        // If the use switched to another column, reset to ASC
        if (sortOrder && label !== sortBy) {
            setSortOrder("asc");
            setSortBy(label);
            return;
        }
        // Same column sort-order cycling
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

    let sortedData = data;
    // only apply sorting if sorting is applicable
    if (sortBy && sortOrder) {
        // make a copy of data so we don't edit the original array
        sortedData = [...data];
        const reverseOrder = sortOrder === "asc" ? 1 : -1;
        // desctruture the sortValue function from the config
        const { sortValue } = config.find((column) => column.label === sortBy);
        // apply the sorting
        sortedData.sort((a, b) => {
            // use the sorValue() function to extract the value from each data-object
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return {
        sortBy,
        sortOrder,
        setSortableColumn,
        sortedData
    };
};

export default useSort;
