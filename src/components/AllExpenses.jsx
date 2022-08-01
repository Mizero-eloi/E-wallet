import React, { useState, useContext } from "react";
import TopNav from "../common/TopNav";
import TransferButton from "../common/TransferButton";
import PopUpModal from "../common/PopUpModal";
import Form from "../common/Form";
import { GlobalContext } from "../context/GlobalState";
import Button from "../common/Button";
import Table from "../common/Table";

function AllExpenses(props) {
  const [isViewModal, setIsViewModal] = useState(false);
  const { transactions } = useContext(GlobalContext);
  const expenses = transactions.filter((transaction) => transaction.amount < 0);

  function handleToggleModal() {
    setIsViewModal(!isViewModal);
  }

  return (
    <>
      <TopNav />
      {isViewModal && (
        <PopUpModal
          title={"Add Expense"}
          Component={Form}
          toggleModal={handleToggleModal}
        />
      )}
      <div className="p-3 mt-[106px] w-[90%]">
        {/* header */}
        <h2 className="font-semibold text-xl w-[15%] relative top-[-89px]">
          All Expenses
        </h2>

        {/* transfer button */}
        <div className="flex flex-row-reverse">
          <Button onToggleModal={handleToggleModal} label={"+ Add"} />
        </div>

        {/* tables for AllExpenses  */}

        <div className="mt-[-19px]">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <Table
                    columns={["No", "Label", "Amount", "Description", "Date"]}
                    row={expenses}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllExpenses;
