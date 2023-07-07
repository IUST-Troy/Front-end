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
        <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Explore{" "}
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-pallate-persian_green">
              {" "}
              The Wonders
            </span>{" "}
          </h1>

          <div className="container md:flex text-1xl font-bold dark:text-white text-white justify-end ">
            <h1>
              <button className="p-4" onClick={gotoalltours}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["Click For All Places"],
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
