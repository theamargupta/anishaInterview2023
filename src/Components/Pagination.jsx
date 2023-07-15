import React from "react";

const Pagination = ({ pageProps }) => {
  const {
    previousPage,
    numbers,
    currentPage,
    changeCurrentPage,
    nextPage,
    rowsPerPage,
    setRowsPerPage,
  } = pageProps;
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <li style={{ marginRight: "10px" }}>
          <button
            href="#"
            onClick={() => previousPage()}
            className="page-item"
            style={{ padding: "10px", background: "white" }}
            disabled={currentPage === 1}
          >
            {"<"} Prev
          </button>
        </li>
        {numbers.map((n, i) => (
          <li
            key={i}
            className={`page-item ${currentPage === n ? "active" : " "}`}
            style={{
              marginRight: "10px",
            }}
          >
            {" "}
            <button
              style={{
                padding: "10px",
                fontWeight: currentPage === n ? "900" : "",
                background: currentPage === n ? "grey" : "white",
                color: currentPage === n ? "white" : "black",
              }}
              href="#"
              onClick={() => changeCurrentPage(n)}
            >
              {n}
            </button>
          </li>
        ))}
        <li style={{ marginRight: "10px" }}>
          <button
            style={{ padding: "10px", background: "white" }}
            onClick={() => nextPage()}
            className="page-item"
            disabled={currentPage === numbers?.length}
          >
            Next {">"}
          </button>
        </li>
        <li>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            style={{ padding: "10px", background: "white" }}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
