import React from "react";
import Wallpaper1 from "../../Static/bgR.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import DatePicker from "react-datepicker";
import "../../Styles/OrganizationPanel/orgStyles.scss";
import { Button, Rating, Tooltip } from "flowbite-react";
import {
    BsSearchHeartFill,
    BsArrowRight as RightArrow,
    BsArrowLeft as LeftArrow,
} from "react-icons/bs";
import { Avatar } from "@mui/material";
import { TbTrain, TbPlane, TbShip, TbBus } from "react-icons/tb";
const ListofTrips = () => {
    const [startDate, setStartDate] = React.useState(new Date());
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
                    <div className="card-bg border border-pallate-persian_green rounded-2xl w-full h-24 grid grid-cols-4 px-2 gap-4">
                        <div>
                            <label className="text-pallate-celeste_light text-2xl font-bold ">
                                Departure Date:
                            </label>
                            <DatePicker
                                className="card-bg rounded-2xl border border-pallate-persian_green w-full h-[42px]"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                minDate={startDate}
                                showIcon={true}
                            />
                        </div>
                        <div>
                            <label className="text-white text-2xl font-bold ">
                                From:
                            </label>
                            <div className="grid grid-cols-2 gap-0 justify-around">
                                <select className="card-bg rounded-l-2xl border border-pallate-persian_green w-full border-r-0 focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green">
                                    <option value="none">Country</option>
                                </select>
                                <select className="card-bg rounded-r-2xl border border-pallate-persian_green w-full focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green">
                                    <option value="none">City</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="text-white text-2xl font-bold ">
                                To:
                            </label>
                            <div className="grid grid-cols-2 gap-0">
                                <select className="card-bg rounded-l-2xl border border-pallate-persian_green w-full border-r-0 focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green">
                                    <option value="none">Country</option>
                                </select>
                                <select className="card-bg rounded-r-2xl border border-pallate-persian_green w-full focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green">
                                    <option value="none">City</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <Button className="w-full mt-[32px] !rounded-2xl bg-pallate-persian_green hover:bg-pallate-blue_munsell">
                                <BsSearchHeartFill className="mr-4 text-lg" />
                                Search{" "}
                            </Button>
                        </div>
                    </div>
                    <div className="card-bg org-history border border-pallate-persian_green rounded-2xl overflow-y-auto p-7 gap-7 w-full h-[440px] grid grid-cols-2 ">
                        <div className="w-full h-96 card-bg rounded-2xl shadow-md border border-pallate-persian_green grid grid-cols-2 divide-x divide-pallate-persian_green">
                            <div className="flex flex-col w-full h-96 gap-2 justify-between pb-3">
                                <img
                                    src={Wallpaper1}
                                    className="w-full h-1/3 rounded-tl-2xl"
                                />
                                <div className="flex flex-row m-2 items-center gap-3">
                                    <Avatar sx={{ width: 50, height: 50 }} />
                                    <Tooltip
                                        content="Travel Agencyyyyyyy"
                                        style="light"
                                        arrow={false}
                                    >
                                        <p className="text-gray-600 text-xl  truncate">
                                            Travel Agencyyyyyyy
                                        </p>
                                    </Tooltip>
                                    <Rating>
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                        <Rating.Star />
                                    </Rating>
                                </div>
                                <div className="flex flex-col gap-1 pt-3 pl-3">
                                    <div className="grid grid-cols-custom_3_2">
                                        <div className="flex flex-col">
                                            <Tooltip content="Country; City">
                                                <p className="text-gray-700 text-xl truncate">
                                                    Country; City
                                                </p>
                                            </Tooltip>
                                            <p className="text-gray-700 text-xl ">
                                                26 December 2023
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                            <TbPlane className="text-pallate-persian_green text-4xl" />
                                            <div className="flex flex-col items-center">
                                                <p className="text-xs">
                                                    Departure
                                                </p>
                                                <LeftArrow />
                                                <RightArrow />
                                                <p className="text-xs">
                                                    Return
                                                </p>
                                            </div>
                                            <TbPlane className="text-pallate-persian_green text-4xl" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 ml-2">
                                    <div className="flex flex-col  ">
                                        <p className="text-gray-700 text-lg  ">
                                            Price:
                                        </p>
                                        <p className="text-gray-700 text-lg ">
                                            $60
                                        </p>
                                    </div>
                                    <div className="flex flex-col  ">
                                        <p className="text-gray-700 text-lg ">
                                            Reserved:
                                        </p>
                                        <p className="text-gray-700 text-lg ">
                                            15/100
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-rows-3 gap-1 px-3 pt-3">
                                <div className="flex flex-col gap-1">
                                    <p className="text-gray-700 text-lg">
                                        Destinations:
                                    </p>
                                    
                                    <div className="flex flex-row flex-wrap h-[89.33px] overflow-y-auto items-center justify-normal gap-1 org-history">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                                            (i) => (
                                                <div className="card-bg rounded-full p-1 max-w-[346px]">
                                                    <p className="text-gray-700 truncate">
                                                        Country; City
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-gray-700 text-lg">
                                        Places:
                                    </p>
                                    
                                    <div className="flex flex-row flex-wrap h-[89.33px] overflow-y-auto items-center justify-normal gap-1 org-history">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                                            (i) => (
                                                <div className="card-bg rounded-full p-1 max-w-[346px]">
                                                    <p className="text-gray-700 truncate">
                                                        Place Name
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 justify-center">
                                    <p className="text-gray-700 text-xl">Return: <br/> 1 Januray 2024</p>
                                    <Button className="bg-pallate-persian_green !rounded-2xl hover:bg-pallate-blue_munsell">
                                        More Info
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterV2 />
            </div>
        </>
    );
};

export default ListofTrips;
