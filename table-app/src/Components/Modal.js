import React from "react";

export const Modal = ({
  handleSearch,
  companyValue,
  contactValue,
  countryValue,
  setModalOpen,
  modalOpen
}) => {
  return (
    <div>
      {" "}
      <form onSubmit={handleSearch} className="form2">
        <div className="Company">
          <label for="Company">Select Company</label>
          <select name="Company" id="Company">
            {companyValue &&
              companyValue.map((data) => {
                return <option value={data}>{data}</option>;
              })}
          </select>
        </div>
        <div className="Contact">
          <label for="Contact">Select Contact</label>
          <select name="Contact" id="Contact">
            {contactValue &&
              contactValue.map((data) => {
                return <option value={data}>{data}</option>;
              })}
          </select>
        </div>
        <div className="Country">
          <label for="Country">Select Country</label>
          <select name="Country" id="Country">
            {countryValue &&
              countryValue.map((data) => {
                return <option value={data}>{data}</option>;
              })}
          </select>
        </div>
        <button className="filterbtn" onClick={() => setModalOpen(true)}>
          OK
        </button>
        <button className="filterbtn" onClick={() => setModalOpen(false)}>
          Close
        </button>
      </form>
    </div>
  );
};

