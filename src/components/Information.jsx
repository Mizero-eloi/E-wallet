import React from "react";
import Balance from "../common/Balance";
import Income from "../common/Income";

function InformationComp(props) {
  return (
    <div className="w-1/2 bg-green-500">
      <Balance />
      <Income />
    </div>
  );
}

export default InformationComp;
