import React, { useState } from "react";

import Input from "../Input";
import List from "../List";

import "./style.css";

function Filter() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="filter">
      <p>상품검색</p>

      <div className="separator" />

      <div className="filter-container">
        <div className="filter-wrapper">
          <span>검색</span>
          <div className="filter-inputs" style={{ position: "relative" }}>
            <List show={isShow}>ss</List>

            <Input
              onClick={() => setIsShow(!isShow)}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>

        <button className="filter-button">검색</button>
      </div>
    </div>
  );
}

export default Filter;
