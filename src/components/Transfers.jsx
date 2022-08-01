import React, { useState, useContext } from "react";
import TopNav from "../common/TopNav";
import TransferButton from "../common/TransferButton";
import PopUpModal from "../common/PopUpModal";
import TransferForm from "../common/TransferForm";
import Table from "../common/Table";
import { GlobalContext } from "../context/GlobalState";

function Transfers(props) {
  const [isViewModal, setIsViewModal] = useState(false);

  const { transfers } = useContext(GlobalContext);
  console.log("Transfers", transfers);

  function handleToggleModal() {
    setIsViewModal(!isViewModal);
  }

  return (
    <>
      <TopNav />
      {isViewModal && (
        <PopUpModal
          title={"Transfer"}
          Component={TransferForm}
          toggleModal={handleToggleModal}
        />
      )}
      <div className="p-3 mt-[106px] w-[90%]">
        {/* header */}
        <h2 className="font-semibold text-xl w-[8%] relative top-[-89px]">
          Transfers
        </h2>

        {/* transfer button */}
        <div className="flex flex-row-reverse">
          <TransferButton onToggleModal={handleToggleModal} />
        </div>

        {/* tables for transfers  */}

        <div className="mt-[-19px]">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <Table
                    columns={["No", "Amount", "Wallet Id", "Date"]}
                    row={transfers}
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

export default Transfers;
