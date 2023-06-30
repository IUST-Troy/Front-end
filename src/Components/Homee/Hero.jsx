import React from "react";
import { IconButton, Slide } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import pisholi from "../../Static/pisholi4.jpg";

const Hero = () => {
  return (
    <div>
      <div>
        <Header />
        <Navbar />
        {/* <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Private Beaches & Getaways
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className='bg-white text-black '>Reserve Now</button>
        </div>
      </div>
    </div> */}
      </div>

      <div className="w-full  h-screen">
        <img
          className="top-0 left-0 w-full h-screen object-cover "
          src={pisholi}
          alt="/"
        />
        <div className=" absolute top-0 left-0 w-full h-screen " />
        <div className="absolute top-0 w-full h-full flex flex-col justify-end  ">
          <div className="md:left-[10%] w-full m-auto absolute p-8  rounded-3xl text-white">
            <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">
              Private Beaches & Getaways
            </h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut
              quis est, id consequuntur sequi ipsum vitae sit non
              exercitationem.
            </p>

            <div className="">
              <Scroll to="tours-in-Seasonal" smooth={true}>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-400 group-hover:from-green-400 group-hover:to-blue-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
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

              <Scroll to="tours-in-week" smooth={true}>
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
            <slide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
