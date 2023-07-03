import React from "react";
import Wallpaper1 from "../../Static/bgR.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";

const ListofTrips = () => {
    
    return (
        <>
            <div
                className="grid grid-cols-1 gap-0 justify-center items-center content-center"
                style={{
                    background: `url(${Wallpaper1}) no-repeat center center fixed`,
                }}
            >
                <Header />
                <Navbar />
                <div className="flex flex-col  w-5/6 gap-4 mx-auto  items-center my-10">
                    <div className="card-bg border border-pallate-persian_green rounded-2xl w-full h-14"></div>
                    <div className="card-bg border border-pallate-persian_green rounded-2xl w-full h-96"></div>
                </div>
                <FooterV2/>
            </div>
        </>
    );
};

export default ListofTrips;
