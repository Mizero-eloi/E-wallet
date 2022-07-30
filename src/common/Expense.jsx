import React from "react";

function Expense(props) {
  return (
    <div className="w-full h-[151px] rounded-2xl float-right  bg-white  bg-no-repeat bg-cover mt-5 p-[15px]">
      <p className="text-gray-900 font-semibold">Expense</p>

      {/* Expense list  */}
      <div>
        {/* Expense item  */}
        <div className="mt-4 ">
          <div className="flex font-semibold">
            <h2 className=" text-gray-800 w-[75%]">Rent</h2>{" "}
            <span className="relative right-[56px]">$ 4.00 </span>
          </div>
          <p className="mt-2 text-gray-700">
            Lorem, ipsum dolor sit amet consectetur
          </p>
          {/* border line  */}
          <div className="w-[75%] h-[2px] bg-gray-400 mt-[15px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
