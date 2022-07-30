import React from "react";

function PopUpModal(props) {
  return (
    <>
      <div className="bg-black w-full h-full absolute top-0 left-0 opacity-[0.4]">
        <div className="bg-red  p-3">
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
    </>
  );
}

export default PopUpModal;
