import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "../utils/moneyFormatter";

function CreditCard(props) {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return (
    <div className="w-[59%] h-[130px] m-auto mt-[-83px] mb-[22px] rounded-xl bg-gray-700 bg-[url('../../images/2.png')] bg-no-repeat bg-cover p-3">
      {/* logo  */}
      <div>
        <div className="h-[40px] w-[40px] bg-[rgba(255,255,255,0.45)] rounded-xl mr-2 flex justify-center items-center">
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[30px] h-[36px]"
          >
            <rect
              x="5.78271"
              y="1.73877"
              width="0.394497"
              height="7.8391"
              fill="white"
            />
            <rect
              x="0.767578"
              y="2.25867"
              width="0.509478"
              height="5.01521"
              transform="rotate(-90 0.767578 2.25867)"
              fill="white"
            />
            <rect
              x="0.767578"
              y="4.54175"
              width="0.509478"
              height="5.01521"
              transform="rotate(-90 0.767578 4.54175)"
              fill="white"
            />
            <rect
              x="7.68677"
              y="9.57788"
              width="0.394497"
              height="8.9114"
              transform="rotate(180 7.68677 9.57788)"
              fill="white"
            />
            <rect
              x="12.7021"
              y="4.86755"
              width="0.509478"
              height="5.01521"
              transform="rotate(90 12.7021 4.86755)"
              fill="white"
            />
            <rect
              x="12.7021"
              y="2.8783"
              width="0.509478"
              height="5.01521"
              transform="rotate(90 12.7021 2.8783)"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* the wallet id */}
      <div className="text-white font-mono">
        <p className=" mt-3 font-semibold">
          2930 &nbsp;7680 &nbsp; 8690 &nbsp;6794
        </p>
        <p className=" mt-3">{moneyFormatter(total)}</p>
      </div>
    </div>
  );
}

export default CreditCard;
