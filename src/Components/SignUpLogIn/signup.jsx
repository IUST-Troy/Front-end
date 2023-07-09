import React from "react";
import Signupimage from "../../Static/Wallpaper4.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./wall.css";
import { useNavigate } from "react-router-dom";
import { BsPatchExclamation } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsPersonFillLock } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { HiLockOpen } from "react-icons/hi";
import { Select } from "flowbite-react";

import { IoMdSend } from "react-icons/io5";
import { Tooltip } from "flowbite-react";
export default function Signup() {
  const [firstNameValue, setFirstNameValue] = React.useState("");
  const [lastNameValue, setLastNameValue] = React.useState("");
  const [userNameValue, setUserNameValue] = React.useState("");
  const [RoleValue , setRoleValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [passwordConfirmationValue, setPasswordConfirmationValue] =
    React.useState("");
  const [emailErrorValue, setEmailErrorValue] = React.useState(false);
  const [passwordErrorConfirmationValue, setPasswordErrorConfirmation] =
    React.useState(false);
  let navigate = useNavigate();
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
    setEmailErrorValue(
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) &&
        e.target.value !== ""
    );
  };
  const handleUsername = (e) => {
    e.preventDefault();
    setUserNameValue(
      e.target.value.replace(/[^a-zA-Z0-9_.]/g, "").replace(/^[^a-zA-Z]/g, "")
    );
  };
  const handleRole = (e) => {
    e.preventDefault();
    console.log(e);
    setRoleValue(e.target.value);
  };
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

  const handleSignUpClick = () => {
    const fn = firstNameValue;
    const ln = lastNameValue;
    const email = emailValue;
    const username = userNameValue;
    const rl = RoleValue;
    const password = passwordValue;
    const confirm = passwordConfirmationValue;
    console.log("got here");
    axios
      .post(
        "http://mrsz.pythonanywhere.com/auth/users/",
        {
          email: email,
          username: username,
          first_name: fn,
          last_name: ln,
          role:rl,
          password: password,
          re_password: confirm,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("Congratulations! Your sign-up was successful! ", {
          position: "top-center",
          autoClose: 1500,
          className: "toast-message",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        console.log(res.data);
        navigate("/sign-in");
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 1500,
          className: "toast-message",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        console.log(err);
        // window.location.replace('/sign-in')
      });
  };
  return (
    <div className="md:flex block justify-center items-center w-screen h-screen bg-cover overflow-auto test">
      {/* <ToastContainer/> */}
      <div className="flex rounded-3xl w-[calc(100vw-20px)] max-w-4xl mx-auto my-8 overflow-hidden border-2 border-none ">
        <ToastContainer/>
        <img className="md:w-1/2 hidden md:block" src={Signupimage} alt="" />
        <div className="md:w-1/2 w-full bg-pallate-celeste/[0.89]  p-8 px-8">
          <h2 className="text-4xl text-pallate-persian_green font-bold text-center my-4 mt-0">
            Sign Up
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <div className="flex justify-start items-center">
                <BsPersonFill className="mr-1" />
                <label>Firstname</label>
              </div>
              <input
                className="w-full md:w-48 p-2 rounded-xl border text-sm border-pallate-persian_green  focus:ring-1 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                onChange={handleFirstName}
                placeholder="First name"
                value={firstNameValue}
                maxLength={35}
              />
            </div>
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <div className="flex justify-start items-center">
                <BsPersonFill className="mr-1" />
                <label>Lastname</label>
              </div>
              <input
                className="w-full md:w-48 p-2 rounded-xl border text-sm border-pallate-persian_green  focus:ring-1 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                value={lastNameValue}
                placeholder="Last name"
                onChange={handleLastName}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-2 grid-cols-1">
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <div className="flex justify-start items-center">
                <BsPersonFillLock className="mr-1" />
                <label>Username</label>
              </div>
              <input
                className=" w-full md:w-48 p-2 rounded-xl border text-sm border-pallate-persian_green focus:ring-1 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green focus:outline-none"
                placeholder="Username"
                value={userNameValue}
                onChange={handleUsername}
              />
              
            </div>
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <div className="flex justify-start items-center">
                <BsPersonFillLock className="mr-1" />
                <label>Role</label>
              </div>
              <Select
                class="p-2 w-full md:w-48 border text-sm border-pallate-persian_green focus:ring-1 rounded-xl bg-pallate-celeste_light mt-2 focus:ring-pallate-persian_green focus:border-pallate-persian_green focus:outline-none"
                value={RoleValue}
                onChange={handleRole}
                  // console.log(e.target.value);
                  >
                <option selected>Select</option>
                <option value="C">Normal user</option>
                <option value="O">Organization</option>
                <option value="T">Tour leader</option>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-2 grid-cols-1">
            <div className="flex flex-col text-gray-500 text-lg py-2">
              <div className=" flex justify-start items-center">
                <HiLockClosed className="mr-1" />
                <label>Password</label>
                {passwordErrorConfirmationValue && passwordValue.length!==0 &&(
                  <Tooltip content="please check the password" className="ml-2">
                    <BsPatchExclamation className="ml-2" />
                  </Tooltip>
                )}
              </div>
              <input
                className={`w-full md:w-48 p-2 rounded-xl border text-sm focus:ring-1 focus:outline-none bg-pallate-celeste_light mt-2 ${
                  passwordErrorConfirmationValue && passwordValue.length!==0
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
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
                className={`w-full md:w-48 p-2 rounded-xl border text-sm focus:ring-1 focus:outline-none bg-pallate-celeste_light mt-2 ${
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
          </div>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <div className="flex justify-start items-center">
              <BsEnvelopeFill className="mr-1" />
              <label>Email Address </label>
              {emailErrorValue && (
                <Tooltip content="please enter a valid email" className="ml-2">
                  <BsPatchExclamation className="ml-2" />
                </Tooltip>
              )}
            </div>
            <input
              className={`p-2 rounded-xl border text-sm focus:ring-1 focus:outline-none  bg-pallate-celeste_light mt-2 ${
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
          <button
            className="w-full my-6 py-3 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
            disabled={
              passwordErrorConfirmationValue ||
              emailErrorValue ||
              userNameValue.length === 0 ||
              firstNameValue.length === 0 ||
              lastNameValue.length === 0 ||
              passwordValue.length === 0 ||
              emailValue.length === 0 ||
              RoleValue === ("Select" || "" || null || undefined) 
            }
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <p className="Already_registered text-center text-gray-500 text-lg py-2">
            Already registered ?{" "}
            <a
              href="/sign-in"
              class="text-primary-600 hover:underline text-pallate-persian_green"
            >
              Click here to Login{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
