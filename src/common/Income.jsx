import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "../utils/moneyFormatter";

function Income(props) {
  const { transactions } = useContext(GlobalContext);
  const incomes = transactions.filter((transaction) => transaction.amount > 0);

  return (
    <div
      className={
        incomes.length === 0
          ? "w-full h-[151px] rounded-2xl float-right  bg-white  bg-no-repeat bg-cover mt-5 p-[15px]"
          : "w-full rounded-2xl float-right  bg-white  bg-no-repeat bg-cover mt-5 p-[15px]"
      }
    >
      <div className="text-gray-900 font-semibold flex justify-between">
        <p className="w-[15%]">Income</p>

        {incomes.length > 0 && (
          <Link to="/allIncomes" className="w-[15%] relative right-[68px]">
            See all
          </Link>
        )}
      </div>

      {/* Income list  */}
      <div>
        {incomes.length === 0 && (
          <h2 className="w-[32%] m-auto mt-[30px] font-semibold">
            No incomes yet
          </h2>
        )}

        {/* income item  */}
        {incomes.map((income) => (
          <div className="mt-4 ">
            <div className="flex font-semibold">
              <h2 className=" text-gray-800 w-[75%]">{income.label}</h2>{" "}
              <span className="relative right-[56px]">
                {moneyFormatter(income.amount)}{" "}
              </span>
            </div>
            <p className="mt-2 text-gray-700">{income.description}</p>
            {/* border line  */}
            <div className="w-[75%] h-[2px] bg-gray-400 mt-[15px]"></div>
          </div>
        ))}
        {/* Income item  */}
      </div>
    </div>
  );
}

export default Income;
