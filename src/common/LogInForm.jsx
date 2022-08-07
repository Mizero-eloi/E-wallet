import React, { useState } from "react";
import SignUpInput from "./SignUpInput";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

function LogInForm(props) {
  const [customer, setCustomer] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const schema = {
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(4).max(20).required(),
  };

  const validateForm = (event) => {
    event.preventDefault();
    const result = Joi.validate(customer, schema, { abortEarly: false });
    console.log(result);
    const { error } = result;
    if (!error) {
      return null;
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      console.log(errors);
      setErrors(errorData);
      return errorData;
    }
  };

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let customerData = { ...customer };
    customerData[name] = value;
    setCustomer(customerData);
    setErrors(errorData);
  };

  console.log("Customer data", customer);

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  const clearState = () => {
    setCustomer({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div className="w-[39%] m-auto">
        {/* the sign up form  */}

        <h2 className="w-[33%] text-4xl text-center m-auto relative top-[83px]">
          Sign up to{" "}
          <span className="text-blue-700 text-3xl font-semibold">E-wallet</span>
        </h2>
        <form>
          <div className="p-[20px] mt-[90px]">
            <SignUpInput
              placeholder={"username"}
              name="username"
              value={customer.username}
              onInputChange={handleSave}
            />
            {errors.username && (
              <p className="text-red-500 mt-[10px] ml-[52px]">
                {errors.username}
              </p>
            )}

            <SignUpInput
              placeholder={"password"}
              name="password"
              value={customer.password}
              onInputChange={handleSave}
            />
            {errors.password && (
              <p className="text-red-500 mt-[10px] ml-[52px]">
                {errors.password}
              </p>
            )}
            <button
              className="mt-8 py-[17px] px-[20px] w-[81%] relative left-[50px] rounded-3xl outline-none  font-semibold bg-gray-900 text-white"
              onClick={validateForm}
            >
              {" "}
              Log in
            </button>
            <div className="ml-12 mt-[35px] flex">
              <p className="text-gray-500">Already have an account ?</p>
              <Link to="/login" className="w-[36%] font-semibold">
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