import React, { useEffect, useState } from "react";
import CommonTable from "../Components/CommonTable";
import CustomChart from "./Chart";
import jsonData from "../db.json"; //jsonData is an object which is getting imported from db.json as an API call response.
import Sidebar from "../Components/Sidebar";
const TablePage = () => {
  const [tableData, setTableData] = useState(null);
  const [copydata, setCopyData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const rowsPerPage = 2;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndexForNextPage = lastIndex - rowsPerPage;
  const dataRows = jsonData?.slice(firstIndexForNextPage, firstIndexForNextPage + rowsPerPage);
  const [activeTab, setActiveTab] = useState("all"); 
  const numberOfPages = Math.ceil(jsonData?.length / rowsPerPage);
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);
  console.log("dataRows ====>>>>>", jsonData?.slice(0, 2));
  const loadUsersData = async () => {
    try {
      setTimeout(() => {
        setCopyData(jsonData.slice(0, 2));
        setTableData(jsonData.slice(0, 2));
      }, 1000);
    } catch (error) {
      console.error("error", error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    loadUsersData();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "all") {
      setTableData(copydata);
    } else {
      const filteredData = copydata.filter(
        (data) => data.Country.toLowerCase() === tab.toLowerCase()
      );
      setTableData(filteredData);
    }
  };

  const countries = ["All", ...getValueByKey(copydata, "Country")]; // Replace with your country options
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Sidebar
      countries={countries}
      activeTab={activeTab}
      handleTabChange={handleTabChange}
    >
      <div className="tab-container">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div style={{ minHeight: "25vh", width: "50vw" }}>
            {tableData && (
              <CustomChart
                chartType={"bar"}
                data={tableData}
                title={"Comapny Sales Chart"}
                xAxis="Company"
                yAxis="sales"
              />
            )}
          </div>
          <div style={{ minHeight: "25vh", width: "50vw" }}>
            {tableData && (
              <CustomChart
                chartType={"line"}
                data={tableData}
                xAxis="Country"
                yAxis="sales"
                title={"Country Sales Chart"}
              />
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ minHeight: "25vh", width: "25vw" }}>
            {tableData && (
              <CustomChart
                chartType={"pie"}
                data={tableData}
                title={"Comapny Sales Chart"}
                xAxis="Company"
                yAxis="sales"
              />
            )}
          </div>
          <div style={{ minHeight: "25vh" }}>
            {tableData && (
              <CustomChart
                chartType={"doughnut"}
                data={tableData}
                xAxis="Country"
                yAxis="sales"
                title={"Country Sales Chart"}
              />
            )}
          </div>
        </div>
        <CommonTable
          tableData={tableData}
          columnData={[
            { key: "Company", title: "Company" },
            { key: "Contact", title: "Contact" },
            { key: "Country", title: "Country" },
            { key: "sales", title: "Sales" },
          ].filter(
            (data) =>
              activeTab === "all" ||
              (data.key !== "Country" && activeTab !== "all")
          )}
        />
        <nav>
          <ul>
            <li>
              <button
                href="#"
                onClick={() => previousPage()}
                className="page-item"
              >
                Prev
              </button>
            </li>
            {numbers.map((n, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === n ? "active" : " "}`}
              >
                {" "}
                <button href="#" onClick={(n) => changeCurrentPage(n)}>
                  {n}
                </button>
              </li>
            ))}
            <li>
              <button onClick={() => nextPage()} className="page-item">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Sidebar>
  );
};

// {/* <div className="tab-buttons">
//   {countries.map((country) => (
//     <button
//       key={country}
//       className={`tab-button ${
//         activeTab === country.toLowerCase() ? "active" : ""
//       }`}
//       onClick={() => handleTabChange(country.toLowerCase())}
//     >
//       {country}
//     </button>
//   ))}
// </div> */}
export default TablePage;
export const getValueByKey = (arr, key) => [
  ...new Set(arr.map((obj) => obj[key])),
];
