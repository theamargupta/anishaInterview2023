import React from "react";
import "./Table.css";
export const Table = ({ usersData }) => {
  return (
    <>
      <table id="customers">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          {/* <th>Action</th> */}
        </tr>
        {usersData?.length
          ? usersData.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{data.Company}</td>
                  <td>{data.Contact}</td>
                  <td>{data.Country}</td>
                  {/* <th>Action</th> */}
                </tr>
              );
            })
          : "No data Available"}
      </table>
    </>
  );
};
