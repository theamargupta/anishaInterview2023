import React, { useEffect, useState } from "react";
import CommonTable from "../Components/CommonTable";
import CustomChart from "./Chart";
import jsonData from "../db.json";
import Sidebar from "../Components/Sidebar";
const TablePage = () => {
  const [tableData, setTableData] = useState(null);
  const [copydata, setCopyData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const loadUsersData = async () => {
    try {
      setTimeout(() => {
        console.log();
        setCopyData(jsonData.users);
        setTableData(jsonData.users);
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

  return (
    <Sidebar countries={countries} activeTab={activeTab} handleTabChange={handleTabChange}>
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
                xAxis="Contact"
                yAxis="Country"
              />
            )}
          </div>
          <div style={{ minHeight: "25vh", width: "50vw" }}>
            {tableData && (
              <CustomChart
                chartType={"line"}
                data={tableData}
                xAxis="Country"
                yAxis="Contact"
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
