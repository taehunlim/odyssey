import React, { useState } from "react";

import Input from "../Input";
import Select from "../Select";

import "./style.css";

export const lists = [
  { name: "제목", value: "linkUrlTitle" },
  { name: "내용", value: "description" },
  { name: "폴더명", value: "folderName" },
];

function Filter() {
  const [isShow, setIsShow] = useState(false);
  const [selectedData, setSelectedData] = useState({
    name: "",
    value: "",
  });

  return (
    <div className="filter">
      <p>상품검색</p>

      <div className="separator" />

      <div className="filter-container">
        <div className="filter-wrapper">
          <span>검색</span>
          <div className="filter-inputs" style={{ position: "relative" }}>
            <Select
              lists={lists}
              onSelectChange={(e) => {
                setSelectedData(e);
              }}
              value={selectedData.name}
              defaultValue=""
            />

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
