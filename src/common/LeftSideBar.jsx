import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function LeftSideBar(props) {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="bg-white w-full h-screen font-medium  text-base">
      <div className="flex justify-center pt-9">
        <h3 className="text-xl text-gray-900 font-semibold relative left-[-20px]">
          E-wallet
        </h3>
      </div>

      <div
        className={
          activeLink === "activities"
            ? "mt-12 hover:bg-gray-800 px-2 pt-3 pb-10 w-[85%]  relative ml-3 h-10 rounded-md hover:cursor-pointer bg-gray-900 text-white"
            : "mt-12 hover:bg-gray-50 px-2 pt-3 pb-10 w-[85%]  relative ml-3 h-10 rounded-md hover:cursor-pointer"
        }
      >
        <div className="flex justify-center items-center  ml-[-123px]">
          {activeLink === "activities" ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.7561 20 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}

          <Link
            className="ml-2 text-lg relative left-[8px]"
            to="/"
            onClick={() => handleClick("activities")}
          >
            Home
          </Link>
        </div>
      </div>
      <div
        className={
          activeLink === "transactions"
            ? "mt-5 hover:bg-gray-900 px-2 pt-3 pb-10 w-[85%]   relative ml-[14px] h-10 rounded-md hover:cursor-pointer bg-gray-900 text-white"
            : "mt-5 hover:bg-gray-50 px-2 pt-3 pb-10 w-[85%]   relative ml-[14px] h-10 rounded-md hover:cursor-pointer"
        }
      >
        <div className="flex justify-center items-center ml-[-123px]">
          {activeLink === "transactions" ? (
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-[20px]"
            >
              <path
                d="M10.5306 20.2848L20.9059 10.8851L13.1602 11.033"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.4694 13.7147L13.0942 23.1144L20.8399 22.9665"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-[20px]"
            >
              <path
                d="M10.5306 20.2848L20.9059 10.8851L13.1602 11.033"
                stroke="#363853"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.4694 13.7147L13.0942 23.1144L20.8399 22.9665"
                stroke="#363853"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
          <Link
            to="/transfers"
            className="ml-5 text-lg relative left-[8px]"
            onClick={() => handleClick("transactions")}
          >
            Transfers
          </Link>
        </div>
      </div>
      <div
        className={
          activeLink === "documents"
            ? "mt-5 hover:bg-gray-800 px-2 pt-3 pb-10 w-[85%]   relative ml-[14px] h-10 rounded-md hover:cursor-pointe bg-gray-900 text-white"
            : "mt-5 hover:bg-gray-50 px-2 pt-3 pb-10 w-[85%]   relative ml-[14px] h-10 rounded-md hover:cursor-pointe"
        }
      >
        <div className="flex justify-center items-center ml-[-123px]">
          {activeLink === "documents" ? (
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-[20px]"
            >
              <path
                d="M5.0251 18C4.74177 18 4.5041 17.904 4.3121 17.712C4.12077 17.5207 4.0251 17.2833 4.0251 17V15.85C3.2751 15.6833 2.61677 15.3917 2.0501 14.975C1.48344 14.5583 1.0251 13.975 0.675104 13.225C0.558437 12.9917 0.554104 12.746 0.662104 12.488C0.770771 12.2293 0.96677 12.0417 1.2501 11.925C1.48344 11.825 1.7251 11.8293 1.9751 11.938C2.2251 12.046 2.41677 12.225 2.5501 12.475C2.83344 12.975 3.19177 13.3543 3.6251 13.613C4.05844 13.871 4.59177 14 5.2251 14C5.90844 14 6.48777 13.846 6.9631 13.538C7.43777 13.2293 7.6751 12.75 7.6751 12.1C7.6751 11.5167 7.49177 11.054 7.1251 10.712C6.75844 10.3707 5.90844 9.98333 4.5751 9.55C3.14177 9.1 2.15844 8.56267 1.6251 7.938C1.09177 7.31267 0.825104 6.55 0.825104 5.65C0.825104 4.56667 1.1751 3.725 1.8751 3.125C2.5751 2.525 3.29177 2.18333 4.0251 2.1V1C4.0251 0.716667 4.12077 0.479 4.3121 0.287C4.5041 0.0956666 4.74177 0 5.0251 0C5.30844 0 5.5461 0.0956666 5.7381 0.287C5.92944 0.479 6.0251 0.716667 6.0251 1V2.1C6.65844 2.2 7.20844 2.40433 7.6751 2.713C8.14177 3.021 8.5251 3.4 8.8251 3.85C8.9751 4.06667 9.00444 4.30833 8.9131 4.575C8.8211 4.84167 8.63344 5.03333 8.3501 5.15C8.11677 5.25 7.8751 5.254 7.6251 5.162C7.3751 5.07067 7.14177 4.90833 6.9251 4.675C6.70844 4.44167 6.45444 4.26233 6.1631 4.137C5.8711 4.01233 5.50844 3.95 5.0751 3.95C4.34177 3.95 3.78344 4.11267 3.4001 4.438C3.01677 4.76267 2.8251 5.16667 2.8251 5.65C2.8251 6.2 3.0751 6.63333 3.5751 6.95C4.0751 7.26667 4.94177 7.6 6.1751 7.95C7.3251 8.28333 8.1961 8.81233 8.7881 9.537C9.37944 10.2623 9.6751 11.1 9.6751 12.05C9.6751 13.2333 9.3251 14.1333 8.6251 14.75C7.9251 15.3667 7.05844 15.75 6.0251 15.9V17C6.0251 17.2833 5.92944 17.5207 5.7381 17.712C5.5461 17.904 5.30844 18 5.0251 18V18Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative left-[20px]"
            >
              <path
                d="M5.0251 18C4.74177 18 4.5041 17.904 4.3121 17.712C4.12077 17.5207 4.0251 17.2833 4.0251 17V15.85C3.2751 15.6833 2.61677 15.3917 2.0501 14.975C1.48344 14.5583 1.0251 13.975 0.675104 13.225C0.558437 12.9917 0.554104 12.746 0.662104 12.488C0.770771 12.2293 0.96677 12.0417 1.2501 11.925C1.48344 11.825 1.7251 11.8293 1.9751 11.938C2.2251 12.046 2.41677 12.225 2.5501 12.475C2.83344 12.975 3.19177 13.3543 3.6251 13.613C4.05844 13.871 4.59177 14 5.2251 14C5.90844 14 6.48777 13.846 6.9631 13.538C7.43777 13.2293 7.6751 12.75 7.6751 12.1C7.6751 11.5167 7.49177 11.054 7.1251 10.712C6.75844 10.3707 5.90844 9.98333 4.5751 9.55C3.14177 9.1 2.15844 8.56267 1.6251 7.938C1.09177 7.31267 0.825104 6.55 0.825104 5.65C0.825104 4.56667 1.1751 3.725 1.8751 3.125C2.5751 2.525 3.29177 2.18333 4.0251 2.1V1C4.0251 0.716667 4.12077 0.479 4.3121 0.287C4.5041 0.0956666 4.74177 0 5.0251 0C5.30844 0 5.5461 0.0956666 5.7381 0.287C5.92944 0.479 6.0251 0.716667 6.0251 1V2.1C6.65844 2.2 7.20844 2.40433 7.6751 2.713C8.14177 3.021 8.5251 3.4 8.8251 3.85C8.9751 4.06667 9.00444 4.30833 8.9131 4.575C8.8211 4.84167 8.63344 5.03333 8.3501 5.15C8.11677 5.25 7.8751 5.254 7.6251 5.162C7.3751 5.07067 7.14177 4.90833 6.9251 4.675C6.70844 4.44167 6.45444 4.26233 6.1631 4.137C5.8711 4.01233 5.50844 3.95 5.0751 3.95C4.34177 3.95 3.78344 4.11267 3.4001 4.438C3.01677 4.76267 2.8251 5.16667 2.8251 5.65C2.8251 6.2 3.0751 6.63333 3.5751 6.95C4.0751 7.26667 4.94177 7.6 6.1751 7.95C7.3251 8.28333 8.1961 8.81233 8.7881 9.537C9.37944 10.2623 9.6751 11.1 9.6751 12.05C9.6751 13.2333 9.3251 14.1333 8.6251 14.75C7.9251 15.3667 7.05844 15.75 6.0251 15.9V17C6.0251 17.2833 5.92944 17.5207 5.7381 17.712C5.5461 17.904 5.30844 18 5.0251 18V18Z"
                fill="#363853"
              />
            </svg>
          )}

          <Link
            to="/allIncomes"
            className=" text-lg relative left-[41px]"
            onClick={() => handleClick("documents")}
          >
            All incomes
          </Link>
        </div>
      </div>
      <div
        className={
          activeLink === "account"
            ? "mt-5 hover:bg-gray-800 px-2 pt-3 pb-10 w-[85%]   relative left-[7px] ml-3 h-10 rounded-md hover:cursor-pointer bg-gray-900 text-white"
            : "mt-5 hover:bg-gray-50 px-2 pt-3 pb-10 w-[85%]   relative left-[7px] ml-3 h-10 rounded-md hover:cursor-pointer"
        }
      >
        <div className="flex justify-center items-center ml-[-123px]">
          {activeLink === "account" ? (
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[56px]"
            >
              <path
                d="M7.99858 0.641871C8.11649 0.472824 8.26798 0.32989 8.44358 0.221987C8.61919 0.114085 8.81514 0.0435291 9.01923 0.0147228C9.22331 -0.0140835 9.43114 -0.000522375 9.62975 0.0545601C9.82836 0.109643 10.0135 0.205064 10.1736 0.334872L13.4436 2.98987C13.7358 3.22697 13.9282 3.56522 13.9826 3.93753C14.0371 4.30984 13.9496 4.68902 13.7376 4.99987H12.5176L12.9076 4.44087C12.9802 4.33733 13.0108 4.21012 12.9934 4.08488C12.976 3.95963 12.9117 3.84564 12.8136 3.76587L11.1296 2.39987L9.33358 4.99987H8.11658L10.3506 1.76787L9.54258 1.11187C9.48924 1.06859 9.42755 1.03676 9.36136 1.01837C9.29517 0.999983 9.2259 0.995433 9.15787 1.005C9.08984 1.01457 9.02452 1.03806 8.96597 1.074C8.90743 1.10993 8.85691 1.15755 8.81758 1.21387L6.17658 4.99887H4.95658L7.99858 0.641871V0.641871ZM11.4966 10.9999C11.364 10.9999 11.2368 11.0525 11.143 11.1463C11.0493 11.2401 10.9966 11.3673 10.9966 11.4999C10.9966 11.6325 11.0493 11.7597 11.143 11.8534C11.2368 11.9472 11.364 11.9999 11.4966 11.9999H12.4966C12.6292 11.9999 12.7564 11.9472 12.8501 11.8534C12.9439 11.7597 12.9966 11.6325 12.9966 11.4999C12.9966 11.3673 12.9439 11.2401 12.8501 11.1463C12.7564 11.0525 12.6292 10.9999 12.4966 10.9999H11.4966ZM2.49658 3.99987H4.66558L3.96558 4.99987H2.49658C2.36397 4.99987 2.2368 5.05255 2.14303 5.14632C2.04926 5.24009 1.99658 5.36726 1.99658 5.49987C1.99658 5.63248 2.04926 5.75966 2.14303 5.85342C2.2368 5.94719 2.36397 5.99987 2.49658 5.99987H12.9966C13.527 5.99987 14.0357 6.21058 14.4108 6.58566C14.7859 6.96073 14.9966 7.46944 14.9966 7.99987V13.9999C14.9966 14.5303 14.7859 15.039 14.4108 15.4141C14.0357 15.7892 13.527 15.9999 12.9966 15.9999H3.49658C2.83354 15.9999 2.19766 15.7365 1.72882 15.2676C1.25997 14.7988 0.996582 14.1629 0.996582 13.4999V5.49987C0.996582 5.10205 1.15462 4.72052 1.43592 4.43921C1.71723 4.15791 2.09876 3.99987 2.49658 3.99987V3.99987ZM1.99658 13.4999C1.99658 13.8977 2.15462 14.2792 2.43592 14.5605C2.71723 14.8418 3.09876 14.9999 3.49658 14.9999H12.9966C13.2618 14.9999 13.5162 14.8945 13.7037 14.707C13.8912 14.5194 13.9966 14.2651 13.9966 13.9999V7.99987C13.9966 7.73465 13.8912 7.4803 13.7037 7.29276C13.5162 7.10523 13.2618 6.99987 12.9966 6.99987H2.49658C2.32158 6.99987 2.15258 6.96987 1.99658 6.91487V13.4999Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[56px]"
            >
              <path
                d="M7.99858 0.641871C8.11649 0.472824 8.26798 0.32989 8.44358 0.221987C8.61919 0.114085 8.81514 0.0435291 9.01923 0.0147228C9.22331 -0.0140835 9.43114 -0.000522375 9.62975 0.0545601C9.82836 0.109643 10.0135 0.205064 10.1736 0.334872L13.4436 2.98987C13.7358 3.22697 13.9282 3.56522 13.9826 3.93753C14.0371 4.30984 13.9496 4.68902 13.7376 4.99987H12.5176L12.9076 4.44087C12.9802 4.33733 13.0108 4.21012 12.9934 4.08488C12.976 3.95963 12.9117 3.84564 12.8136 3.76587L11.1296 2.39987L9.33358 4.99987H8.11658L10.3506 1.76787L9.54258 1.11187C9.48924 1.06859 9.42755 1.03676 9.36136 1.01837C9.29517 0.999983 9.2259 0.995433 9.15787 1.005C9.08984 1.01457 9.02452 1.03806 8.96597 1.074C8.90743 1.10993 8.85691 1.15755 8.81758 1.21387L6.17658 4.99887H4.95658L7.99858 0.641871V0.641871ZM11.4966 10.9999C11.364 10.9999 11.2368 11.0525 11.143 11.1463C11.0493 11.2401 10.9966 11.3673 10.9966 11.4999C10.9966 11.6325 11.0493 11.7597 11.143 11.8534C11.2368 11.9472 11.364 11.9999 11.4966 11.9999H12.4966C12.6292 11.9999 12.7564 11.9472 12.8501 11.8534C12.9439 11.7597 12.9966 11.6325 12.9966 11.4999C12.9966 11.3673 12.9439 11.2401 12.8501 11.1463C12.7564 11.0525 12.6292 10.9999 12.4966 10.9999H11.4966ZM2.49658 3.99987H4.66558L3.96558 4.99987H2.49658C2.36397 4.99987 2.2368 5.05255 2.14303 5.14632C2.04926 5.24009 1.99658 5.36726 1.99658 5.49987C1.99658 5.63248 2.04926 5.75966 2.14303 5.85342C2.2368 5.94719 2.36397 5.99987 2.49658 5.99987H12.9966C13.527 5.99987 14.0357 6.21058 14.4108 6.58566C14.7859 6.96073 14.9966 7.46944 14.9966 7.99987V13.9999C14.9966 14.5303 14.7859 15.039 14.4108 15.4141C14.0357 15.7892 13.527 15.9999 12.9966 15.9999H3.49658C2.83354 15.9999 2.19766 15.7365 1.72882 15.2676C1.25997 14.7988 0.996582 14.1629 0.996582 13.4999V5.49987C0.996582 5.10205 1.15462 4.72052 1.43592 4.43921C1.71723 4.15791 2.09876 3.99987 2.49658 3.99987V3.99987ZM1.99658 13.4999C1.99658 13.8977 2.15462 14.2792 2.43592 14.5605C2.71723 14.8418 3.09876 14.9999 3.49658 14.9999H12.9966C13.2618 14.9999 13.5162 14.8945 13.7037 14.707C13.8912 14.5194 13.9966 14.2651 13.9966 13.9999V7.99987C13.9966 7.73465 13.8912 7.4803 13.7037 7.29276C13.5162 7.10523 13.2618 6.99987 12.9966 6.99987H2.49658C2.32158 6.99987 2.15258 6.96987 1.99658 6.91487V13.4999Z"
                fill="#363853"
              />
            </svg>
          )}

          <Link
            to="/allExpenses"
            className="mr-6 relative left-[18px] text-lg"
            onClick={() => {
              handleClick("account");
            }}
          >
            All expenses
          </Link>
        </div>
      </div>

      <div
        className={
          activeLink === "logout"
            ? "mt-5 hover:bg-gray-800 px-2 pt-3 pb-10 w-[85%]   relative left-[25px] top-[161px] ml-3 h-10 rounded-md hover:cursor-pointer bg-gray-900 text-white"
            : "mt-5 hover:bg-gray-50 px-2 pt-3 pb-10 w-[85%]   relative left-[25px] top-[161px] ml-3 h-10 rounded-md hover:cursor-pointer"
        }
      >
        <div className="flex justify-center items-center ml-[-123px]">
          {activeLink === "logout" ? (
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 16H5V18H17V2H5V4H3V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0H18C18.2652 0 18.5196 0.105357 18.7071 0.292893C18.8946 0.48043 19 0.734784 19 1V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V16ZM5 9H12V11H5V14L0 10L5 6V9Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 16H5V18H17V2H5V4H3V1C3 0.734784 3.10536 0.48043 3.29289 0.292893C3.48043 0.105357 3.73478 0 4 0H18C18.2652 0 18.5196 0.105357 18.7071 0.292893C18.8946 0.48043 19 0.734784 19 1V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V16ZM5 9H12V11H5V14L0 10L5 6V9Z"
                fill="#636363"
              />
            </svg>
          )}

          <Link
            to="/logout"
            className="mr-6 relative left-[17px] text-lg"
            onClick={() => handleClick("logout")}
          >
            Log out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
