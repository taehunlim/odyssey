import React from "react";

import "./style.css";

function Filter() {
  return (
    <div className="filter">
      <p>상품검색</p>

      <div className="separator" />

      <div className="filter-container">
        <div className="filter-wrapper">
          <span>검색</span>
          <div className="filter-inputs">
            <input />

            <input />
          </div>
        </div>

        <button className="filter-button">검색</button>
      </div>
    </div>
  );
}

export default Filter;
