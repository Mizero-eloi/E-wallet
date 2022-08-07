import React from "react";
import SignUpInput from "./SignUpInput";

function SignUpForm(props) {
  return (
    <>
      <div className="w-[39%] m-auto">
        {/* the sign up form  */}

        <h2 className="w-[33%] text-4xl text-center m-auto relative top-[83px]">
          Sign up to E-wallet
        </h2>
        <form>
          <div className="p-[20px] mt-[90px]">
            <SignUpInput placeholder={"username"} />
            <SignUpInput placeholder={"email"} />
            <SignUpInput placeholder={"password"} />
            <button className="mt-8 py-[17px] px-[20px] w-[81%] relative left-[50px] rounded-3xl outline-none  font-semibold bg-gray-900 text-white">
              {" "}
              Sign up
            </button>
            <div className="ml-12 mt-[35px] flex">
              <p>Already have an account ?</p>
              <span className="w-[36%] font-semibold"> &nbsp;Log in</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
