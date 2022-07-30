import React from "react";
import TopNav from "../common/TopNav";
import AddTransaction from "./AddTransaction";
import InformationComp from "./Information";

function Home(props) {
  return (
    <div>
      <TopNav />
      <div className="flex  w-full relative top-[30px]">
        <AddTransaction />
        <InformationComp />
      </div>
    </div>
  );
}

export default Home;
