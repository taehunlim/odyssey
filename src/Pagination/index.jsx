import React from "react";
import "./style.css";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const startNumber = Math.floor((page - 1) / 10) * 10 + 1;
  const pageList = Array(10).fill(startNumber);

  return (
    <div>
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
