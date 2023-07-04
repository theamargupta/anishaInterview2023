import React from "react";
import "./Table.css";
export const Table = ({ tableData, columnData }) => {
  return (
    <>
      <table id="customers">
        <thead>
          <tr>
            {columnData.map(({ key, title }) => (
              <th key={key}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData?.length ? (
            tableData?.map((data, id) => {
              return (
                <tr key={id}>
                  {columnData?.map(({ key }) => (
                    <td key={key}>{data?.[key]}</td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No data Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
