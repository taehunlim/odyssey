import React from "react";

import Select from "../Select";

import "./style.css";

const lists = [
  { name: "10", value: 10 },
  { name: "20", value: 20 },
  { name: "50", value: 50 },
];

function Pagination({ total, limit, page, setPage, setLimit }) {
  const numPages = Math.ceil(total / limit);
  const startNumber = Math.floor((page - 1) / 10) * 10 + 1;
  const pageList = Array(10).fill(startNumber);

  return (
    <div className="pagination-wrapper">
      <div>
        <span>페이지당 행: </span>
        <Select
          lists={lists}
          onSelectChange={(e) => setLimit(e.value)}
          value={limit}
          defaultValue="10"
        />
      </div>

      <nav className="pagination">
        <button
          className="pagination-button arrow"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          &lt;
        </button>
        {pageList.map((pageNumber, index) => {
          const isCurrent = page === pageNumber + index;

          return (
            pageNumber + index <= numPages && (
              <button
                key={`page_${pageNumber + index}`}
                className={`pagination-button ${isCurrent ? "active" : ""}`}
                onClick={() => setPage(pageNumber + index)}
              >
                {pageNumber + index}
              </button>
            )
          );
        })}
        <button
          className="pagination-button arrow"
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
