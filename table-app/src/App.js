import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "./Components/Table";
import { Modal } from "./Components/Modal";

const App = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const loadUsersData = async () => {
    return await axios
      .get("http://localhost:3006/users")
      .then((res) => {
        setData(res?.data);
        setSearchedData(res?.data);
      })
      .catch((err) => console.log("err", err));
  };
  useEffect(() => {
    loadUsersData();
  }, []);

  const getValueByKey = (arr, key) => arr.map((obj) => obj[key]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchedInput = data.filter((data) =>
      Object.values(data)
        .join(" ")
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setSearchInput(e.target.value);
    setSearchedData(searchedInput);
    // }
    // Line 46 (data.filter((data) =>)=> iteration each array ke saare indexes[{country:"Wipro",Contact:"Anisha"...}....] => {country:"Wipro",Contact:"Anisha"...}

    // Line 47 (Object.values(data)) =>{country:"Wipro",Contact:"Anisha"...}=> ["Anisha","Wipro", ...]

    // Line 48 => ["Anisha","Wipro", ...] =>"Ansiha Wipro ....."

    // Line 50 => "Ansiha Wipro ....." ("anisha")=>  True or False

    // Important => => =>
    // return await axios
    //   .get(`http://localhost:3006/users?q=${searchInput}`)
    //   .then((res) => {
    //     console.log("res", res);
    //     setData(res?.data);
    //     setSearchInput(" ");
    //   })
    //   .catch((err) => console.log("err", err));
  };

  const selectOnChangeHandler = (e) => {
    let result = searchedData.filter(
      (data) => data[e?.target.name] === e?.target.value
    );
    setSearchedData(result);
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
          companyValue={getValueByKey(searchedData, "Company")}
          countryValue={getValueByKey(searchedData, "Country")}
          contactValue={getValueByKey(searchedData, "Contact")}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          selectOnChangeHandler={selectOnChangeHandler}
          loadUsersData={loadUsersData}
          setSearchInput={setSearchInput}
        />
      )}
      <br />
      <Table usersData={searchedData} />
    </div>
  );
};

export default App;
