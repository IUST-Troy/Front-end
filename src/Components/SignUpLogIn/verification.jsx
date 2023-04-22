import React from "react";
import verificationimage from "../../Static/Wallpaper4.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsPatchExclamation } from "react-icons/bs";
import { HiLockOpen } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import { Tooltip } from "flowbite-react";
export default function Verification() {
  const [passwordValue, setPasswordValue] = React.useState("");
  const [passwordConfirmationValue, setPasswordConfirmationValue] =
    React.useState("");
  const [passwordErrorConfirmationValue, setPasswordErrorConfirmation] =
    React.useState(false);
  let navigate = useNavigate();
  const handlePassword = (e) => {
    e.preventDefault();
    setPasswordValue(e.target.value);
    setPasswordErrorConfirmation(
      e.target.value !== passwordConfirmationValue || e.target.value.length < 8
    );
  };
  const handleConfirmPassword = (e) => {
    e.preventDefault();
    setPasswordConfirmationValue(e.target.value);
    setPasswordErrorConfirmation(
      e.target.value !== passwordValue || e.target.value.length < 8
    );
  };
  const handleVerClick = () => {
    const password = passwordValue;
    const confirm = passwordConfirmationValue;
  };
  return (
    <div className="md:flex block justify-center items-center w-screen h-screen bg-cover overflow-auto test4">
      {/* <ToastContainer/> */}
      <div className="flex rounded-3xl w-[calc(100vw-20px)] max-w-4xl mx-auto my-8 overflow-hidden border-2 border-pallate-persian_green ">
        <img
          className="md:w-1/2 hidden md:block"
          src={verificationimage}
          alt=""
        />
        <div className="md:w-1/2 w-full bg-pallate-celeste/[0.89] p-8 px-8">
          <h2 className="text-4xl text-pallate-persian_green font-bold text-center">
            Verification
          </h2>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <div className="flex justify-start items-center">
              <HiLockClosed className="mr-1" />
              <label>Password</label>
              {passwordErrorConfirmationValue && passwordValue.length!==0 &&(
                <Tooltip content="please check the password" className="ml-2">
                  <BsPatchExclamation className="ml-2" />
                </Tooltip>
              )}
            </div>
            <input
              className={`p-2 rounded-xl border text-sm focus:ring-1 focus:outline-none bg-pallate-celeste_light mt-2 ${
                passwordErrorConfirmationValue && passwordValue.length!==0
                ? "border-red-500   focus:ring-red-500 focus:border-red-500"
                : "border-pallate-persian_green   focus:ring-pallate-persian_green  focus:border-pallate-persian_green"
            }   `}
              type="password"
              value={passwordValue}
              placeholder="Password"
              onChange={handlePassword}
            />
          </div>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <div className="flex justify-start items-center">
              <HiLockOpen className="mr-1" />
              <label>Confirm Password</label>
            </div>
            <input
              className={`p-2 rounded-xl border text-sm focus:ring-1 focus:outline-none bg-pallate-celeste_light mt-2 ${
                passwordErrorConfirmationValue && passwordConfirmationValue.length!==0
                  ? "border-red-500   focus:ring-red-500 focus:border-red-500"
                  : "border-pallate-persian_green   focus:ring-pallate-persian_green  focus:border-pallate-persian_green"
              }   `}
              type="password"
              value={passwordConfirmationValue}
              placeholder="Confirm Password"
              onChange={handleConfirmPassword}
            />
          </div>
          <button
            className="w-full my-6 py-3 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
            disabled={
              passwordErrorConfirmationValue || passwordValue.length === 0
            }
            onClick={handleVerClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
