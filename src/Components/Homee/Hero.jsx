import React from "react";
import { IconButton, Slide } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../NavigationBar/Header";
import hometour from "../../Static/hometour.jpg";
import Typewriter from "typewriter-effect";
import Navbar from "../NavigationBar/Navbar";
import pisholi from "../../Static/pisholi4.jpg";

const Hero = () => {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
        <div  className=" bg-white w-full  mx-auto p-4 card-bg ">
      <div></div>
      <div className="max-h-[500px] relative ">
        {/* Overlay */}
        <div className="p-4  absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Private Beaches & Getaways{" "}
          </h1>
        

          <div className="container md:flex text-xl font-bold dark:text-white text-white">
            <h1>
              <button className="p-4" >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo utquis est, id consequuntur sequi ipsum vitae sit nonexercitationem."],
                  }}
                />
              </button>
            </h1>
          </div>
          <div className="p-5">
              <Scroll to="tours-in-Seasonal" smooth={true}>
                <button class=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-400 group-hover:from-green-400 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Seasonal recommendations
                  </span>
                  <ExpandMoreIcon
                    className="goDown"
                    sx={{
                      fontSize: 50,
                      // "&:hover": {
                      //   backgroundColor: "rgba(186, 232, 219, 0.438)",
                      // },
                    }}
                  />
                </button>
              </Scroll>

              <Scroll to="tours-in-week" smooth={true} className="p-3">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-400 group-hover:from-green-400 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Recommended place this week
                  </span>
                  <ExpandMoreIcon
                    className="goDown"
                    sx={{
                      fontSize: 50,
                      // "&:hover": {
                      //   backgroundColor: "rgba(186, 232, 219, 0.438)",
                      // },
                    }}
                  />
                </button>
              </Scroll>

              <Scroll to="tours-to-visit" smooth={true}>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-400 group-hover:from-green-400 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    All Tours and Places
                  </span>
                  <ExpandMoreIcon
                    className="goDown"
                    sx={{
                      fontSize: 50,
                      // "&:hover": {
                      //   backgroundColor: "rgba(186, 232, 219, 0.438)",
                      // },
                    }}
                  />
                </button>
              </Scroll>
            </div>
        </div>

        <img
          className="w-full max-h-[500px] object-cover"
          src={pisholi}
          alt="/"
        />
      </div>
    </div>
      </div>


    </div>
  );
};

export default Hero;
