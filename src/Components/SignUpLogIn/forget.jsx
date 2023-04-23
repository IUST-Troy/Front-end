import React from "react";
import forgetimage from "../../Static/Wallpaper4.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsPatchExclamation, BsShieldFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { Tooltip } from "flowbite-react";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
export default function Forget() {
    let navigate = useNavigate()
    React.useEffect(() => {
        if (localStorage.getItem("acctoken")) {
            navigate("/home");
        }
    }, []);
    const [emailValue, setEmailValue] = React.useState("");
    const [emailErrorValue, setEmailErrorValue] = React.useState(false);
    const [disableSendButton, setDisableSendButton] = React.useState(false);
    const [emailSent, setEmailSent] = React.useState(false);
    const [passwordValue, setPasswordValue] = React.useState("");
    const [passwordConfirmationValue, setPasswordConfirmationValue] =
        React.useState("");
    const [passwordErrorConfirmationValue, setPasswordErrorConfirmation] =
        React.useState(false);
    const [codeValue, setCodeValue] = React.useState("");

    const handleCode = (e) => {
        e.preventDefault();
        setCodeValue(e.target.value);
    };
    const handleEmail = (e) => {
        e.preventDefault();
        setEmailValue(e.target.value);
        setEmailErrorValue(
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) &&
                e.target.value !== ""
        );
    };
    const handlePassword = (e) => {
        e.preventDefault();
        setPasswordValue(e.target.value);
        setPasswordErrorConfirmation(
            e.target.value !== passwordConfirmationValue ||
                e.target.value.length < 8
        );
    };

    const handleConfirmPassword = (e) => {
        e.preventDefault();
        setPasswordConfirmationValue(e.target.value);
        setPasswordErrorConfirmation(
            e.target.value !== passwordValue || e.target.value.length < 8
        );
    };

    const handleForgetClick = () => {
        const email = emailValue;
        setDisableSendButton(true);
        axios
            .post(
                "http://mrsz.pythonanywhere.com/account/forgot_password",
                { email: email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res);
                setEmailSent(true);
                toast.info(
                    "code sent to your email, Please enter the code and your new password",
                    {
                        position: "top-right",
                        autoClose: 1500,
                        className: "toast-message",
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                    }
                );
            })
            .catch((err) => {
                setDisableSendButton(false);
                console.log(err);
                toast.info(err.message, {
                    position: "top-right",
                    autoClose: 1500,
                    className: "toast-message",
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            });
    };
    const newPasswordHandle = () => {
        const code = codeValue;
        const password = passwordValue;
        const passwordConfirm = passwordConfirmationValue;

        const data = {
            code: code,
            password: password,
            retype_password: passwordConfirm,
        };
        axios
            .post(
                "http://mrsz.pythonanywhere.com/account/change_password",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res);
                toast.success(
                    "Password Changed Successfully, Redirecting to  sign-in...",
                    {
                        position: "top-right",
                        autoClose: 1500,
                        className: "toast-message",
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                    }
                );
                setTimeout(() => {
                    navigate("/sign-in")
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
                toast.info(err.message, {
                    position: "top-right",
                    autoClose: 1500,
                    className: "toast-message",
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            });
    };
    return (
        <div className="md:flex block justify-center items-center w-screen h-screen bg-cover overflow-auto test3 ">
            <ToastContainer />
            <div className="flex rounded-3xl w-[calc(100vw-20px)]  max-w-4xl mx-auto my-8 overflow-hidden border-2  border-none">
                <img
                    className="md:w-1/2 hidden md:block"
                    src={forgetimage}
                    alt=""
                />
                <div className="md:w-1/2 w-full bg-pallate-celeste/[0.80]  p-8 px-8">
                    <h2 className="text-4xl text-pallate-persian_green font-bold text-center ">
                        Forget
                    </h2>
                    <div className="flex flex-col text-gray-500 text-lg py-2">
                        <div className="flex justify-start items-center">
                            <BsEnvelopeFill className="mr-1" />
                            <label>Email Address</label>
                            {emailErrorValue && (
                                <Tooltip
                                    content="please enter a valid email"
                                    className="ml-2"
                                >
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
                            disabled={disableSendButton}
                        />
                    </div>

                    <button
                        className="w-full my-6 py-3  bg-teal-500 disabled:bg-opacity-80 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
                        disabled={
                            emailErrorValue ||
                            emailValue.length === 0 ||
                            disableSendButton
                        }
                        onClick={handleForgetClick}
                    >
                        Send
                    </button>
                    {emailSent&&(
                            <div>
                                {/* <p className="pb-3">
                                    Please {}s wait to send code again
                                </p> */}
                                <div className="flex justify-start items-center text-gray-500">
                                    <BsShieldFill className="mr-1" />
                                    <label>Code</label>
                                </div>
                                <input
                                    className={`p-2 w-full rounded-xl border text-sm focus:ring-1 focus:outline-none bg-pallate-celeste_light mt-2 border-pallate-persian_green   focus:ring-pallate-persian_green  focus:border-pallate-persian_green `}
                                    value={codeValue}
                                    placeholder="Code"
                                    onChange={handleCode}
                                    maxLength={6}
                                />
                                <div className="grid md:grid-cols-2 md:gap-2 grid-cols-1">
                                    <div className="flex flex-col text-gray-500 text-lg py-2">
                                        <div className="flex justify-start items-center">
                                            <HiLockClosed className="mr-1" />
                                            <label>Password</label>
                                            {passwordErrorConfirmationValue && passwordValue.length !== 0 && (
                                                <Tooltip
                                                    content="please check the password"
                                                    className="ml-2"
                                                >
                                                    <BsPatchExclamation className="ml-2" />
                                                </Tooltip>
                                            )}
                                        </div>
                                        <input
                                            className={`p-2 rounded-xl border text-sm focus:ring-1 focus:outline-none bg-pallate-celeste_light mt-2 ${
                                                passwordErrorConfirmationValue &&
                                                passwordValue.length !== 0
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
                                                passwordErrorConfirmationValue &&
                                                passwordConfirmationValue.length !==
                                                    0
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
                                <button
                                    className="w-full my-6 py-3  bg-teal-500 disabled:bg-opacity-80 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 rounded-xl font-blod text-white "
                                    onClick={newPasswordHandle}
                                    disabled={codeValue.length !==6 || passwordValue.length < 8 || passwordErrorConfirmationValue}
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}
