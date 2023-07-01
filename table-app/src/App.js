import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "./Components/Table";
import { Modal } from "./Components/Modal";

const App = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [companyValue, setCompanyValue] = useState([]);
  const [countryValue, setCountryValue] = useState([]);
  const [contactValue, setContactValue] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    return await axios
      .get("http://localhost:3006/users")
      .then((res) => {
        setData(res?.data);
        const selectCompanyValues = getValueByKey(res?.data, "Company");
        const selectCountryValues = getValueByKey(res?.data, "Country");
        const selectContactValues = getValueByKey(res?.data, "Contact");
        setCompanyValue(selectCompanyValues);
        setCountryValue(selectCountryValues);
        setContactValue(selectContactValues);
      })
      .catch((err) => console.log("err", err));
  };

  const getValueByKey = (arr, key) => arr.map((obj) => obj[key]);

  const handleReset = () => {
    setSearchInput("");
    setSearchedData([]);
  };

  const handleSearch = async (e) => {
    if (e?.preventDefault) {
      e.preventDefault();
    }
    if (searchInput !== " ") {
      const searchedInput = data.filter((data) =>
        Object.values(data)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
      setSearchedData(searchedInput);
    }
    // return await axios
    //   .get(`http://localhost:3006/users?q=${searchInput}`)
    //   .then((res) => {
    //     console.log("res", res);
    //     setData(res?.data);
    //     setSearchInput(" ");
    //   })
    //   .catch((err) => console.log("err", err));
  };

  return (
    <div className="main-container">
      <h1 className="first-heading">Table</h1>
      <form onSubmit={handleSearch} className="form">
        <input
          className="search"
          name="search"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target?.value)}
        />
        <button className="search-btn" onClick={() => handleSearch()}>
          Search
        </button>
        <button className="reset" onClick={() => handleReset()}>
          Reset
        </button>
        <button className="filter" onClick={() => setModalOpen(true)}>
          Filter
        </button>
      </form>
      {modalOpen && (
        <Modal
          companyValue={companyValue}
          countryValue={countryValue}
          contactValue={contactValue}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
      <br />
      {searchedData.length > 0 ? (
        <Table usersData={searchedData} />
      ) : (
        <Table usersData={data} />
      )}
    </div>
  );
};

export default App;
