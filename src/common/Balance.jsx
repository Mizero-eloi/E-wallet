import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "./../utils/moneyFormatter";

function Balance(props) {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => {
    return acc + item;
  }, 0);

  console.log("the total balance", total);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;

  return (
    <>
      <div
        className={`w-full h-[151px] rounded-2xl float-right  bg-gray-900 bg-[url('../../images/1.png')] bg-no-repeat bg-cover`}
      >
        {/* information div  */}
        <div className="ml-[6%] text-white ">
          <p className=" mt-[10px] font-semibold">Balance</p>
          <h2 className="mt-[17px] text-white text-4xl font-mono">
            {moneyFormatter(total)}
          </h2>

          {/* income and expenses container  */}

          <div className="">
            <div className="flex justify-between">
              {/* item  */}
              <div className="flex  w-[36%] align-center justify-center  mt-[7px]">
                <div className="h-[30px] w-[30px] bg-[rgba(255,255,255,0.45)] rounded-lg mr-2 mt-[17px] flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[21px] h-[67px]"
                  >
                    <path
                      d="M5 19L19 5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 5H19V13"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-mono mt-[20px]">
                  {" "}
                  + {moneyFormatter(income)}{" "}
                </span>
              </div>

              {/* item  */}
              <div className="flex  w-[36%] align-center justify-center  mt-[7px]  mr-20">
                <div className="h-[30px] w-[30px] bg-[rgba(255,255,255,0.45)] rounded-lg mr-2 mt-[17px] flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[21px] h-[67px]"
                  >
                    <path
                      d="M19 5L5 19"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 19H5V11"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm font-mono mt-[20px]">
                  {" "}
                  {moneyFormatter(expense)}{" "}
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
