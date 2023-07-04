import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import { Modal } from "./Modal";

const CommonTable = ({ tableData, columnData }) => {
  const [localTableData, setLocalTableData] = useState(tableData);
  const [localCopydata, setLocalCopyData] = useState(tableData);
  const [searchInput, setSearchInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setLocalTableData(tableData);
    setLocalCopyData(tableData);
  }, [tableData]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchedInput = localCopydata.filter((data) =>
      Object.values(data)
        .join(" ")
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );

    setSearchInput(e.target.value);
    setLocalTableData(searchedInput);
  };

  const selectOnChangeHandler = (e) => {
    let result = localCopydata.filter(
      (data) => data[e?.target.name] === e?.target.value
    );
    setLocalTableData(result);
  };

  return (
    <div className="main-container">
      <h1 className="first-heading">Table</h1>
      <div className="form">
        <input
          className="search"
          name="search"
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
        />
        <button
          className="filter"
          onClick={() => setModalOpen((value) => !value)}
        >
          Filter
        </button>
      </div>
      {modalOpen && (
        <Modal
          selectOnChangeHandler={selectOnChangeHandler}
          columnData={columnData}
          copydata={localCopydata}
          reset={() => setLocalTableData(localCopydata)}
          close={() => setModalOpen((value) => !value)}
        />
      )}
      <br />
      <Table tableData={localTableData} columnData={columnData} />
    </div>
  );
};

export default CommonTable;
