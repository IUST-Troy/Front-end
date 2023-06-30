import React from "react";
import hometour from "../../Static/alltours.jpg";
import Typewriter from "typewriter-effect";
const gotoalltours = () => {
  window.location.href = "/PlacesList";
};
const Hero = () => {
  return (
    <div id="tours-to-visit" className=" bg-white w-full  mx-auto p-4 card-bg ">
      <div></div>
      <div className="max-h-[500px] relative ">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col right-0 justify-center text-right">
          <h1 className="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pr-20">
            Explore The
          </h1>
          <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-pallate-persian_green">The Wonders</span>
          </h1>

          <div className="container md:flex text-1xl font-bold dark:text-white text-white justify-end ">
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
