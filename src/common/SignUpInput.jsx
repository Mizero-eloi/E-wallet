import React from "react";

function SignUpInput({ placeholder, onInputChange, name, value }) {
  return (
    <input
      className="mt-8 py-[17px] px-[20px] w-[81%] relative left-[50px] rounded-3xl outline-none border-[3px]  font-semibold"
      type={placeholder === "password" ? "password" : "text"}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onInputChange}
    />
  );
}

export default SignUpInput;
