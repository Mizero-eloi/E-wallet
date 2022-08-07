import React, { useContext, useState } from "react";
import { GlobalContext } from "./../context/GlobalState";

function Form(props) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  // calling the addTransaction
  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      label,
      amount: +amount,
      description,
      no: transactions.length + 1,
      // date: new Date(),
    };

    addTransaction(newTransaction);
  }

  return (
    <form onSubmit={handleSubmit}>
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
            onChange={(e) => setLabel(e.target.value)}
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
            type="number"
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
            onChange={(e) => setAmount(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button className="bg-gray-900 text-white py-[10px] w-full mt-3 rounded-2xl">
        Create
      </button>
    </form>
  );
}

export default Form;
