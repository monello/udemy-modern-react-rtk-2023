import React from "react";

const Table = ({ data, config }) => {
    const renderedRows = data.map((fruit) => (
        <tr key={fruit.name} className="border-b">
            <td className="p-3">{fruit.name}</td>
            <td className="p-3">
                <div className={`p-3 m-2 ${fruit.color}`}></div>
            </td>
            <td className="p-3">{fruit.score}</td>
        </tr>
    ));

    const renderedHeaders = config.map((item) => <th>{item.label}</th>);

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
