import React, { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
    const renderedHeaders = config.map((column) => {
        // if this column has a header-property use this to generate the header
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        // ... else generate the header manually
        return <th key={column.label}>{column.label}</th>;
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => (
            <td key={column.label} className="p-3">
                {column.render(rowData)}
            </td>
        ));
        return (
            <tr key={keyFn(rowData)} className="border-b">
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
