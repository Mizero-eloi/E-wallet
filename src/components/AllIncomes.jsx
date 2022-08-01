import React, { useState, useContext } from "react";
import TopNav from "../common/TopNav";
import PopUpModal from "../common/PopUpModal";
import Form from "../common/Form";
import { GlobalContext } from "./../context/GlobalState";
import Button from "../common/Button";

function AllIncomes(props) {
  const [isViewModal, setIsViewModal] = useState(false);
  const { transactions } = useContext(GlobalContext);
  const incomes = transactions.filter((transaction) => transaction.amount > 0);

  function handleToggleModal() {
    setIsViewModal(!isViewModal);
  }

  return (
    <>
      <TopNav />
      {isViewModal && (
        <PopUpModal
          title={"Add income"}
          Component={Form}
          toggleModal={handleToggleModal}
        />
      )}
      <div className="p-3 mt-[106px] w-[90%]">
        {/* header */}
        <h2 className="font-semibold text-xl w-[15%] relative top-[-89px]">
          All Incomes
        </h2>

        {/* transfer button */}
        <div className="flex flex-row-reverse">
          <Button onToggleModal={handleToggleModal} label={"+ Add"} />
        </div>

        {/* tables for AllIncomes  */}

        <div className="mt-[-19px]">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b bg-gray-900 ">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4 text-left"
                        >
                          N<sup className="underline">o</sup>
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-6 text-left"
                        >
                          Label
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4 text-left"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4 text-left"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4 text-left"
                        >
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {incomes.map((expense) => (
                        <tr className="border-b bg-white p-[30px]">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-6 whitespace-nowrap">
                            {expense.label}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {expense.amount}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {expense.description}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {expense.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllIncomes;
