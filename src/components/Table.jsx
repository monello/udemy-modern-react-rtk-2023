import React from "react";

const Table = ({ data, config }) => {
    const renderedHeaders = config.map((column) => (
        <th key={column.label}>{column.label}</th>
    ));

    const renderedRows = data.map((fruit) => {
        const renderedCells = config.map((column) => (
            <td key={column.label} className="p-3">
                {column.render(fruit)}
            </td>
        ));
        return (
            <tr key={fruit.name} className="border-b">
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
};

export default Table;
