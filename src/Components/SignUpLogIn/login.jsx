import React from "react";
import loginImg from "../../Static/Wallpaper4.png";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-screen h-screen  bg-blue-300">
      <div className="flex rounded-3xl w-[calc(100vw-20px)] max-w-4xl mx-auto my-8 overflow-hidden max-h-[60vh] border border-pallate-persian_green">
        <img className="md:w-1/2 hidden md:block" src={loginImg} alt="" />
        <form className="md:w-1/2 w-full bg-pallate-celeste/[0.60]  p-8 px-8">
          <h2 className="text-4xl text-pallate-persian_green font-bold text-center">Login</h2>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <label>Email Address</label>
            <input 
              className="p-2 rounded-xl border border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green  focus:outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col text-gray-500 text-lg py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-xl border border-pallate-persian_green  focus:ring-2 focus:ring-pallate-persian_green bg-pallate-celeste_light mt-2 focus:border-pallate-persian_green  focus:outline-none"
              type="password"
            />
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white  rounded-xl">
            Login
          </button>
          <div className="flex justify-between text-gray-500 py-2">
            <p className="forgot-password text-left">
               <a href="/forget">Forgot Password ?</a>
               <p>Dont have an account ?</p>
               <a href="/sign-up">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
