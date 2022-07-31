import React, { useState, useContext } from "react";
import TopNav from "../common/TopNav";
import TransferButton from "../common/TransferButton";
import PopUpModal from "../common/PopUpModal";
import Form from "../common/Form";
import { GlobalContext } from "./../context/GlobalState";

function AllIncomes(props) {
  const [isViewModal, setIsViewModal] = useState(false);
  const { transactions } = useContext(GlobalContext);
  console.log("Transactions", transactions);

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
          <TransferButton onToggleModal={handleToggleModal} />
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
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-6 text-left"
                        >
                          First
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4 text-left"
                        >
                          Last
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4 text-left"
                        >
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-white p-[30px]">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-6 whitespace-nowrap">
                          Mark
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Otto
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @mdo
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          2
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-6 whitespace-nowrap">
                          Jacob
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Thornton
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @fat
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          3
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-6 whitespace-nowrap">
                          Larry
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Wild
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td>
                      </tr>
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
