import React from "react";

export const Modal = ({
  handleSearch,
  companyValue,
  contactValue,
  countryValue,
  setModalOpen,
  selectOnChangeHandler,
  loadUsersData,
  setSearchInput
}) => {
  return (
    <div>
      {" "}
      <form onSubmit={handleSearch} className="form2">
        <div className="Company">
          <label for="Company">Select Company</label>
          <select
            name="Company"
            id="Company"
            onChange={(e) => selectOnChangeHandler(e)}
          >
            {companyValue &&
              companyValue.map((data) => {
                return <option value={data}>{data}</option>;
              })}
          </select>
        </div>
        <div className="Contact">
          <label for="Contact">Select Contact</label>
          <select
            name="Contact"
            id="Contact"
            onChange={(e) => selectOnChangeHandler(e)}
          >
            {contactValue &&
              contactValue.map((data) => {
                return <option value={data}>{data}</option>;
              })}
          </select>
        </div>
        <div className="Country">
          <label for="Country">Select Country</label>
          <select
            name="Country"
            id="Country"
            onChange={(e) => selectOnChangeHandler(e)}
          >
            {countryValue &&
              countryValue.map((data) => {
                return <option value={data}>{data}</option>;
              })}
          </select>
        </div>
        <button className="filterbtn" onClick={() => loadUsersData()}>
          Reset
        </button>
        <button
          className="filterbtn"
          onClick={() => {
            setModalOpen((value) => !value);
            setSearchInput("");
            loadUsersData();
          }}
        >
          Close
        </button>
      </form>
    </div>
  );
};
