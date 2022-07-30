import React from "react";

function CreditCard(props) {
  return (
    <div className="w-[59%] h-[130px] m-auto mt-[-83px] mb-[22px] rounded-xl bg-gray-700 bg-[url('../../images/2.png')] bg-no-repeat bg-cover p-3">
      {/* logo  */}
      <div>
        <div className="h-[40px] w-[40px] bg-yellow-300 rounded-xl mr-2"></div>
      </div>

      {/* the wallet id */}
      <div className="text-white font-mono">
        <p className=" mt-3 font-semibold">
          2930 &nbsp;7680 &nbsp; 8690 &nbsp;6794
        </p>
        <p className=" mt-3">$ 7,126.00</p>
      </div>
    </div>
  );
}

export default CreditCard;
