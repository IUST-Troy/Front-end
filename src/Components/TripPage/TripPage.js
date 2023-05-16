import React from "react";
import Wallpaper1 from "../../Static/bgR.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/TripPage/TripPage.scss"
const TripPage = () => {


    return (
        <div
            className="grid grid-cols-1 gap-0 justify-center items-center content-center"
            style={{
                background: `url(${Wallpaper1}) no-repeat center center fixed`,
            }}
        >
            <Header/>
            <Navbar/>
            <div className="grid md:grid-cols-custom_1_2 justify-center items-stretch w-5/6 mx-auto pt-20 pb-5 gap-7 ">
                <div className="grid grid-cols-1 justify-center  content-center gap-1 py-4 px-2 card-bg border border-pallate-persian_green rounded-xl">
                    <div>
                        <p className="text-pallate-celeste_light text-center text-4xl font-bold">
                            Organization Name
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-700 text-center text-xl ">
                            Paris; France
                        </p>
                        <p className="text-gray-700 text-center text-xl ">
                            23-5-2023
                        </p>
                        
                    </div>
                    
                </div>
                <div
                className="card-bg border border-pallate-persian_green rounded-xl"></div>
            </div>
            <FooterV2/>
        </div>
    );
};

export default TripPage;
