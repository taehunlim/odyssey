import React from "react";

import Input from "../Input";

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
            <Input />

            <Input onChange={(e) => console.log(e.target.value)} />
          </div>
        </div>

        <button className="filter-button">검색</button>
      </div>
    </div>
  );
}

export default Filter;
