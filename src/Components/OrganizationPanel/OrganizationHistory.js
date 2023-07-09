import React from "react";
import { Avatar, Pagination as MUIPagination } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Wallpaper1 from "../../Static/bgR.jpg";
import "../../Styles/OrganizationPanel/orgStyles.scss";
import { Button, Tooltip } from "flowbite-react";
import axios from "axios";

import PassengersList from "./PassengersList";
const OrganizationHistory = () => {
    const [PassengersListView, setPassengersListView] = React.useState(false);
    const [PassengersListID, setPassengersListID] = React.useState(0);
    const [Loading, setLoading] = React.useState(false);
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const avas = [1, 2, 3, 4, 5, 6, 7, 8];
    const URL = "https://mrsz.pythonanywhere.com/history_org"
    React.useEffect(() => {
        setLoading(true);
        axios.get(URL,{
            headers:{
                Authorization: `JWT ${localStorage.getItem("acctoken")}`,
                "Content-Type" : "application/json"
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    return (
        <>
            {(!PassengersListView && (
                <div className="org-history card-bg h-[576.59px] w-full rounded-2xl border border-pallate-persian_green grid grid-cols-3 overflow-y-auto p-2 gap-x-2 gap-y-4">
                    {(!Loading &&
                        nums.map((num) => (
                            <div className="card-bg border border-pallate-persian_green rounded-2xl flex flex-col gap-2 pt-0 h-[480px]">
                                <img
                                    src={Wallpaper1}
                                    className="rounded-t-2xl h-1/3 w-full"
                                />
                                <div className="grid grid-cols-2 items-start justify-center content-center justify-items-center gap-4 p-2">
                                    <div className="grid grid-cols-1 items-center justify-center">
                                        <p className="text-white italic">
                                            From:
                                        </p>
                                        <p className="text-white italic">
                                            Country; City
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 items-center justify-center">
                                        <p className="text-white italic">To:</p>
                                        <p className="text-white italic">
                                            Country; City
                                        </p>
                                        <p className="text-white italic">...</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 items-start justify-center content-center justify-items-center gap-4 p-2">
                                    <p className="text-white italic">
                                        Price: $60
                                    </p>
                                    <p className="text-white italic">
                                        Passengers: 30/40
                                    </p>
                                </div>
                                <p className="text-xl font-semibold text-white italic text-center">
                                    Date: 28-6-2023 18:00
                                </p>
                                <div className="flex flex-row overflow-x-auto TlAvatar gap-2 pb-2 px-2">
                                    {avas.map((num) => (
                                        <Tooltip
                                            content="name surename"
                                            style="light"
                                        >
                                            <Avatar className="cursor-pointer" />
                                        </Tooltip>
                                    ))}
                                </div>
                                <div className="flex flex-row items-center justify-center gap-3 px-3 pt-3">
                                    <Button className="bg-pallate-persian_green rounded-2xl text-white font-semibold text-lg w-full hover:bg-pallate-blue_munsell">
                                        More Info
                                    </Button>
                                    <Button
                                        className="bg-pallate-persian_green rounded-2xl text-white font-semibold text-lg w-full hover:bg-pallate-blue_munsell"
                                        onClick={() => {
                                            setPassengersListID(num);
                                            setPassengersListView(true);
                                        }}
                                    >
                                        Passenger list
                                    </Button>
                                </div>
                            </div>
                        ))) ||
                        (Loading &&
                            [1, 2, 3, 4, 5, 6].map((num) => (
                                <div className="card-bg border border-pallate-persian_green rounded-2xl flex flex-col gap-2 pt-0 h-[480px] animate-pulse">
                                    <div class="flex items-center justify-center w-full h-1/3 mb-4 card-bg rounded-t-2xl animate-pulse ">
                                        <svg
                                            class="w-12 h-12 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 640 512"
                                        >
                                            <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                                        </svg>
                                    </div>
                                    <div className="h-[88px] w-full p-2 gap-4 grid grid-cols-2">
                                        <div className="h-full w-full card-bg rounded-2xl animate-pulse"></div>
                                        <div className="h-full w-full card-bg rounded-2xl animate-pulse"></div>
                                    </div>
                                    <div className="h-[40px] w-full p-2 gap-4 grid grid-cols-2">
                                        <div className="h-full w-full card-bg rounded-2xl animate-pulse"></div>
                                        <div className="h-full w-full card-bg rounded-2xl animate-pulse"></div>
                                    </div>
                                    <div className="h-[28px] card-bg rounded-2xl animate-pulse mx-10"></div>
                                    <div className="h-[52px] flex flex-row gap-2 px-2">
                                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                            <svg
                                                class="text-gray-200 w-[40px] h-[40px] dark:text-gray-700"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-3 px-3 pb-3 h-[54px]">
                                        <div className="h-full w-full card-bg rounded-lg animate-pulse"></div>
                                        <div className="h-full w-full card-bg rounded-lg animate-pulse"></div>
                                    </div>
                                </div>
                            )))}
                </div>
            )) || (
                <div className="grid grid-cols-1 grid-rows-custom_9_1 items-end h-full w-full">
                    <PassengersList TripID={PassengersListID} />
                    <Button
                        className="bg-pallate-persian_green hover:bg-pallate-blue_munsell"
                        onClick={() => setPassengersListView(false)}
                    >
                        Back
                    </Button>
                </div>
            )}
        </>
    );
};

export default OrganizationHistory;
