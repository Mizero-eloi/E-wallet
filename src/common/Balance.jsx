import React from "react";

function Balance(props) {
  return (
    <>
      <div
        className={`w-[84%] h-[151px] rounded-2xl float-right  bg-gray-900 bg-[url('../../public/images/1.png')] bg-no-repeat bg-cover`}
      >
        {/* information div  */}
        <div className="ml-[6%] text-white ">
          <p className=" mt-[10px] font-semibold">Balance</p>
          <h2 className="mt-[17px] text-white text-4xl font-mono">
            $ 7,126.00{" "}
          </h2>

          {/* income and expenses container  */}

          <div className="">
            <div className="flex justify-between">
              {/* item  */}
              <div className="flex  w-[36%] align-center justify-center  mt-[7px]">
                <div className="h-[30px] w-[30px] bg-yellow-300 rounded-lg mr-2 mt-[17px] "></div>
                <span className="text-sm font-mono mt-[20px]">
                  {" "}
                  + $ 2,234.00{" "}
                </span>
              </div>

              {/* item  */}
              <div className="flex  w-[36%] align-center justify-center  mt-[7px]  mr-20">
                <div className="h-[30px] w-[30px] bg-yellow-300 rounded-lg mr-2 mt-[17px] "></div>
                <span className="text-sm font-mono mt-[20px]">
                  {" "}
                  - $ 2,234.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Balance;
