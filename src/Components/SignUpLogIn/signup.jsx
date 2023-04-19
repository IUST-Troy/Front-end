import React from "react";
import loginImg from "../../Static/Wallpaper4.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsPatchExclamation } from "react-icons/bs";
import { Tooltip } from "flowbite-react";
export default function Signup() {
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [userNameValue, setUserNameValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [passwordConfirmationValue, setPasswordConfirmationValue] = React.useState("");
  const [emailErrorValue, setEmailErrorValue] = React.useState(false);
  const [passwordErrorValue, setPasswordErrorValue] = React.useState(false);

  const handleFirstName = (e) => {
    e.preventDefault();
    setFirstNameValue(e.target.value.replace(/[^a-zA-Z]/g, ""));
  };

  const handleLastName = (e) => {
    e.preventDefault();
    setLastNameValue(e.target.value.replace(/[^a-zA-Z]/g, ""));
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmailValue(e.target.value);
    setEmailErrorValue(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) && e.target.value!== "");
  };
  const handleUsername = (e) => {
    e.preventDefault();
    setUserNameValue(
      e.target.value.replace(/[^a-zA-Z0-9_.]/g, "").replace(/^[^a-zA-Z]/g, "")
    );
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPasswordValue(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setPasswordConfirmationValue(e.target.value);
  };

  return (
    <div className="flex justify-center align-items-center w-screen h-screen bg-blue-300">
      <div className="flex rounded-3xl w-[calc(100vw-20px)] max-w-4xl mx-auto my-8 overflow-hidden border border-pallate-persian_green">
        <img className="md:w-1/2 hidden md:block" src={loginImg} alt="" />
        <form className="md:w-1/2 w-full bg-pallate-celeste/[0.60]  p-8 px-8">
          <h2 className="text-4xl text-pallate-persian_green font-bold text-center">
            Sign Up
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <label>Firstname</label>
              <input
                className="p-2 rounded-xl border text-sm border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                onChange={handleFirstName}
                value={firstNameValue}
                maxLength={35}
              />
            </div>
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <label>Lastname</label>
              <input
                className="p-2 rounded-xl border text-sm border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                value={lastNameValue}
                onChange={handleLastName}
              />
            </div>
          </div>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <label>Username</label>
            <input
              className="p-2 rounded-xl border text-sm border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
              value={userNameValue}
              onChange={handleUsername}
            />
          </div>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <div className="flex justify-start items-center">
              <label>Email Address </label>
              {emailErrorValue && (
                <Tooltip content="please enter a valid email"  className="ml-2" >
                  <BsPatchExclamation className="ml-2"/>
                </Tooltip>
              )}
            </div>
            <input
              className={`p-2 rounded-xl border text-sm focus:ring-2 focus:outline-none bg-pallate-celeste_light mt-2 ${emailErrorValue?"border-red-500 foucs:border-red-500 focus:ring-red-500":"border-pallate-persian_green   focus:ring-pallate-persian_green  focus:border-pallate-persian_green"}   `} 
              type="email"
              value={emailValue}
              onChange={handleEmail}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-2 grid-cols-1">
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <label>Password</label>
              <input
                className="p-2 rounded-xl border border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green  focus:outline-none"
                type="password"
              />
            </div>
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <label>Confirm Password</label>
              <input
                className="p-2 rounded-xl border border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green  focus:outline-none"
                type="password"
              />
            </div>
          </div>
          {/* <div className="divide-y divide-solid divide-pallate-persian_green "> */}
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white ">
            Sign Up
          </button>
          <div className="flex justify-between text-gray-500 text-lg py-2 ">
            <p className="Already registered text-center">
              Already registered ? <a href="/sign-in">Click here to Login</a>
            </p>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
