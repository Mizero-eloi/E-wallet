import React from "react";

function List({ Tag, itemclasses, list }) {
  return (
    <>
      {list.map((item) => (
        <Tag className={itemclasses}>{item["data"]}</Tag>
      ))}
    </>
  );
}

export default List;
