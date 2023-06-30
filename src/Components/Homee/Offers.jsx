import React, { useState } from "react";
import { data } from "./data.js";
import pisholi from "../../Static/pisholi4.jpg";
import { Button, Card, Select } from "flowbite-react";
import Typewriter from "typewriter-effect";

import { Swiper, SwiperSlide } from "swiper/react";
import places from "../ProfilePage/places.js";
const Place = () => {
  //   console.log(data);
  const [Places, setPlaces] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setPlaces(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div
      id="tours-in-Seasonal"
      className=" m-auto px-4 py-12 bg-white   w-full "
    >
      <Card className="card-bg">
        <h1 className="text-pallate-persian_green font-bold text-4xl text-center">
          Seasonal recommendations
        </h1>

        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between ">
          {/* Fliter Type */}
          <div>
            <div className="flex justfiy-between flex-wrap ">
              <a
                onClick={() => setPlaces(data)}
                href="#_"
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32  absolute left-0 top-0 bg-blue-400 opacity-[13%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 card-bg opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-pallate-persian_green transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  All
                </span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>

              <a
                onClick={() => filterType("Spring")}
                href="#_"
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32  absolute left-0 top-0 bg-blue-400 opacity-[13%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 card-bg opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-pallate-persian_green transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Spring
                </span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
              <a
                onClick={() => filterType("Summer")}
                href="#_"
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32  absolute left-0 top-0 bg-blue-400 opacity-[13%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 card-bg opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-pallate-persian_green transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Summer
                </span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
              <a
                onClick={() => filterType("Autumn")}
                href="#_"
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32  absolute left-0 top-0 bg-blue-400 opacity-[13%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 card-bg opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-pallate-persian_green transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Autumn
                </span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
              <a
                onClick={() => filterType("Winter")}
                href="#_"
                class="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-32 h-32  absolute left-0 top-0 bg-blue-400 opacity-[13%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 card-bg opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-pallate-persian_green transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Winter
                </span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Display foods */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 sx:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 p-5 rounded-2xl">
            {Places.map((page, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="border shadow-lg rounded-lg hover:scale-105 duration-300 ">
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group-hover:rounded-2xl rounded-2xl">
                      <div class="h-80  ">
                        <img
                          className="w-full h-full"
                          src={page.image}
                          alt=""
                          style={{ display: "block", margin: "auto" }}
                        />
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60  group-hover:rounded-2xl group-hover:to-black/70 rounded-2xl"></div>
                      <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center rounded-2xl justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0  group-hover:rounded-2xl">
                        <h1 class="font-dmserif text-2xl font-bold text-white">
                          {page.name}
                        </h1>
                        <p class="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
                          {page.des}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            {/* {foods.map((item, index) => (
              <div
                key={index}
                className="border shadow-lg rounded-lg hover:scale-105 duration-300 bg-pallate-persian_green/80"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="flex justify-between px-2 py-4 text-white">
                  <p className="font-bold">{item.name}</p>
                </div>
                <div className="container md:flex text-sm  dark:text-white text-white p-2">
                  <h1>
                    <Typewriter
                      options={{
                        autoStart: true,
                        delay: 80,
                        strings: [item.des],
                        pauseFor: 50000000000000, // Adjust the duration (in milliseconds) to your desired value
                        loop: true,
                      }}
                    />
                  </h1>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Place;
