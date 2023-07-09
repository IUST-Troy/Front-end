import React from 'react';
import Wallpaper1 from '../../Static/bgR.jpg'
// import data
import { useNavigate } from "react-router-dom";
import { hero } from './data';
import { IconButton } from "@mui/material";
import { Link as Scroll } from "react-scroll";
import SearchIcon from "@mui/icons-material/Search";
// import components
import Stats from './Stats';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  const navigate = useNavigate();
  return (
    <section className='h-full max-h-[850px] w-full bg-hero bg-right lg:bg-center bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:mb-28'
   >
      <div className='container mx-auto text-center'
      
     >
        {/* title */}
        <h1 className='text-2xl lg:text-[64px] lg:leading-tight lg:max-w-[888px] mx-auto font-semibold mb-[30px]'>
          {title}
        </h1>
        {/* subtitle */}
        <h2 className='mb-[30px] lg:mb-[65px] max-w-[627px] mx-auto lg:text-xl'>
          {subtitle}
        </h2>
        {/* button */}
        <button className='px-[35px] lg:px-[80px] py-[9px] lg:py-[16px] mb-[160px] lg:mb-[194px] text-xl rounded-md bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] backdrop-blur-md transition' onClick={()=>navigate('/create-trip')}>
          {buttonText}
          
         
        </button>
        <Scroll to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon
                  className="goDown"
                  sx={{
                    fontSize: 50,
                    // "&:hover": {
                    //   backgroundColor: "rgba(186, 232, 219, 0.438)",
                    // },
                  }}
                />
              </IconButton>
            </Scroll>
        {/* stats */}
        <div className='-top-[70px] relative'>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
