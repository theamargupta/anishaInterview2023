import React from "react";
import "./Sidebar.css";

const Sidebar = ({ children,activeTab, countries ,handleTabChange}) => {
  return (
    <div className="sidebar">
      <ul className="sidebarMenu">
        {countries.map((country) => (
          <li
            className={`tab-button ${
              activeTab === country.toLowerCase() ? "active" : ""
            }`}
            onClick={() => handleTabChange(country.toLowerCase())}
          >
            <div>{country}</div>
          </li>
        ))}
      </ul>
      <div className="content">{children}</div>
    </div>
  );
};

export default Sidebar;
