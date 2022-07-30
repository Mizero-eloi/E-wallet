import React from "react";

function TopNav(props) {
  return (
    <div className="h-20px flex float-right mt-[1rem]">
      {/* notifications */}
      <div className="flex relative right-[105px]">
        <div className="h-[40px] w-[40px] bg-yellow-300 rounded-xl mr-2"></div>
        <div className="h-[40px] w-[40px] bg-yellow-300 rounded-xl mr-2"></div>
      </div>
    </div>
  );
}

export default TopNav;
