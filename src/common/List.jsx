import React from "react";

function List({ Tag, itemclasses, list, OnClick, attributes }) {
  return (
    <>
      {list.map((item) => (
        <Tag {...attributes} className={itemclasses} onClick={OnClick}>
          {item["data"]}
        </Tag>
      ))}
    </>
  );
}

export default List;
