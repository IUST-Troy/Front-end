import React from "react";
import forgetimage from "../../Static/Wallpaper4.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsPatchExclamation } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { Tooltip } from "flowbite-react";
export default function Forget() {
  const [emailValue, setEmailValue] = React.useState("");
  const [emailErrorValue, setEmailErrorValue] = React.useState(false);
  const handleEmail = (e) => {
    e.preventDefault();
    setEmailValue(e.target.value);
    setEmailErrorValue(
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) &&
        e.target.value !== ""
    );
  };

  const handleForgetClick = () => {
    const email = emailValue;
  };
  return (
    <div className="md:flex block justify-center items-center w-screen h-screen bg-cover overflow-auto test3">
      {/* <ToastContainer/> */}
      <div className="flex rounded-3xl w-[calc(100vw-20px)] max-w-4xl mx-auto my-8 overflow-hidden border-2 border-pallate-persian_green ">
        <img className="md:w-1/2 hidden md:block" src={forgetimage} alt="" />
        <div className="md:w-1/2 w-full bg-pallate-celeste/[0.89]  p-8 px-8">
          <h2 className="text-4xl text-pallate-persian_green font-bold text-center ">
            Forget
          </h2>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <div className="flex justify-start items-center">
            <BsEnvelopeFill className="mr-1" />
              <label>Email Address</label>
              {emailErrorValue && (
                <Tooltip content="please enter a valid email" className="ml-2">
                  <BsPatchExclamation className="ml-2" />
                </Tooltip>
              )}
            </div>
            <input
              className={`p-2 rounded-xl border text-sm focus:ring-1 focus:outline-none bg-pallate-celeste_light mt-2 ${
                emailErrorValue
                ? "border-red-500   focus:ring-red-500 focus:border-red-500"
                : "border-pallate-persian_green   focus:ring-pallate-persian_green  focus:border-pallate-persian_green"
            }   `}
              type="email"
              value={emailValue}
              placeholder="Email Address"
              onChange={handleEmail}
            />
          </div>
          {/* <div className="divide-y divide-solid divide-pallate-persian_green "> */}
          <button
            className="w-full my-6 py-3 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
            disabled={
              emailErrorValue ||
              emailValue.length === 0
            }
            onClick={handleForgetClick}
          >
            Submit
          </button>
          {/* <div className="flex justify-between flex-auto items-center text-gray-500 text-lg py-2"> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
