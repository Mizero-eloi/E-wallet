import React from "react";

function Income(props) {
  return (
    <div className="w-[84%] h-[151px] rounded-2xl float-right  bg-white  bg-no-repeat bg-cover mt-5 p-[15px]">
      <p className="text-gray-900 font-semibold">Income</p>

      {/* Income list  */}
      <div>
        {/* income item  */}
        <div className="mt-4 ">
          <h2 className="font-semibold text-gray-800">Salary</h2>
          <p className="mt-2 text-gray-700">
            Lorem, ipsum dolor sit amet consectetur
          </p>

          {/* border line  */}

          <div className="w-full h-[2px] bg-gray-400 mt-[15px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Income;
