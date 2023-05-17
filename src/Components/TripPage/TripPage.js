import React from "react";
import Wallpaper1 from "../../Static/bgR.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/TripPage/TripPage.scss";
import { TbTrain, TbPlane } from "react-icons/tb";
import { Avatar } from "@mui/material";
const TripPage = () => {
    return (
        <div
            className="grid grid-cols-1 gap-0 justify-center items-center content-center"
            style={{
                background: `url(${Wallpaper1}) no-repeat center center fixed`,
            }}
        >
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-custom_1_2 justify-center items-stretch w-5/6 mx-auto pt-20 pb-5 gap-7 ">
                <div className="grid grid-cols-1 justify-center content-start gap-4 py-4 px-2 card-bg border border-pallate-persian_green rounded-xl">
                    <div>
                        <p className="text-pallate-celeste_light text-center text-4xl font-bold">
                            Organization Name
                        </p>
                    </div>
                    <div className="mx-5 date-transport-card-bg justify-between items-start rounded-xl border border-pallate-persian_green gap-3 grid grid-cols-1 py-5 px-3">
                        <p className="text-4xl">From:</p>
                        <div className="grid grid-cols-3 gap-3 justify-between items-center">
                            <p className="text-gray-700 text-center text-2xl ">
                                City; Country
                            </p>
                            <p className="text-gray-700 text-center text-2xl ">
                                yyyy-mm-dd hh:mm
                            </p>
                            <p className="text-6xl text-center mx-auto">
                                <TbTrain />
                            </p>
                        </div>
                        <p className="text-4xl">To:</p>
                        <div className="flex items-center justify-start flex-wrap gap-2">
                            {/* <div className="grid grid-cols-3 gap-3 items-center justify-center"> */}
                            <div className="bg-transparent rounded-lg flex">
                                <p className="text-gray-700 text-center text-2xl ">
                                    City; Country:big
                                </p>
                            </div>
                            <div className="bg-transparent rounded-lg flex">
                                <p className="text-gray-700 text-center text-2xl ">
                                    City; Country
                                </p>
                            </div>
                            <div className="bg-transparent rounded-lg flex">
                                <p className="text-gray-700 text-center text-2xl ">
                                    City; Country
                                </p>
                            </div>
                            <div className="bg-transparent rounded-lg flex">
                                <p className="text-gray-700 text-center text-2xl ">
                                    City; Country
                                </p>
                            </div>
                            <div className="bg-transparent rounded-lg flex">
                                <p className="text-gray-700 text-center text-2xl ">
                                    City; Country
                                </p>
                            </div>
                            <div className="bg-transparent rounded-lg flex">
                                <p className="text-gray-700 text-center text-2xl ">
                                    City; Countryyyyyyyy
                                </p>
                            </div>
                            <div className="bg-transparent rounded-lg flex">
                                <p className="text-gray-700 text-center text-2xl ">
                                    Cityyyyyyyyyyyy; Country
                                </p>
                            </div>
                        </div>
                        <p className="text-4xl text-gray-700">Return:</p>
                        <div className="grid grid-cols-2 gap-7 justify-between items-center">
                            <p className="text-gray-700 text-center text-2xl ">
                                yyyy-mm-dd hh:mm
                            </p>
                            <p className="text-6xl text-center mx-auto">
                                <TbPlane />
                            </p>
                        </div>
                    </div>
                    <button
                        data-popover-target="popover-default"
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Default popover
                    </button>
                    <div
                        data-popover
                        id="popover-default"
                        role="tooltip"
                        class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                    >
                        <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                            <h3 class="font-semibold text-gray-900 dark:text-white">
                                Popover title
                            </h3>
                        </div>
                        <div class="px-3 py-2">
                            <p>
                                And here's some amazing content. It's very
                                engaging. Right?
                            </p>
                        </div>
                        <div data-popper-arrow></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-3 p-5 card-bg border border-pallate-persian_green rounded-xl">
                    <div className="h-fit">
                        <p className="text-3xl mb-3 text-gray-700">
                            Tour Leaders:
                        </p>
                        <div className="flex flex-wrap flex-row gap-2">
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-2 rounded-3xl">
                                <Avatar />
                                <p className="text-gray-600 text-center text-lg">
                                    FName Lname
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-2 rounded-2xl">
                                <Avatar />
                                <p className="text-gray-600 text-center text-lg">
                                    FirstName LastName
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-2 rounded-2xl">
                                <Avatar />
                                <p className="text-gray-600 text-center text-lg">
                                    FirstName LastNameeeeeeeeeeeeeeeeeeeeee
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-2 rounded-2xl">
                                <Avatar />
                                <p className="text-gray-600 text-center text-lg">
                                    FirstName LastName
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-3xl mb-3 text-gray-700">
                            Description:
                        </p>
                        <p className="text-lg text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Magna fermentum iaculis eu non
                            diam phasellus vestibulum. Cras fermentum odio eu
                            feugiat pretium nibh. Ut eu sem integer vitae justo
                            eget magna. Dui faucibus in ornare quam viverra orci
                            sagittis. Vestibulum lorem sed risus ultricies
                            tristique nulla aliquet. Nibh mauris cursus mattis
                            molestie a. Quam vulputate dignissim suspendisse in
                            est ante in nibh. Urna duis convallis convallis
                            tellus id interdum velit. Consequat interdum varius
                            sit amet. Tortor at risus viverra adipiscing at.
                            Augue mauris augue neque gravida in fermentum et.
                        </p>
                    </div>
                    <div>
                        <p className="text-3xl mb-3 text-gray-700">Places:</p>
                        <div className="flex flex-wrap flex-row gap-2">
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Nammmmmmmmmmmme
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                <p className="text-gray-600 text-center text-xl">
                                    Place Name
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterV2 />
        </div>
    );
};

export default TripPage;
