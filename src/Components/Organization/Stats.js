import React from "react";
import axios from "axios";
import { stats } from "./data";
import { Card, Carousel, Rating, Textarea } from "flowbite-react";
const Stats = () => {
  const star_rate = () => {
    // Country = document.getElementById('Country-tour').value;
    // City = document.getElementById('City-tour').value;
    // console.log("got here");
    axios
      .get(
        "https://mrsz.pythonanywhere.com/all_tourL",
        {
          // Country: Country,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        // toast.success("", {
        //   position: "top-center",
        //   autoClose: 1500,
        //   className: "toast-message",
        //   hideProgressBar: false,
        //   closeOnClick: false,
        //   pauseOnHover: false,
        //   draggable: false,
        //   progress: undefined,
        //   theme: "colored",
        // });
        console.log(res.data);
        // <PlaceToVisit />
      })
      .catch((err) => {
        //message.error(err.message);
        console.error(err);
        // toast.error('',
        // {
        //   className:'toast-message',

        // })
        // window.location.replace('/sign-in')
      });
  };
  return (
    <div className="bg-accent rounded-[20px] p-12">
      <div className="flex flex-wrap gap-y-8">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="min-h-[70px] w-3/6 lg:flex-1  odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center"
            >
              <div className="text-2xl lg:text-4xl font-semibold">
                {item.value}
              </div>
              <div className="text-base lg:text-xl font-light max-w-[110px] mx-auto">
                {item.text}
              </div>
            </div>
          );
        })}

 
    </div>
    </div>
    
  );
};

export default Stats;
