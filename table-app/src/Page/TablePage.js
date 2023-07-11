import React, { useEffect, useState } from "react";
import axios from "axios";
import CommonTable from "../Components/CommonTable";
import CustomChart from "./Chart";

const TablePage = () => {
  const [tableData, setTableData] = useState(null);
  const [copydata, setCopyData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const loadUsersData = async () => {
    try {
      const res = await axios.get("http://localhost:3006/users");
      setCopyData(res?.data);
      setTableData(res?.data);
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
    <div className="tab-container">
      <div className="tab-buttons">
        {countries.map((country) => (
          <button
            key={country}
            className={`tab-button ${
              activeTab === country.toLowerCase() ? "active" : ""
            }`}
            onClick={() => handleTabChange(country.toLowerCase())}
          >
            {country}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
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
    </div>
  );
};

export default TablePage;
export const getValueByKey = (arr, key) => [
  ...new Set(arr.map((obj) => obj[key])),
];
