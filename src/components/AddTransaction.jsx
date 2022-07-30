import React from "react";
import CreditCard from "../common/CreditCard";

function AddTransaction(props) {
  return (
    <div className="w-1/2 h-10 ">
      <div className="w-[90%] bg-white rounded-3xl p-9">
        <CreditCard />
        <h2 className="w-[20%] m-auto text-xl relative top-[16px] font-semibold text-gray-900">
          Transaction{" "}
        </h2>
        <div className="w-[12%] h-[6px] m-auto bg-gray-500 relative top-[17px] left-[12px] rounded-xl"></div>
        <form action="">
          <div
            className="
          flex
          flex-col
          p-[15px]
          mt-[1px]
          "
          >
            <div className="flex flex-col mt-[16px]">
              <label
                className="mt-2 text-base text-gray-700 font-semibold"
                htmlFor="amount"
              >
                Label
              </label>
              <input
                type="text"
                placeholder=" salary"
                className="

            p-[15px]
            px-2
            mt-[15px]
            rounded-[13px]
            outline-none
            bg-gray-50
            font-semibold
            text-gray-500
            placeholder-gray-500
            "
              />
            </div>
            <div className="flex flex-col mt-[16px]">
              <label
                className="mt-2 text-base text-gray-700 font-semibold"
                htmlFor="amount"
              >
                Amount
              </label>
              <input
                type="text"
                placeholder=" 5000"
                className="

            p-[12px]
            mt-[8px]
            rounded-[13px]
            outline-none
            bg-gray-50
            font-semibold
            text-gray-500
            placeholder-gray-500
            "
              />
            </div>
            <div className="flex flex-col mt-[16px]">
              <label
                className="mt-2 text-base text-gray-700 font-semibold"
                htmlFor="amount"
              >
                Description
              </label>
              <input
                type="text"
                placeholder=" short description..."
                className="
            p-[15px]
            mt-[8px]
            rounded-[13px]
            outline-none
            bg-gray-50
            font-semibold
            text-gray-500
            placeholder-gray-500
            "
              />
            </div>
          </div>
          <button className="bg-gray-900 text-white py-[10px] w-full mt-3 rounded-2xl">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTransaction;
