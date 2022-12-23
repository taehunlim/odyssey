import React, { useState } from "react";

import Input from "../Input";
import List from "../List";

import "./style.css";

function Select({ defaultValue, value, lists, onSelectChange, ...props }) {
  const [show, setShow] = useState();

  return (
    <div className="select" {...props}>
      <div className="select-box">
        <Input
          readOnly
          onClick={() => {
            setShow(!show);
          }}
          value={value || defaultValue}
        />
        <div className={`select-icon ${show ? "active" : ""}`}>
          <img src="/dropdown-arrow.svg" alt="dropdown-icon" />
        </div>
      </div>
      <List
        show={show}
        setShow={setShow}
        lists={lists}
        onClick={(item) => {
          onSelectChange(item);
        }}
      />
    </div>
  );
}

export default Select;
