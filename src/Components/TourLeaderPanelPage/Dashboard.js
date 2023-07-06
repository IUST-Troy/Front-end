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
        profit: 7000,
    },
    {
        name: "May",
        profit: 2000,
    },
    {
        name: "June",
        profit: 4500,
    },
];

const Dashboard = () => {
    return (
        <div className="w-full h-full grid grid-cols-1 grid-rows-2 gap-6">
            <div className="grid grid-cols-custom_1_3 gap-4">
                <div className="card-bg border grid grid-cols-1 items-center border-pallate-persian_green rounded-2xl">
                    <div className="grid grid-cols-1 items-center justify-center justify-items-center content-center gap-3">
                        <p className="text-3xl font-semibold text-white text-center my-4">
                            Organization Name
                        </p>
                        <p className="text-xl italic text-center text-white font-semibold">
                            Joined: July 2023
                        </p>
                        
                        <p className="text-xl italic text-center text-white font-semibold">
                            Total Passengers: 250
                        </p>
                        <span class="flex items-center gap-4 text-sm rounded text-slate-500">
                    <span
                      class="flex gap-1 mt-2 text-amber-400"
                      role="img"
                      aria-label="Rating: 4 out of 5 stars"
                    >
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </span>
                    </span>
                  </span>

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
                            Total Profit: $15000
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
            <div className="grid grid-cols-custom_1_1 gap-4">
                <div className="card-bg border border-pallate-persian_green rounded-2xl flex flex-row flex-wrap gap-10 px-3 py-3">
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
                            Date: 4/13/2023 14:00
                        </p>
                        <div className="grid grid-cols-2 items-center ml-7">
                            <p className="text-white italic">Price: $120</p>
                            <p className="text-white italic">
                                Passangers: 30/50
                            </p>
                        </div>
                        <Button className="bg-pallate-persian_green mx-5 text-white font-semibold hover:bg-pallate-blue_munsell transition duration-150 ease-in-out transform hover:text-2xl">
                            More Info
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 items-center justify-center rounded-2xl ml-5">
                        <Tool content="More Trips" placement="right">
                            <BsArrowRight className="text-5xl text-pallate-persian_green cursor-pointer  hover:scale-110 hover:font-bold transition duration-150 ease-in-out transform" />
                        </Tool>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
