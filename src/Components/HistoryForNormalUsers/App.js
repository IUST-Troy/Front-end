import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BsCurrencyDollar } from "react-icons/bs";
// import pisholi from "../../Static/pisholi4.jpg";
import { Button, Card, Select } from "flowbite-react";
import Typewriter from "typewriter-effect";
import Header from "../NavigationBar/Header.js";
import Navbar from "../NavigationBar/Navbar.js";
import FooterV2 from "../HomePage/FooterV2.js";
import { Swiper, SwiperSlide } from "swiper/react";
import places from "../ProfilePage/places.js";
// import { Organizations, TourLeaders } from "../TripPage/Trips.js";
import Wallpapet1 from "../../Static/bgR.jpg";
import notfound from "../../Static/notfound.png";
const Place = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const acc = `${localStorage.getItem("acctoken")}`;
        const dataResponse = await axios.get(
          "https://mrsz.pythonanywhere.com/history_user",
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("acctoken")}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = dataResponse.data;

        setPlaces(data);
        console.log("Data:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); 
  }, []); 

  

  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="grid grid-cols-1 gap-0 justify-center items-center content-center p-8 h-full"
        style={{
          background: `url(${Wallpapet1}) no-repeat center center fixed`,
        }}
      >
        <h1 className="text-white font-bold text-4xl text-center p-5">
          History
        </h1>

        <div className="card-bg p-5 rounded-2xl min-h-[25rem]">
          {places.length === 0 ? (
            <h1 className="text-2xl text-center text-white">
              You haven't traveled so far. Experience your first trip.
            </h1>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 sx:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 p-5 rounded-2xl">
              {places.map((page, index) => (
                <SwiperSlide key={index}>
                <div className="border shadow-lg rounded-2xl hover:scale-105 duration-300">
                  <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group-hover:rounded-2xl rounded-2xl">
                    
                  <div className="h-80">
  {page.image ? (
    <img
      className="w-full h-full"
      src={`data:image/jpeg;base64,${page.image}`}
      alt=""
      style={{ display: "block", margin: "auto" }}
    />
  ) : (
    <img
      className="w-full h-full"
      src={notfound}
      alt=""
      style={{ display: "block", margin: "auto" }}
    />
  )}
</div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60  group-hover:rounded-2xl group-hover:to-black/70 rounded-2xl"></div>
                    <div className="absolute inset-0 flex translate-y-[40%] flex-col items-center rounded-2xl justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0  group-hover:rounded-2xl">
                      {page.destination.map((destination, i) => (
                        <h1
                          key={i}
                          className="font-dmserif text-xl font-bold text-white"
                        >
                          {destination.country_name}, {destination.city_name}
                        </h1>
                      ))}
                      <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
                        from: {page.origin.city_name},{" "}
                        {page.origin.country_name}
                        <br />
                        <div className="text-pallate-persian_green">departure_date: {page.departure_date}</div>
                        
                        <div className="text-red-400">return_date: {page.return_date}</div>
                        
                        <div>
                          Price: ${page.Price}
                        
                        </div>
                        
                        <br />
                       
                        
                        {page.Description}
                      </p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              ))}
            </div>
          )}
        </div>
      </div>

      <FooterV2 />
    </div>
  );
};

export default Place;