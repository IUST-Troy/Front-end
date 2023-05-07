import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <section className="test md:flex block justify-center items-center w-screen h-screen bg-cover overflow-auto dark:bg-gray-900 dark:text-gray-100 text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-4xl font-semibold md:text-4xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400 font-bold">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
        <button
            className=" w-full my-6 py-3 bg-pallate-celeste/[0.4] shadow-lg  hover:scale-y-105 rounded-xl font-blod text-white "
          onClick={()=> navigate("/home")}
          >  
            Back to homepage
        </button>
        </div>
      </div>
    </section>
  );
}

