import React from "react";
import CreditCard from "../common/CreditCard";
import Form from "../common/Form";

function AddTransaction(props) {
  return (
    <div className="w-1/2 h-10 ">
      <div className="w-[90%] bg-white rounded-3xl p-9">
        <CreditCard />
        <h2 className="w-[20%] m-auto text-xl relative top-[16px] font-semibold text-gray-900 ">
          Transaction{" "}
        </h2>
        <div className="w-[12%] h-[6px] m-auto bg-gray-500 relative top-[17px] left-[12px] rounded-xl"></div>
        <Form />
      </div>
    </div>
  );
}

export default AddTransaction;
