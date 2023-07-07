import React from "react";
import Other from "./other";

const Plan = () => {
  return (
    <div>
      <div
        id="tours-in-week"
        className=" w-full  card-bg px-4 grid lg:grid-cols-2  gap-4 pt-6"
      >
        {/* Left Side */}
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh] card-bg rounded-2xl p-2">
          <img
            className="row-span-3 object-cover w-full h-full p-2 "
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
            alt="/"
          />
          <img
            className="row-span-2 object-cover w-full h-full p-2"
            src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="/"
          />
          <img
            className="row-span-2 object-cover w-full h-full p-2"
            src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
            alt="/"
          />
          <img
            className="row-span-3 object-cover w-full h-full p-2"
            src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="/"
          />
          <img
            className="row-span-2 object-cover w-full h-full p-2"
            src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
            alt="/"
          />
        </div>
        {/* Right Side */}
        <div className="flex flex-col h-full justify-center card-bg p-2  rounded-2xl ">
          <h3 className="text-5xl md:text-5xl font-bold text-pallate-persian_green">
            Plan Your Next Trip
          </h3>
          <p className="text-2xl py-6">Get ready for your trip to Hawaii.</p>
          <p className="pb-6">
            The HAWAEI Islands boast some of the most breathtaking beaches in
            the world. From the world-famous Waikiki Beach in Oahu, with its
            golden sands and crystal-clear waters, to the secluded beauty of
            Lanikai Beach in Kailua, there is a beach for every type of
            traveler. Whether you're seeking a spot to relax under swaying palm
            trees or looking for thrilling water activities like surfing and
            snorkeling, the HAWAEI Islands have it all.
          </p>
          <p className="pb-6">
            The HAWAEI Islands truly are a travel paradise, offering a perfect
            blend of natural beauty, cultural richness, and warm hospitality.
            Whether you're seeking adventure, relaxation, or a cultural
            immersion, these enchanting islands have it all. Start planning your
            dream trip to the HAWAEI Islands and create memories that will last
            a lifetime. Experience the magic of this tropical haven and let the
            HAWAEI Islands capture your heart. Aloha!
          </p>
          <div>
            <a
              href="https://www.gohawaii.com/islands/hawaii-big-island"
              class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span class="w-32 h-32  absolute left-0 top-0 bg-blue-400 opacity-[13%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 card-bg opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-pallate-persian_green transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Learn More
              </span>
              <span class="absolute inset-0 border-2 border-white rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
      <Other />
    </div>
  );
};

export default Plan;
