import React, { useState } from "react";

import Input from "../Input";
import Select from "../Select";

import "./style.css";

export const lists = [
  { name: "전체", value: "" },
  { name: "상품명", value: "title" },
  { name: "브랜드", value: "brand" },
  { name: "상품내용", value: "description" },
];

function Filter({ onSearch, defaultValue }) {
  const { select, input } = defaultValue;

  const [isShow, setIsShow] = useState(false);

  const [selectedData, setSelectedData] = useState({
    name: select.name || "전체",
    value: select.value || "",
  });
  const [description, setDescription] = useState(input || "");

  return (
    <div className="filter">
      <p>상품검색</p>

      <div className="separator" />

      <div className="filter-container">
        <div className="filter-wrapper">
          <span>검색</span>
          <div className="filter-inputs">
            <Select
              lists={lists}
              onSelectChange={(e) => {
                setSelectedData(e);
              }}
              value={selectedData.name}
              defaultValue="전체"
            />

            <Input
              onClick={() => setIsShow(!isShow)}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>

        <button
          className="filter-button"
          onClick={() => {
            onSearch({
              select: selectedData,
              input: description,
            });
          }}
        >
          검색
        </button>
      </div>
    </div>
  );
}

export default Filter;
