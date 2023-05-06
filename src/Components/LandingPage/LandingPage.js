import Particle from "./Particle";
import React from "react";
import Typewriters from "./Typewriters";
import BTN from "./button";
import "../../Styles/LandingPage/LandingPage.scss";


const LandingPage = () => {
  return (
    <div className="test5 test8 bg-cover bg-fixed bg-center bg-transparent">
      <Particle />
      <nav class=" border-gray-200 px-4 lg:px-3 py-2.5 dark:bg-gray-800 h-48">
        <div class=" flex flex-wrap mr-2 justify-between items-center mx-auto max-w-screen-xl">
          <div class="flex items-center"></div>
          <div class="flex items-center gap-4 lg:order-2">
            <BTN name="Login" route="/sign-in"/>
            <BTN name="Sign Up" route= "/sign-up"/>
          </div>
        </div>
      </nav>
      <section className="position-fixed dark:bg-gray-900 test8">
        <div className=" grid py-8 test8 position-fixed px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center mr-auto ml-10 lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-4xl font-bold leading-none md:text-5xl xl:text-5xl dark:text-white">
              Welcome to Troy Website
            </h1><br></br>
            <h1 class="mb-4 max-w-2xl text-4xl font-blod leading-none md:text-5xl xl:text-5xl dark:text-white text-white">
              Explore The World 
            </h1>
            <div className="container md:flex text-xl font-bold text-white">
              <h1>
                <Typewriters
                />
              </h1>
            </div>
            {/* <p class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>  */}
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
