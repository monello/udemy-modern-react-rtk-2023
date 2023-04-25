import React, { useState } from "react";
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

const SortableTable = (props) => {
    const { config, data } = props;

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (label) => {
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

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) return column;
        return {
            ...column,
            header: () => (
                <th
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClick(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}{" "}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    return (
        <Table
            {...props}
            config={updatedConfig}
            data={sortedData}
            onClick={handleClick}
        />
    );
};

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy)
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );

    if (!sortOrder) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    } else if (sortOrder === "asc") {
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        );
    } else {
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        );
    }
}

export default SortableTable;
