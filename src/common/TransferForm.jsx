import React from "react";

function TransferForm(props) {
  return (
    <>
      <form action="">
        <div
          className=" 
          flex
          flex-col
          p-[15px]
          m-auto
          mt-[1px]
          w-[85%]
          "
        >
          <div className="flex flex-col mt-[16px]">
            <label
              className="mt-2 text-base text-gray-700 font-semibold"
              htmlFor="amount"
            >
              Wallet Id
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
        </div>
        <button className="bg-gray-900 text-white py-[10px] w-[80%] mt-3 rounded-2xl ml-[48px]">
          Create
        </button>
      </form>
    </>
  );
}

export default TransferForm;
