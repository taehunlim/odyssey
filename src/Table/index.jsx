import React from "react";
import "./style.css";

function Table({ columns, data }) {
  const rows = data.map((row, index) => {
    return {
      id: index,
      cells: Object.values(row),
    };
  });

  return (
    <div className="table-wrapper">
      <p>검색된 데이터: {data.length}건</p>
      <table role="table" className="table">
        <thead className="table-head">
          <tr role="row">
            {columns.map((column) => (
              <th
                width={column.width}
                key={column.accessor}
                role="columnheader"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {rows.map((row) => (
            <tr key={row.id} role="row">
              {row.cells.map((cell, index) => (
                <td key={index} role="cell">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
