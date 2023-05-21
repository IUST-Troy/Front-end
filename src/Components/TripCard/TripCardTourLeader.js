import React from "react";
import Wallpaper1 from "../../Static/bgR.jpg"
const TripCardTourLeader = ({}) => {



    return(
        <div className="max-w-sm cursor-pointer transform hover:scale-105 transition duration-1000 ease-in-out border border-pallate-persian_green card-bg grid grid-cols-1 items-center content-center justify-center pt-0 rounded-xl">
            <img src={Wallpaper1} className="rounded-t-xl h-64 w-full" />
            <div className="h-96">

            </div>
        </div>
    )
}

export default TripCardTourLeader