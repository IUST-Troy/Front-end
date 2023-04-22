import React from "react";
import loginImg from "../../Static/Wallpaper4.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirectToHome } from "../Routes/TokenCheker";
const loginURL = "http://mrsz.pythonanywhere.com/auth/jwt/create/";
const profileURL = "http://mrsz.pythonanywhere.com/Profile/me/";
const userURL = "http://mrsz.pythonanywhere.com/auth/users/me/";

export default function Login() {
    const [userNameValue, setUserNameValue] = React.useState("");
    const [passwordValue, setPasswordValue] = React.useState("");
    const [disabledButtonValue, setDisabledButtonValue] = React.useState(false);
    let navigate = useNavigate();
    
    React.useEffect(() => {
        if(localStorage.getItem("acctoken")){
            navigate("/home")
        }
    },[])
    const handleUserNameValue = (e) => {
        e.preventDefault();
        setUserNameValue(
            e.target.value
                .replace(/[^a-zA-Z0-9_.]/g, "")
                .replace(/^[^a-zA-Z]/g, "")
        );
    };

    const handlePasswordValue = (e) => {
        e.preventDefault();
        setPasswordValue(e.target.value);
    };
    const SigninNotSuccessToast = (err) =>
        toast.error("Sign-in NOT Sucessful " + err.message, {
            position: "top-center",
            autoClose: 1500,
            className: "toast-message",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });

    const signInError = (err) => {
        console.log(err);
        SigninNotSuccessToast(err);
        setTimeout(() => {
            setDisabledButtonValue(false);
        }, 1500);
    };

    const handleLoginClick = () => {
        const username = userNameValue;
        const password = passwordValue;

        const postBody = {
            username: username,
            password: password,
        };
        setDisabledButtonValue(true);
        axios
            .post(loginURL, postBody, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                console.log(res.data);
                const acctoken = res.data.access;
                localStorage.setItem("acctoken", acctoken);
                localStorage.setItem("reftoken", res.data.reftoken);
                localStorage.setItem("password", password);
                localStorage.setItem("username", username);
                axios
                    .get(userURL, {
                        headers: {
                            Authorization: `JWT ${acctoken}`,
                            "Content-Type": "application/json",
                        },
                    })
                    .then((res) => {
                        localStorage.setItem("firstname", res.data.first_name);
                        localStorage.setItem("lastname", res.data.last_name);
                        localStorage.setItem("email",res.data.email)
                        axios
                            .get(profileURL, {
                                headers: {
                                    Authorization: `JWT ${acctoken}`,
                                    "Content-Type": "application/json",
                                },
                            })
                            .then((res) => {
                                console.log(res.data);
                                localStorage.setItem(
                                    "avatar",
                                    res.data.profile_image
                                );
                                localStorage.setItem("bio", res.data.bio);
                                localStorage.setItem("gender", res.data.gender);
                                localStorage.setItem(
                                    "country",
                                    res.data.country
                                );
                                localStorage.setItem("city", res.data.city);
                                localStorage.setItem("birthdate",res.data.birth_date?res.data.birth_date:"1923-01-01")
                                toast.success("Sign-in Sucessful", {
                                    position: "top-center",
                                    autoClose: 1500,
                                    className: "toast-message",
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: false,
                                    draggable: false,
                                    theme: "colored",
                                    progress: undefined,
                                });
                                setTimeout(() => {
                                    navigate("/home", {
                                        preventScrollReset: false,
                                    });
                                }, 1500);
                            })
                            .catch((err) => {
                                signInError(err);
                            });
                    })
                    .catch((err) => {
                        signInError(err);
                    });
            })
            .catch((err) => {
                signInError(err);
            });
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen  bg-blue-300">
            <div className="flex rounded-3xl w-[calc(100vw-20px)] max-w-4xl mx-auto my-8 overflow-hidden max-h-[60vh] border border-pallate-persian_green">
                <img
                    className="md:w-1/2 hidden md:block"
                    src={loginImg}
                    alt=""
                />
                <div className="md:w-1/2 w-full bg-pallate-celeste/[0.60]  p-8 px-8">
                    <h2 className="text-4xl text-pallate-persian_green font-bold text-center">
                        Login
                    </h2>
                    <div className="flex flex-col text-gray-500 text-lg py-2">
                        <label>Username</label>
                        <input
                            className="p-2 rounded-xl border border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green  focus:outline-none"
                            value={userNameValue}
                            onChange={handleUserNameValue}
                        />
                    </div>
                    <div className="flex flex-col text-gray-500 text-lg py-2">
                        <label>Password</label>
                        <input
                            className="p-2 rounded-xl border border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green  focus:outline-none"
                            type="password"
                            value={passwordValue}
                            onChange={handlePasswordValue}
                        />
                    </div>
                    <button
                        className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white  rounded-xl"
                        onClick={handleLoginClick}
                        disabled={
                            disabledButtonValue || passwordValue.length < 8
                        }
                    >
                        Login
                        <ToastContainer />
                    </button>
                    <div className="flex justify-between text-gray-500 py-2">
                        <p className="forgot-password text-left">
                            <a href="/forget">Forgot Password ?</a>
                            <p>Dont have an account ?</p>
                            <a href="/sign-up">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
