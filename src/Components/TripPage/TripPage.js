import React from "react";
import Wallpaper1 from "../../Static/bgR.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/TripPage/TripPage.scss";
import { TbTrain, TbPlane } from "react-icons/tb";
import { Avatar } from "@mui/material";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { Button, Rating } from "flowbite-react";
const TripPage = () => {
    const initial = [false, false, false, false];
    const [openPopover, setOpenPopover] = React.useState(initial);
    const places = [
        {
            name: "place",
        },
        {
            name: "placeName",
        },
        {
            name: "pl",
        },
        {
            name: "placeName So big",
        },
    ];
    const dests = [
        {
            country: "Country",
            city: "City",
        },
        {
            country: "Countryyyyy",
            city: "City",
        },
        {
            country: "Country",
            city: "Cityyyyyyyyy",
        },
        {
            country: "Count",
            city: "Ci",
        },
        {
            country: "Country",
            city: "City",
        },
        {
            country: "Coasdasdasd  asuntry",
            city: "City   City",
        },
    ];
    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    };
    const closePopoverHandler = (index) => {
        console.log("got close " + index + openPopover[index]);
        const newArr = Array.from(openPopover).map((data, i) => {
            if (i == index) {
                return false;
            }
            return false;
        });
        setOpenPopover(newArr);
    };
    const openPopoverHandler = (index) => {
        console.log("got open " + index + openPopover[index]);
        const newArr = Array.from(openPopover).map((data, i) => {
            if (i == index) {
                return true;
            }
            return data;
        });
        setOpenPopover(newArr);
    };
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
                <div className="grid grid-cols-1 justify-center content-start px-0 pt-0 gap-4 py-4 card-bg border border-pallate-persian_green rounded-xl">
                    <img
                        src={Wallpaper1}
                        className="h-64 w-full rounded-t-xl"
                    />
                    <div>
                        <p className="text-pallate-celeste_light text-center text-4xl font-bold">
                            Organization Name
                        </p>
                    </div>
                    <div className="mx-5  justify-between items-start  gap-3 grid grid-cols-1 py-5 px-3">
                        <div className="rounded-xl border border-pallate-persian_green date-transport-card-bg p-2">
                            <p className="text-3xl">From:</p>
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
                        </div>
                        <div className="rounded-xl border border-pallate-persian_green date-transport-card-bg p-2">
                            <p className="text-3xl">To:</p>
                            <div className="flex items-center justify-start flex-wrap gap-2">
                                {/* <div className="grid grid-cols-3 gap-3 items-center justify-center"> */}
                                {dests.map((dest, index) => {
                                    return (
                                        <div
                                            className={
                                                (index % 2 == 0
                                                    ? "bg-pallate-celeste border-pallate-persian_green"
                                                    : "bg-pallate-pink_lavender border-pallate-french_mauve") +
                                                " p-2 border rounded-lg flex"
                                            }
                                        >
                                            <p className="text-gray-700 text-center text-2xl ">
                                                {dest.city}; {dest.country}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="rounded-xl border border-pallate-persian_green date-transport-card-bg p-2">
                            <p className="text-3xl text-gray-700">Return:</p>
                            <div className="grid grid-cols-2 gap-7 justify-between items-center">
                                <p className="text-gray-700 text-center text-2xl ">
                                    yyyy-mm-dd hh:mm
                                </p>
                                <p className="text-6xl text-center mx-auto">
                                    <TbPlane />
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-6 items-center justify-center">
                            <div>
                                <p className="text-gray-700 text-center text-4xl ">
                                    $1000
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-700 text-center text-4xl ">
                                    50 left
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 justify-items-center mt-5">
                            <Button className="w-1/2 bg-pallate-persian_green hover:bg-pallate-blue_munsell">
                                <p className="text-xl">
                                    Reserve Now
                                </p>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 p-5 card-bg border border-pallate-persian_green rounded-xl">
                    <div className="">
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
                        <p className="text-3xl mb-3 text-gray-700">Hotels:</p>
                        <div className="flex flex-wrap flex-row gap-2">
                            <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-2 rounded-2xl">
                                <p className="text-gray-600 text-center text-lg">
                                    Hotel Name
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
                            {places.map((place, index) => {
                                return (
                                    <Popover
                                        open={openPopover[index]}
                                        // handler={setOpenPopover}
                                    >
                                        <PopoverHandler
                                            onMouseEnter={() =>
                                                openPopoverHandler(index)
                                            }
                                            onMouseLeave={() =>
                                                closePopoverHandler(index)
                                            }
                                        >
                                            <div className="date-transport-card-bg cursor-pointer border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl">
                                                <p className="text-gray-600 text-center text-xl">
                                                    {place.name}
                                                </p>
                                            </div>
                                        </PopoverHandler>
                                        <PopoverContent className="bg-transparent border-none shadow-none">
                                            <div className="bg-pallate-celeste border border-pallate-persian_green gap-y-2 rounded-xl grid grid-cols-1 pb-5 pt-0">
                                                <img
                                                    src={Wallpaper1}
                                                    className="h-56 w-auto rounded-t-xl"
                                                />
                                                <p className="text-3xl text-gray-600 text-center">
                                                    {place.name}
                                                </p>
                                                <p className="text-2xl text-gray-600 text-center">
                                                    City; Country
                                                </p>
                                                <Rating className="items-center justify-center">
                                                    <Rating.Star fill={true} />
                                                    <Rating.Star fill={true} />
                                                    <Rating.Star fill={true} />
                                                    <Rating.Star fill={true} />
                                                    <Rating.Star fill={true} />
                                                </Rating>
                                                <div className="grid grid-cols-1">
                                                    <p className="pl-5 text-2xl text-gray-600 text-left">
                                                        Description:
                                                    </p>
                                                    <p className="pl-5 text-lg text-gray-600 w-56 truncate">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit, sed do
                                                        eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua.
                                                        Magna fermentum iaculis
                                                        eu non diam phasellus
                                                        vestibulum. Cras
                                                        fermentum odio eu
                                                        feugiat pretium nibh. Ut
                                                        eu sem integer vitae
                                                        justo eget magna. Dui
                                                        faucibus in ornare quam
                                                        viverra orci sagittis.
                                                        Vestibulum lorem sed
                                                        risus ultricies
                                                        tristique nulla aliquet.
                                                        Nibh mauris cursus
                                                        mattis molestie a. Quam
                                                        vulputate dignissim
                                                        suspendisse in est ante
                                                        in nibh. Urna duis
                                                        convallis convallis
                                                        tellus id interdum
                                                        velit. Consequat
                                                        interdum varius sit
                                                        amet. Tortor at risus
                                                        viverra adipiscing at.
                                                        Augue mauris augue neque
                                                        gravida in fermentum et.
                                                    </p>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <FooterV2 />
        </div>
    );
};

export default TripPage;
