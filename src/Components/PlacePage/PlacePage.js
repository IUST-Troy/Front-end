import React from "react";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import { Card, Carousel, Rating } from "flowbite-react";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/PlacePage/PlacePage.scss";
import eifel from "../../Static/eiffel.jpg";
import four from "../../Static/four.jpg";
import Wallpaper1 from "../../Static/bgR.jpg";
const PlacePage = () => {
    return (
        <div
            className="grid grid-cols-1 gap-0 justify-center items-center content-center"
            style={{
                background: `url(${Wallpaper1}) no-repeat center center fixed`,
            }}
        >
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 gap-1 justify-center items-center w-3/4 md:w-1/2 mx-auto">
                <div className="grid md:grid-cols-custom_1_2 grid-cols-1 gap-6 mx-5 my-4">
                    <Card className="h-72 w-full card-bg border-pallate-persian_green rounded-xl">
                        <div className="grid grid-cols-1 gap-8 justify-center items-center">
                            <p className="text-center text-pallate-celeste_light text-3xl   font-bold">
                                Name of Place
                            </p>
                            <p className="text-left text-xl pl-5 text-pallate-celeste_light">
                                Country; City
                            </p>
                            <p className="text-left pl-5 text-pallate-celeste_light">
                                Address, Address, Address, Address, Address,
                                Address
                            </p>
                        </div>
                    </Card>
                    <Carousel
                        slideInterval={5000}
                        className="h-72 md:w-full md:block hidden w-80"
                    >
                        <img src={eifel} />
                        <img src={four} />
                    </Carousel>
                </div>
                <Card className="card-bg md:min-h-52 md:max-h-100 h-auto mx-5 my-4 border-pallate-persian_green">
                    <div className="grid md:grid-cols-custom_1_2 md:gap-6 grid-cols-1 gap-3">
                        <div>
                            <React.Fragment>
                                <Rating size="lg">
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star />
                                    <Rating.Star filled={false} />
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        4.95/5
                                    </p>
                                </Rating>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    1,745 global ratings
                                </p>
                                <div className="grid grid-cols-1 gap-1 !text-gray-600">
                                    <Rating.Advanced percentFilled={70} >
                                        5 star
                                    </Rating.Advanced>
                                    <Rating.Advanced percentFilled={17}>
                                        4 star
                                    </Rating.Advanced>
                                    <Rating.Advanced percentFilled={8}>
                                        3 star
                                    </Rating.Advanced>
                                    <Rating.Advanced percentFilled={4}>
                                        2 star
                                    </Rating.Advanced>
                                    <Rating.Advanced percentFilled={1}>
                                        1 star
                                    </Rating.Advanced>
                                </div>
                            </React.Fragment>
                        </div>
                        <div>
                            <p className="font-bold text-gray-600">Description:</p>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Sed
                                felis eget velit aliquet sagittis id
                                consectetur. Odio ut sem nulla pharetra diam sit
                                amet nisl. Nibh praesent tristique magna sit
                                amet purus gravida. Vestibulum mattis
                                ullamcorper velit sed ullamcorper morbi
                                tincidunt.
                            </p>
                        </div>
                    </div>
                </Card>
                <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1">
                    <Card className="card-bg h-72 mx-5 my-4 border-pallate-persian_green"></Card>
                    <Card className="card-bg h-72 mx-5 my-4 border-pallate-persian_green"></Card>
                </div>
            </div>
            <FooterV2 />
        </div>
    );
};

export default PlacePage;
