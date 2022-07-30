import React from "react";

function TopNav(props) {
  return (
    <div className="h-20px flex float-right mt-[1rem]">
      {/* form  */}
      <div className="h-20px mr-2">
        <form>
          <div className="flex md:order-2 lg:order-2">
            <div className="relative">
              <div className="bg-gray-200 flex relative inset-y-0 left-0 items-center p-[2.5px] rounded-2xl">
                <input
                  type="text"
                  id="email-adress-icon"
                  className=" bg-gray-200 block p-2 pl-5 w-[13rem] outline-none text-gray-500
                rounded-2xl border-0 sm:text-sm focus:ring-blue-500 focus:border-blue-500 mr-[17px]"
                  placeholder="Search..."
                />
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative right-[20px]"
                >
                  <path
                    d="M9.36418 19.0671C11.6027 19.3219 13.8553 18.7561 15.7006 17.4803L21.0307 22.7741C21.0307 22.7741 21.0307 22.7742 21.0307 22.7742C21.3373 23.0789 21.7529 23.2498 22.1859 23.25C22.6189 23.2502 23.0347 23.0795 23.3415 22.7749C23.6484 22.4704 23.8212 22.0568 23.8213 21.6252C23.8215 21.1935 23.649 20.7798 23.3423 20.475L23.3422 20.475L18.0129 15.1819C19.2959 13.3479 19.8642 11.1096 19.6059 8.88551C19.3387 6.58461 18.2067 4.46914 16.4368 2.96213C14.667 1.45517 12.3899 0.667692 10.0611 0.756817C7.73221 0.845941 5.52279 1.80513 3.87492 3.44295C2.227 5.08083 1.26222 7.27663 1.17409 9.59115C1.08597 11.9057 1.88103 14.1676 3.39977 15.9245C4.91847 17.6814 7.04873 18.8036 9.36418 19.0671ZM17.7835 9.93587C17.7835 10.896 17.5931 11.8468 17.2231 12.734C16.8531 13.6212 16.3107 14.4274 15.6269 15.1065C14.9431 15.7857 14.1311 16.3246 13.2374 16.6922C12.3437 17.0599 11.3858 17.2492 10.4184 17.2492C9.45095 17.2492 8.49303 17.0599 7.59933 16.6922C6.70563 16.3246 5.89371 15.7857 5.20987 15.1065C4.52604 14.4274 3.98368 13.6212 3.61369 12.734C3.2437 11.8468 3.05329 10.896 3.05329 9.93587C3.05329 7.99683 3.82883 6.13685 5.20987 4.76521C6.59097 3.39351 8.46449 2.62259 10.4184 2.62259C12.3723 2.62259 14.2458 3.39351 15.6269 4.76521C17.0079 6.13685 17.7835 7.99682 17.7835 9.93587Z"
                    fill="#443841"
                    stroke="#443841"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* notifications */}
      <div className="h-[40px] w-[40px] bg-yellow-300 rounded-xl mr-2"></div>
      <div className="h-[40px] w-[40px] bg-yellow-300 rounded-xl mr-2"></div>
    </div>
  );
}

export default TopNav;
