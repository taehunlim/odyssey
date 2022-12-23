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

function Filter({ onSearch }) {
  const [isShow, setIsShow] = useState(false);

  const [selectedData, setSelectedData] = useState({
    name: "전체",
    value: "",
  });
  const [description, setDescription] = useState("");

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
              defaultValue="전체"
            />

            <Input
              onClick={() => setIsShow(!isShow)}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <button
          className="filter-button"
          onClick={() => {
            onSearch({
              select: selectedData.value,
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
