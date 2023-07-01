import { Avatar } from "@mui/material";
import { Tooltip as Tool, Carousel, Button } from "flowbite-react";
import React from "react";
import {
    BsArrowRight,
    BsArrowLeftShort,
    BsArrowRightShort,
} from "react-icons/bs";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


const profits = [
    {
        name: "April",
        profit: 7500,
    },
    {
        name: "May",
        profit: 4000,
    },
    {
        name: "June",
        profit: 3000,
    },
];

const Dashboard = () => {
    return (
        <div className="w-full h-full grid grid-cols-1 grid-rows-2 gap-6">
            <div className="grid grid-cols-custom_2_3  gap-4">
                <div className="card-bg border grid grid-cols-1 items-center border-pallate-persian_green rounded-2xl">
                    <div className="grid grid-cols-1 items-center justify-center justify-items-center content-center gap-3">
                        <p className="text-3xl font-semibold text-white text-center my-4">
                            Travel Agancy Name
                        </p>
                        <p className="text-xl italic text-center text-white font-semibold">
                            Joined: July 2023
                        </p>
                        <p className="text-xl italic text-center text-white font-semibold">
                            Active Tourleaders: 44
                        </p>
                        <p className="text-xl italic text-center text-white font-semibold">
                            Total Passengers: 250
                        </p>
                    </div>
                </div>
                <div className="card-bg border border-pallate-persian_green rounded-2xl grid grid-cols-custom_3_2 pt-2 gap-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={profits}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip  offset={5} cursor={false}/>
                            <Bar dataKey="profit" fill="#008BA8ff" />
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="flex flex-col items-start gap-4 justify-center">
                        <p className="text-white italic text-2xl">
                            Total Profit: $14500
                        </p>
                        <p className="text-white italic text-xl">
                            This month passengers: 80
                        </p>
                        <p className="text-white italic text-xl">
                            This month Trips: 5
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-custom_3_1 gap-4">
                <div className="card-bg border border-pallate-persian_green rounded-2xl flex flex-row flex-wrap gap-7 px-3 py-3">
                    <div className="bg-pallate-celeste_lowOp border border-pallate-celeste w-2/5 rounded-2xl grid grid-cols-1 items-center justify-start pt-3 gap-3">
                        <div className="grid grid-cols-2 items-start justify-center content-center justify-items-center">
                            <div className="grid grid-cols-1 items-center justify-center">
                                <p className="text-white italic">From:</p>
                                <p className="text-white italic">
                                    Country; City
                                </p>
                            </div>
                            <div className="grid grid-cols-1 items-start justify-start">
                                <p className="text-white italic">To:</p>
                                <p className="text-white italic">
                                    Country; City
                                </p>
                                <p className="text-white italic">...</p>
                            </div>
                            <div className="grid grid-cols-1 items-center justify-center"></div>
                        </div>
                        <p className="text-white italic ml-7 text-xl">
                            Date: 6/27/2023 18:00
                        </p>
                        <div className="grid grid-cols-2 items-center ml-7">
                            <p className="text-white italic">Price: $60</p>
                            <p className="text-white italic">
                                Passangers: 20/30
                            </p>
                        </div>
                        <Button className="bg-pallate-persian_green mx-5 text-white font-semibold hover:bg-pallate-blue_munsell transition duration-150 ease-in-out transform hover:text-2xl">
                            More Info
                        </Button>
                    </div>
                    <div className="bg-pallate-celeste_lowOp border border-pallate-celeste w-2/5 rounded-2xl "></div>
                    <div className="grid grid-cols-1 items-center justify-center rounded-2xl ml-5">
                        <Tool content="More Trips" placement="right">
                            <BsArrowRight className="text-5xl text-pallate-persian_green cursor-pointer  hover:scale-110 hover:font-bold transition duration-150 ease-in-out transform" />
                        </Tool>
                    </div>
                </div>
                <div className="card-bg border border-pallate-persian_green rounded-2xl p-4">
                    <Carousel
                        indicators=""
                        leftControl={
                            <BsArrowLeftShort className="text-4xl text-pallate-persian_green" />
                        }
                        rightControl={
                            <BsArrowRightShort className="text-4xl text-pallate-persian_green" />
                        }
                    >
                        <div className="border bg-pallate-celeste_lowOp rounded-2xl border-pallate-celeste w-full h-full gap-8 grid grid-cols-1 justify-center items-center justify-items-center content-center">
                            <Avatar sx={{ height: 80, width: 80 }} />
                            <p className="text-white font-semibold text-xl">
                                Name Surname
                            </p>
                        </div>
                        <div className="border bg-pallate-celeste_lowOp rounded-2xl border-pallate-celeste w-full h-full gap-8 grid grid-cols-1 justify-center items-center justify-items-center content-center">
                            <Avatar sx={{ height: 80, width: 80 }} />
                            <p className="text-white font-semibold text-xl">
                                Name Surname
                            </p>
                        </div>
                        <div className="border bg-pallate-celeste_lowOp rounded-2xl border-pallate-celeste w-full h-full gap-8 grid grid-cols-1 justify-center items-center justify-items-center content-center">
                            <Avatar sx={{ height: 80, width: 80 }} />
                            <p className="text-white font-semibold text-xl">
                                Name Surname
                            </p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
