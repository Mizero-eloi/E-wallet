import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

function Expense(props) {
  const { transactions } = useContext(GlobalContext);
  const expenses = transactions.filter((transaction) => transaction.amount < 0);

  return (
    <div
      className={
        expenses.length === 0
          ? "w-full h-[151px] rounded-2xl float-right  bg-white  bg-no-repeat bg-cover mt-5 p-[15px]"
          : "w-full rounded-2xl float-right  bg-white  bg-no-repeat bg-cover mt-5 p-[15px]"
      }
    >
      <div className="text-gray-900 font-semibold flex justify-between">
        <p className="w-[15%]">Income</p>
        <Link to="/allExpenses" className="w-[15%] relative right-[68px]">
          See all
        </Link>
      </div>

      {/* Expense list  */}
      <div>
        {expenses.length === 0 && (
          <h2 className="w-[32%] m-auto mt-[30px] font-semibold">
            No expenses yet
          </h2>
        )}
        {/* Expense item  */}
        {expenses.map((e) => (
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
        ))}
      </div>
    </div>
  );
}

export default Expense;
