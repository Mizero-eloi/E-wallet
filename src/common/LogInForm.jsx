import React from "react";
import SignUpInput from "./SignUpInput";
import { Link } from "react-router-dom";

function LogInForm(props) {
  return (
    <>
      <div className="w-[39%] m-auto">
        {/* the sign up form  */}

        <h2 className="w-[33%] text-4xl text-center m-auto relative top-[83px]">
          Log in to{" "}
          <span className="text-blue-700 text-3xl font-semibold">E-wallet</span>
        </h2>
        <form>
          <div className="p-[20px] mt-[90px]">
            <SignUpInput placeholder={"username"} />
            {/* <SignUpInput placeholder={"email"} /> */}
            <SignUpInput placeholder={"password"} />
            <button className="mt-8 py-[17px] px-[20px] w-[81%] relative left-[50px] rounded-3xl outline-none  font-semibold bg-gray-900 text-white">
              {" "}
              Log in
            </button>
            <div className="ml-12 mt-[35px] flex">
              <p className="text-gray-500">Already have an account ?</p>
              <Link to="/signup" className="w-[36%] font-semibold">
                {" "}
                &nbsp;Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogInForm;
