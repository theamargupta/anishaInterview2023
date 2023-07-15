import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import { Modal } from "./Modal";
import Pagination from "./Pagination";

const CommonTable = ({ tableData, columnData }) => {
  const [localTableData, setLocalTableData] = useState(tableData);
  const [localCopydata, setLocalCopyData] = useState(tableData);
  const [searchInput, setSearchInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [start, setStart] = useState((currentPage - 1) * rowsPerPage);
  const [end, setEnd] = useState(start + rowsPerPage);

  const numberOfPages = Math.ceil(localCopydata?.length / rowsPerPage) || 1;
  const numbers = [...Array(numberOfPages + 1).keys()].slice(1);
  const changeCurrentPage = (page) => {
    const curr = (page - 1) * rowsPerPage;
    setStart(curr);
    setEnd(curr + rowsPerPage);
    setCurrentPage(page);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setStart(start - rowsPerPage);
      setEnd(end - rowsPerPage);
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setStart(start + rowsPerPage);
      setEnd(end + rowsPerPage);
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    setLocalTableData(localCopydata?.slice(start, end));
  }, [end, localCopydata, start]);

  const pageProps = {
    previousPage,
    numbers,
    currentPage,
    changeCurrentPage,
    nextPage,
    rowsPerPage,
    setRowsPerPage: (n) => {
      setRowsPerPage(n);
      const curr = (currentPage - 1) * n;
      setStart(curr);
      setEnd(curr + n);
    },
  };
  // Pagination

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
      <Pagination pageProps={pageProps} />
    </div>
  );
};

export default CommonTable;
