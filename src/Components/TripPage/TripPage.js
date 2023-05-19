import React, { useEffect } from "react";
import Wallpaper1 from "../../Static/bgR.jpg";
import avatar from "../../Static/mylady.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/TripPage/TripPage.scss";
import { TbTrain, TbPlane, TbShip, TbBus } from "react-icons/tb";
import { Avatar } from "@mui/material";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";
import { Button, Rating } from "flowbite-react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useNavigate, useParams } from "react-router-dom";
// import L from "leaflet";
import Lottie from "react-lottie";
import SuccessLottieOptions from "../Loading/LoadingSucess";
import EarthLottieOptions from "../Loading/LoadingEarth";
import axios from "axios";
import Markers from "./Markers";
import { Organizations, TourLeaders } from "./Trips";

const TripPage = () => {
    const navigate = useNavigate();
    const navigation = (id) => {
        console.log(id);
        navigate(`/Place/${id}`);
    }
    const initialD = [false, false, false, false, false];
    const initialT = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    const [openPopover, setOpenPopover] = React.useState(initialD);
    const [openPopoverT, setOpenPopoverT] = React.useState(initialT);
    // const map = useMap();
    const params = useParams();
    const [loading, setLoading] = React.useState(undefined);
    const [completed, setCompleted] = React.useState(undefined);
    const initialTrip = {
        originCountry: "",
        originCity: "",
        Description: "",
        Price: 0,
        Capacity: 0,
        departureDate: "",
        returnDate: "",
        departureTransport: TbBus,
        returnTransport: TbBus,
        Hotels: [""],
        Destinations: [{ country: "", city: "" }],
        Image: Wallpaper1,
        organizationName: "",
    };
    const initialPlaces = [
        {
            id: 1,
            Name: "",
            Country: "",
            City: "",
            lan: 0,
            lon: 0,
            Image: { Wallpaper1 },
            Description: "",
            avgRate: 0,
        },
    ];
    const initialTourleaders = [
        {
            id: 1,
            Name: "Tour Leader 1",
            OrganizationId: 1,
            bio: "lorem ipsum dolor sit amet",
            rate: 4.5,
            Image: avatar,
        },
    ];

    const [tripData, setTripData] = React.useState(initialTrip);
    const [placesData, setPlacesData] = React.useState(initialPlaces);
    const [tourleadersData, setTourleadersData] =
        React.useState(initialTourleaders);
    useEffect(() => {
        console.log(params.id);
        const baseURL = `https://mrsz.pythonanywhere.com/Trip/${params.id}`;
        console.log(baseURL);
        setTimeout(() => {
            axios
                .get(baseURL, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    const raw = res.data[0][0];
                    console.log(raw);
                    let depIcon = TbBus;
                    let retIcon = TbBus;
                    if (raw.transport.departure_transport === "train") {
                        depIcon = TbTrain;
                    } else if (
                        raw.transport.departure_transport === "airplane"
                    ) {
                        depIcon = TbPlane;
                    } else if (raw.transport.departure_transport === "ship") {
                        depIcon = TbShip;
                    }
                    if (raw.transport.return_transport === "train") {
                        retIcon = TbTrain;
                    } else if (raw.transport.return_transport === "airplane") {
                        retIcon = TbPlane;
                    } else if (raw.transport.return_transport === "ship") {
                        retIcon = TbShip;
                    }
                    const dests = raw.destination.map((d) => {
                        return {
                            country: d.country_name,
                            city: d.city_name,
                        };
                    });
                    const trip = {
                        ...initialTrip,
                        originCountry: raw.origin.country_name,
                        originCity: raw.origin.city_name,
                        Description: raw.Description,
                        Price: raw.Price,
                        Capacity: raw.capacity,
                        departureDate:
                            raw.departure_date.slice(0, 10) +
                            " " +
                            raw.departure_date.slice(11, 16),
                        returnDate:
                            raw.return_date.slice(0, 10) +
                            " " +
                            raw.return_date.slice(11, 16),
                        departureTransport: depIcon,
                        returnTransport: retIcon,
                        Hotels: raw.hotel_name ? raw.hotel_name.split(",") : [],
                        organizationName: Organizations.find(
                            (o) => o.id === raw.organization_id
                        ).Name,
                        Destinations: dests,
                    };
                    setTripData(trip);

                    const placeArr = initialPlaces;
                    placeArr.pop();
                    raw.place_ids.forEach((p) => {
                        const pBaseURL = `https://mrsz.pythonanywhere.com/place/Place/${p}`;
                        axios
                            .get(pBaseURL, {
                                headers: { "Content-Type": "application/json" },
                            })
                            .then((pRes) => {
                                const pRaw = pRes.data;
                                const place = {
                                    id: pRaw.id,
                                    Name: pRaw.name,
                                    Country: pRaw.country_name,
                                    City: pRaw.city_name,
                                    lan: pRaw.lan,
                                    lon: pRaw.lon,
                                    Image: Wallpaper1,
                                    Description: pRaw.description,
                                    avgRate: pRaw.avg_rate,
                                };
                                placeArr.push(place);
                                console.log("got here");
                            })
                            .catch((err) => {
                                navigate("/404")
                                console.log(err.message);
                            });
                    });
                    setPlacesData(placeArr);
                    const TlArr = initialTourleaders;
                    TlArr.pop();
                    raw.TourLeader_ids.forEach((t) => {
                        const tl = TourLeaders.find((tl) => tl.id === t);
                        tl.Image = avatar;
                        TlArr.push(tl);
                    });
                    setTourleadersData(TlArr);
                    setLoading(true);
                })
                .catch((err) => {
                    navigate("/404")
                    console.log(err.message);
                });

            setTimeout(() => {
                setCompleted(true);
            }, 2000);
        }, 2000);
        console.log(tourleadersData);
    }, [params]);

    // useEffect(() => {
    //     if (places.length > 0) {
    //         const bounds = L.latLngBounds(
    //             places.map((place) => [place.lan, place.lon])
    //         );
    //         map.fitBounds(bounds);
    //     }
    // }, [places]);

    // const triggers = {
    //     onMouseEnter: () => setOpenPopover(true),
    //     onMouseLeave: () => setOpenPopover(false),
    // };
    const closePopoverHandler = (index) => {
        const newArr = Array.from(openPopover).map((data, i) => {
            if (i == index) {
                return false;
            }
            return false;
        });
        setOpenPopover(newArr);
    };
    const openPopoverHandler = (index) => {
        const newArr = Array.from(openPopover).map((data, i) => {
            if (i == index) {
                return true;
            }
            return false;
        });
        setOpenPopover(newArr);
    };
    const closePopoverHandlerT = (index) => {
        const newArr = Array.from(openPopoverT).map((data, i) => {
            if (i == index) {
                return false;
            }
            return false;
        });
        setOpenPopoverT(newArr);
    };
    const openPopoverHandlerT = (index) => {
        const newArr = Array.from(openPopoverT).map((data, i) => {
            if (i == index) {
                return true;
            }
            return false;
        });
        setOpenPopoverT(newArr);
    };
    return (
        <>
            {!completed ? (
                <>
                    {!loading ? (
                        <div className="w-screen bg-white h-screen grid grid-cols-1 items-center ">
                            <Lottie
                                options={EarthLottieOptions}
                                height={400}
                                width={400}
                            />
                        </div>
                    ) : (
                        <div className="w-screen bg-white h-screen grid grid-cols-1 items-center ">
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
                        <div className="grid md:grid-cols-custom_1_2 justify-center items-stretch w-5/6 mx-auto pt-20 pb-5 gap-7 ">
                            <div className="grid grid-cols-1 justify-center content-between px-0 pt-0 gap-4 py-4 card-bg border border-pallate-persian_green rounded-xl">
                                <img
                                    src={Wallpaper1}
                                    className="h-64 w-full rounded-t-xl"
                                />
                                <div>
                                    <p className="text-pallate-celeste_light text-center text-4xl font-bold">
                                        {tripData.organizationName}
                                    </p>
                                </div>
                                <div className="mx-5  justify-between items-start  gap-3 grid grid-cols-1 py-5 px-3">
                                    <div className="rounded-xl border border-pallate-persian_green date-transport-card-bg p-2">
                                        <p className="text-3xl">From:</p>
                                        <div className="grid grid-cols-3 gap-3 justify-between items-center">
                                            <p className="text-gray-700 text-center ">
                                                {tripData.originCity};{" "}
                                                {tripData.originCountry}
                                            </p>
                                            <p className="text-gray-700 text-center text-2xl ">
                                                {tripData.departureDate}
                                            </p>
                                            <p className="text-6xl text-center mx-auto">
                                                {
                                                    <tripData.departureTransport />
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-pallate-persian_green date-transport-card-bg p-2">
                                        <p className="text-3xl mb-2">To:</p>
                                        <div className="flex items-center justify-start flex-wrap gap-2">
                                            {/* <div className="grid grid-cols-3 gap-3 items-center justify-center"> */}
                                            {tripData.Destinations.map(
                                                (dest, index) => {
                                                    return (
                                                        <div
                                                            className={
                                                                (index % 2 == 0
                                                                    ? "bg-pallate-celeste border-pallate-persian_green"
                                                                    : "bg-pallate-pink_lavender border-pallate-french_mauve") +
                                                                " py-2 px-3 border rounded-full flex transform hover:scale-105 transition duration-500 ease-in-out"
                                                            }
                                                        >
                                                            <p className="text-gray-700 text-center  ">
                                                                {dest.city};{" "}
                                                                {dest.country}
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-pallate-persian_green date-transport-card-bg p-2">
                                        <p className="text-3xl text-gray-700">
                                            Return:
                                        </p>
                                        <div className="grid grid-cols-2 gap-7 justify-between items-center">
                                            <p className="text-gray-700 text-center text-2xl ">
                                                {tripData.returnDate}
                                            </p>
                                            <p className="text-6xl text-center mx-auto">
                                                {<tripData.returnTransport />}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 mt-6 items-center justify-center">
                                        <div>
                                            <p className="text-gray-700 text-center text-4xl ">
                                                ${tripData.Price}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 text-center text-4xl">
                                                <span
                                                    className={
                                                        tripData.Capacity <= 10
                                                            ? " text-red-600 font-semibold"
                                                            : ""
                                                    }
                                                >
                                                    {tripData.Capacity}
                                                </span>
                                                left
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 justify-items-center mt-5">
                                        <Button className="w-1/2 bg-pallate-persian_green hover:bg-pallate-blue_munsell transform hover:scale-110 transition duration-500 ease-in-out ">
                                            <p className="text-xl">
                                                Reserve Now
                                            </p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-10 p-5 card-bg border border-pallate-persian_green rounded-xl">
                                    <div className="">
                                        <p className="text-3xl mb-3 text-gray-700">
                                            Tour Leaders:
                                        </p>
                                        <div className="flex flex-wrap flex-row gap-2">
                                            {tourleadersData.map(
                                                (tourleader, index) => {
                                                    return (
                                                        <Popover
                                                            open={
                                                                openPopoverT[
                                                                    index
                                                                ]
                                                            }
                                                            placement="bottom"
                                                        >
                                                            <PopoverHandler
                                                                onMouseEnter={() =>
                                                                    openPopoverHandlerT(
                                                                        index
                                                                    )
                                                                }
                                                                onMouseLeave={() =>
                                                                    closePopoverHandlerT(
                                                                        index
                                                                    )
                                                                }
                                                            >
                                                                <div className="date-transport-card-bg border cursor-pointer border-pallate-persian_green items-center flex flex-row gap-2 p-2 rounded-3xl transform hover:scale-105 transition duration-500 ease-in-out hover:border-2 ">
                                                                    {/* <Avatar src={tourleader.avatar}/> */}
                                                                    <p className="text-gray-600 text-center text-lg">
                                                                        {
                                                                            tourleader.Name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </PopoverHandler>
                                                            <PopoverContent className="bg-transparent border-none shadow-none">
                                                                <div className="bg-pallate-celeste w-56 px-10 py-5 border border-pallate-persian_green  justify-items-center rounded-xl grid grid-cols-1 gap-3 ">
                                                                    <Avatar
                                                                        src={
                                                                            tourleader.Image
                                                                        }
                                                                        sx={{
                                                                            width: 125,
                                                                            height: 125,
                                                                        }}
                                                                    />
                                                                    <p className="text-gray-600 text-center text-xl font-semibold">
                                                                        {
                                                                            tourleader.Name
                                                                        }
                                                                    </p>
                                                                    <Rating>
                                                                        <Rating.Star
                                                                            filled={
                                                                                Math.floor(
                                                                                    tourleader.rate
                                                                                ) >=
                                                                                1
                                                                            }
                                                                        />
                                                                        <Rating.Star
                                                                            filled={
                                                                                Math.floor(
                                                                                    tourleader.rate
                                                                                ) >=
                                                                                2
                                                                            }
                                                                        />
                                                                        <Rating.Star
                                                                            filled={
                                                                                Math.floor(
                                                                                    tourleader.rate
                                                                                ) >=
                                                                                3
                                                                            }
                                                                        />
                                                                        <Rating.Star
                                                                            filled={
                                                                                Math.floor(
                                                                                    tourleader.rate
                                                                                ) >=
                                                                                4
                                                                            }
                                                                        />
                                                                        <Rating.Star
                                                                            filled={
                                                                                Math.floor(
                                                                                    tourleader.rate
                                                                                ) ==
                                                                                5
                                                                            }
                                                                        />
                                                                    </Rating>
                                                                </div>
                                                            </PopoverContent>
                                                        </Popover>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-3xl mb-3 text-gray-700">
                                            Hotels:
                                        </p>
                                        <div className="flex flex-wrap flex-row gap-2">
                                            {tripData.Hotels.length != 0 ? (
                                                <div className="date-transport-card-bg border border-pallate-persian_green items-center flex flex-row gap-2 p-2 rounded-full transform hover:scale-105 transition duration-500 ease-in-out hover:border-2 hover:bg-pallate-persian_green group ">
                                                    {tripData.Hotels.map(
                                                        (h) => {
                                                            return (
                                                                <p className="text-gray-600 text-center text-lg group-hover:text-white">
                                                                    {h}
                                                                </p>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            ) : (
                                                <p className="text-center text-gray-600 text-4xl mx-auto">
                                                    No Hotels
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-3xl mb-3 text-gray-700">
                                            Description:
                                        </p>
                                        <p className="text-lg text-gray-600">
                                            {tripData.Description}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-3xl mb-3 text-gray-700">
                                            Places:
                                        </p>
                                        <div className="flex flex-wrap flex-row gap-2">
                                            {placesData.map((place, index) => {
                                                return (
                                                    <Popover
                                                        open={
                                                            openPopover[index]
                                                        }
                                                        placement="top"
                                                        // handler={setOpenPopover}
                                                    >
                                                        <PopoverHandler
                                                            onMouseEnter={() =>
                                                                openPopoverHandler(
                                                                    index
                                                                )
                                                            }
                                                            onMouseLeave={() =>
                                                                closePopoverHandler(
                                                                    index
                                                                )
                                                            }
                                                            onClick={() => navigation(place.id)}
                                                        >
                                                            <div
                                                                
                                                                className="date-transport-card-bg cursor-pointer border border-pallate-persian_green items-center flex flex-row gap-2 p-4 rounded-3xl transform hover:scale-105 transition duration-500 ease-in-out hover:border-2"
                                                            >
                                                                <p className="text-gray-600 text-center text-xl">
                                                                    {place.Name}
                                                                </p>
                                                            </div>
                                                        </PopoverHandler>
                                                        <PopoverContent className="bg-transparent border-none shadow-none">
                                                            <div className="bg-pallate-celeste border border-pallate-persian_green gap-y-2 rounded-xl grid grid-cols-1 pb-5 pt-0">
                                                                <img
                                                                    src={
                                                                        Wallpaper1
                                                                    }
                                                                    className="h-56 w-auto rounded-t-xl"
                                                                />
                                                                <p className="text-3xl text-gray-600 text-center w-56 mx-auto truncate">
                                                                    {place.Name}
                                                                </p>
                                                                <p className="text-2xl text-gray-600 text-center">
                                                                    {place.City}
                                                                    ;{" "}
                                                                    {
                                                                        place.Country
                                                                    }
                                                                </p>
                                                                <Rating className="items-center justify-center">
                                                                    <Rating.Star
                                                                        filled={
                                                                            true
                                                                        }
                                                                    />
                                                                    <Rating.Star
                                                                        filled={
                                                                            true
                                                                        }
                                                                    />
                                                                    <Rating.Star
                                                                        filled={
                                                                            true
                                                                        }
                                                                    />
                                                                    <Rating.Star
                                                                        filled={
                                                                            true
                                                                        }
                                                                    />
                                                                    <Rating.Star
                                                                        filled={
                                                                            true
                                                                        }
                                                                    />
                                                                </Rating>
                                                                <div className="grid grid-cols-1">
                                                                    <p className="pl-5 text-2xl text-gray-600 text-left">
                                                                        Description:
                                                                    </p>
                                                                    <p className="pl-5 text-lg text-gray-600 w-56 truncate">
                                                                        {
                                                                            place.Description
                                                                        }
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
                                <div className="rounded-xl z-0">
                                    <MapContainer
                                        scrollWheelZoom={true}
                                        style={{
                                            height: 400,
                                            borderRadius: "15px",
                                        }}
                                    >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />

                                        <Markers places={placesData} />
                                    </MapContainer>
                                </div>
                            </div>
                        </div>
                        <FooterV2 />
                    </div>
                </>
            )}
        </>
    );
};

export default TripPage;
