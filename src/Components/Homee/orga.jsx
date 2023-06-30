import React from "react";
import hometour from "../../Static/hometour.jpg";
import Typewriter from "typewriter-effect";
const gotoalltours = () => {
  window.location.href = "/sign-up";
};
const Hero = () => {
  return (
    <div id="tours-to-visit" className=" bg-white w-full  mx-auto p-4 card-bg ">
      <div></div>
      <div className="max-h-[500px] relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Experience{" "}
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-pallate-persian_green">
              {" "}
              your best travels
            </span>{" "}
          </h1>

          <div className="container md:flex text-xl font-bold dark:text-white text-white">
            <h1>
              <button className="p-4" onClick={gotoalltours}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["Click For All Tours"],
                  }}
                />
              </button>
            </h1>
          </div>
        </div>

        <img
          className="w-full max-h-[500px] object-cover"
          src={hometour}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
