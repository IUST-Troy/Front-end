import React from "react";
import "../../Styles/LandingPage/button.scss"
import { useNavigate } from "react-router-dom";


function BTN({name , route}) {
  const navigate = useNavigate()
  
  return (
    <div className="">
      <button onClick={()=>navigate(route)} className="blob-btn  w-40">
        {name}
        <span class="blob-btn__inner ">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default BTN;
