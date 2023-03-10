import React from "react";

import "./style.css";

function List({ show, setShow, onClick, lists, ...props }) {
  return (
    <div className={`list ${show ? "show" : ""}`} {...props}>
      {lists &&
        lists.map((list) => (
          <li
            key={list.name}
            onClick={() => {
              onClick(list);
              setShow(false);
            }}
            role="presentation"
          >
            {list.name}
          </li>
        ))}
    </div>
  );
}

export default List;
