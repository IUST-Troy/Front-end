import React, { useEffect } from "react";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import "leaflet/dist/leaflet.css";
import { Avatar } from "@mui/material";
import { Card, Carousel, Rating, Textarea } from "flowbite-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/PlacePage/PlacePage.scss";
import eifel from "../../Static/eiffel.jpg";
import four from "../../Static/four.jpg";
import Wallpaper1 from "../../Static/bgR.jpg";
import mylady from "../../Static/mylady.jpg";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import SuccessLottieOptions from "../Loading/LoadingSucess";
import EarthLottieOptions from "../Loading/LoadingEarth";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
const PlacePage = () => {
    const params = useParams();
    const [loading, setLoading] = React.useState(undefined);
    const [completed, setCompleted] = React.useState(undefined);
    const [data, setData] = React.useState({});
    useEffect(() => {
        console.log(params.id);
        setTimeout(() => {
            setLoading(true);
            setTimeout(() => {
                setCompleted(true);
            }, 2000);
        }, 2000);
    }, []);
    const MockComments = [
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit",
        },
        {
            username: "mmd",
            avatar: mylady,
            commnet:
                "massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium",
        },
    ];

    const [stars, setStars] = React.useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    const handle5star = () => {
        setStars([true, true, true, true, true]);
    };
    const handle4star = () => {
        setStars([true, true, true, true, false]);
    };
    const handle3star = () => {
        setStars([true, true, true, false, false]);
    };
    const handle2star = () => {
        setStars([true, true, false, false, false]);
    };
    const handle1star = () => {
        setStars([true, false, false, false, false]);
    };
    const resetStar = () => {
        setStars([false, false, false, false, false]);
    };

    return (
        <>
            {!completed ? (
                <>
                    {!loading ? (
                        <div className="w-screen h-screen grid grid-cols-1 items-center ">
                            <Lottie
                                options={EarthLottieOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    ) : (
                        <div className="w-screen h-screen grid grid-cols-1 items-center ">
                            <Lottie
                                options={SuccessLottieOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div
                        className="grid grid-cols-1 gap-0 justify-center items-center content-center"
                        style={{
                            background: `url(${Wallpaper1}) no-repeat center center fixed`,
                        }}
                    >
                        <Header />
                        <Navbar />
                        <div className="grid grid-cols-custom_5_2 grid-ops gap-7 justify-center items-stretch w-5/6 md:w-5/6 mx-auto pb-5 pt-20">
                            <div className="card-bg grid grid-cols-1 rounded-xl gap-y-1 border border-pallate-persian_green pb-5 pl-5 !pt-0 !pr-0">
                                <div className="grid grid-cols-custom_1_3 h-96 items-center justify-center gap-1">
                                    <div className="grid grid-cols-1 gap-8 justify-center items-center">
                                        <p className="text-left pl-5 text-pallate-celeste_light text-3xl   font-bold">
                                            Name of Place
                                        </p>
                                        <p className="text-left text-xl pl-5 text-pallate-celeste_light">
                                            Country; City
                                        </p>
                                        <p className="text-left pl-5 text-pallate-celeste_light">
                                            Address, Address, Address, Address,
                                            Address, Address
                                        </p>
                                    </div>
                                    <Carousel
                                        slideInterval={5000}
                                        className="h-96 md:w-full md:block hidden w-80 rounded-bl-none"
                                    >
                                        <img src={eifel} />
                                        <img src={four} />
                                    </Carousel>
                                </div>
                                <div className="grid md:grid-cols-custom_1_3  md:gap-0 grid-cols-1 gap-3">
                                    <div className=" my-auto">
                                        <React.Fragment>
                                            <Rating size="lg">
                                                <Rating.Star
                                                    className="cursor-pointer"
                                                    filled={stars[0]}
                                                    onMouseEnter={handle1star}
                                                    onMouseLeave={resetStar}
                                                />
                                                <Rating.Star
                                                    className="cursor-pointer"
                                                    filled={stars[1]}
                                                    onMouseEnter={handle2star}
                                                    onMouseLeave={resetStar}
                                                />
                                                <Rating.Star
                                                    className="cursor-pointer"
                                                    filled={stars[2]}
                                                    onMouseEnter={handle3star}
                                                    onMouseLeave={resetStar}
                                                />
                                                <Rating.Star
                                                    className="cursor-pointer"
                                                    filled={stars[3]}
                                                    onMouseEnter={handle4star}
                                                    onMouseLeave={resetStar}
                                                />
                                                <Rating.Star
                                                    className="cursor-pointer"
                                                    filled={stars[4]}
                                                    onMouseEnter={handle5star}
                                                    onMouseLeave={resetStar}
                                                />
                                                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    4.95/5
                                                </p>
                                            </Rating>
                                            <p className="text-sm pt-3 pl-11 font-medium text-gray-500 dark:text-gray-400">
                                                1,745 global ratings
                                            </p>
                                        </React.Fragment>
                                    </div>
                                    <div className="mt-0 ml-5 pr-5">
                                        <p className="font-bold text-gray-600 text-3xl mb-3">
                                            Description:
                                        </p>
                                        <p className="text-gray-700">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Sed felis
                                            eget velit aliquet sagittis id
                                            consectetur. Odio ut sem nulla
                                            pharetra diam sit amet nisl. Nibh
                                            praesent tristique magna sit amet
                                            purus gravida. Vestibulum mattis
                                            ullamcorper velit sed ullamcorper
                                            morbi tincidunt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-bg border border-pallate-persian_green rounded-xl">
                                <div className=" comment-section overflow-y-auto grid grid-cols-1 gap-2 py-3 px-5  w-full h-[30rem] ">
                                    {MockComments.map((c) => (
                                        <div className="comment-bg rounded-xl  flex flex-col p-2">
                                            <div className="flex flex-row gap-2 mb-2 items-center justify-start">
                                                <Avatar
                                                    src={c.avatar}
                                                    sx={{
                                                        width: 56,
                                                        height: 56,
                                                    }}
                                                ></Avatar>
                                                <p className="text-gray-700 text-xl">
                                                    @{c.username}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 text-lg">
                                                    {c.commnet}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-row px-5 gap-4 mt-3">
                                    <div class="w-full mb-4 rounded-lg comment-bg   ">
                                        <div class="px-4 py-2 comment-bg rounded-t-lg dark:bg-gray-800">
                                            <textarea
                                                id="comment"
                                                rows="2"
                                                class="w-full px-0 text-lg text-gray-700 comment-bg border-0 focus:ring-3 focus:ring-pallate-persian_green"
                                                placeholder="Write a comment..."
                                                required
                                            ></textarea>
                                        </div>
                                        <div class="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
                                            <button
                                                type="submit"
                                                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pallate-persian_green rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-pallate-blue_munsell"
                                            >
                                                Post comment
                                            </button>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-custom_3_2 gap-7 justify-center items-stretch w-5/6 md:w-5/6 mx-auto pb-20">
                            <div className="rounded-xl">
                                <MapContainer
                                    center={[48.858093, 2.294694]}
                                    zoom={20}
                                    scrollWheelZoom={true}
                                    style={{
                                        height: 610,
                                        borderRadius: "15px",
                                    }}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[48.858093, 2.294694]}>
                                        <Popup>
                                            Eifel Tower entry <br />
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            <div className="card-bg border rounded-xl grid justify-center items-center border-pallate-persian_green ">
                                <p className="text-4xl text-gray-700">
                                    No tour is available for this place
                                </p>
                            </div>
                        </div>
                        <FooterV2 />
                    </div>
                </>
            )}
            {/* <div
                className="grid grid-cols-1 gap-0 justify-center items-center content-center"
                style={{
                    background: `url(${Wallpaper1}) no-repeat center center fixed`,
                }}
            >
                <Header />
                <Navbar />
                <div className="grid grid-cols-custom_5_2 grid-ops gap-7 justify-center items-stretch w-5/6 md:w-5/6 mx-auto pb-5 pt-20">
                    <div className="card-bg grid grid-cols-1 rounded-xl gap-y-1 border border-pallate-persian_green pb-5 pl-5 !pt-0 !pr-0">
                        <div className="grid grid-cols-custom_1_3 h-96 items-center justify-center gap-1">
                            <div className="grid grid-cols-1 gap-8 justify-center items-center">
                                <p className="text-left pl-5 text-pallate-celeste_light text-3xl   font-bold">
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
                            <Carousel
                                slideInterval={5000}
                                className="h-96 md:w-full md:block hidden w-80 rounded-bl-none"
                            >
                                <img src={eifel} />
                                <img src={four} />
                            </Carousel>
                        </div>
                        <div className="grid md:grid-cols-custom_1_3  md:gap-0 grid-cols-1 gap-3">
                            <div className=" my-auto">
                                <React.Fragment>
                                    <Rating size="lg">
                                        <Rating.Star
                                            className="cursor-pointer"
                                            filled={stars[0]}
                                            onMouseEnter={handle1star}
                                            onMouseLeave={resetStar}
                                        />
                                        <Rating.Star
                                            className="cursor-pointer"
                                            filled={stars[1]}
                                            onMouseEnter={handle2star}
                                            onMouseLeave={resetStar}
                                        />
                                        <Rating.Star
                                            className="cursor-pointer"
                                            filled={stars[2]}
                                            onMouseEnter={handle3star}
                                            onMouseLeave={resetStar}
                                        />
                                        <Rating.Star
                                            className="cursor-pointer"
                                            filled={stars[3]}
                                            onMouseEnter={handle4star}
                                            onMouseLeave={resetStar}
                                        />
                                        <Rating.Star
                                            className="cursor-pointer"
                                            filled={stars[4]}
                                            onMouseEnter={handle5star}
                                            onMouseLeave={resetStar}
                                        />
                                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            4.95/5
                                        </p>
                                    </Rating>
                                    <p className="text-sm pt-3 pl-11 font-medium text-gray-500 dark:text-gray-400">
                                        1,745 global ratings
                                    </p>
                                </React.Fragment>
                            </div>
                            <div className="mt-0 ml-5 pr-5">
                                <p className="font-bold text-gray-600 text-3xl mb-3">
                                    Description:
                                </p>
                                <p className="text-gray-700">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Sed felis eget velit aliquet sagittis id
                                    consectetur. Odio ut sem nulla pharetra diam
                                    sit amet nisl. Nibh praesent tristique magna
                                    sit amet purus gravida. Vestibulum mattis
                                    ullamcorper velit sed ullamcorper morbi
                                    tincidunt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-bg border border-pallate-persian_green rounded-xl">
                        <div className=" comment-section overflow-y-auto grid grid-cols-1 gap-2 py-3 px-5  w-full h-[30rem] ">
                            {MockComments.map((c) => (
                                <div className="comment-bg rounded-xl  flex flex-col p-2">
                                    <div className="flex flex-row gap-2 mb-2 items-center justify-start">
                                        <Avatar
                                            src={c.avatar}
                                            sx={{
                                                width: 56,
                                                height: 56,
                                            }}
                                        ></Avatar>
                                        <p className="text-gray-700 text-xl">
                                            @{c.username}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-lg">
                                            {c.commnet}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row px-5 gap-4 mt-3">
                            <div class="w-full mb-4 rounded-lg comment-bg   ">
                                <div class="px-4 py-2 comment-bg rounded-t-lg dark:bg-gray-800">
                                    <textarea
                                        id="comment"
                                        rows="2"
                                        class="w-full px-0 text-lg text-gray-700 comment-bg border-0 focus:ring-3 focus:ring-pallate-persian_green"
                                        placeholder="Write a comment..."
                                        required
                                    ></textarea>
                                </div>
                                <div class="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600">
                                    <button
                                        type="submit"
                                        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pallate-persian_green rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-pallate-blue_munsell"
                                    >
                                        Post comment
                                    </button>
                                </div>{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-custom_3_2 gap-7 justify-center items-stretch w-5/6 md:w-5/6 mx-auto pb-20">
                    <div className="rounded-xl">
                        <MapContainer
                            center={[48.858093, 2.294694]}
                            zoom={20}
                            scrollWheelZoom={true}
                            style={{
                                height: 610,
                                borderRadius: "15px",
                            }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[48.858093, 2.294694]}>
                                <Popup>
                                    Eifel Tower entry <br />
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="card-bg border rounded-xl grid justify-center items-center border-pallate-persian_green ">
                        <p className="text-4xl text-gray-700">
                            No tour is available for this place
                        </p>
                    </div>
                </div>
                <FooterV2 />
            </div> */}
        </>
    );
};

export default PlacePage;
