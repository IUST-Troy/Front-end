import React, { useEffect } from "react";
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
import { TbTrain as T, TbPlane as A, TbShip , TbBus as B} from "react-icons/tb";
import axios from "axios";
import Lottie from "react-lottie";
import SuccessLottieOptions from "../Loading/LoadingSucess";
import EarthLottieOptions from "../Loading/LoadingEarth";
import { async } from "react-input-emoji";
import { useNavigate } from "react-router-dom";
const ListofTrips = () => {
    const [loading, setLoading] = React.useState(undefined);
    const [completed, setCompleted] = React.useState(undefined);
    const [startDate, setStartDate] = React.useState("");
    const [countries, setCountries] = React.useState(undefined);
    const [oCountry, setOCountry] = React.useState("");
    const [dCountry, setDCountry] = React.useState("");
    const [oCity, setOCity] = React.useState("");
    const [dCity, setDCity] = React.useState("");
    const [trips, setTrips] = React.useState(undefined);
    const navigate = useNavigate()
    const URL = "https://mrsz.pythonanywhere.com";

    useEffect(() => {
        setTimeout(() => {
            axios
                .get(`${URL}/custom_countrycity/`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    setCountries(res.data);
                    console.log(res.data);
                    getTrips();
                    setLoading(true);
                })
                .catch((err) => {
                    console.log(err.message);
                });
            setTimeout(() => {
                setCompleted(true);
            }, 2000);
        }, 2000);
    }, []);

    const getTrips =  () => {
        
        axios
            .get(UrlGenerator(startDate, oCountry, oCity, dCountry, dCity), {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setTrips(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const UrlGenerator = (
        date,
        originCountry,
        originCity,
        destCountry,
        destCity
    ) => {
        console.log(date);
        let oc = "";
        let dc = "";
        let occ = "";
        let dcc = "";
        let d = "";
        if (originCity !== "") {
            occ = `origin_city_id__city_name=${originCity}&`;
        }
        if (originCountry !== "") {
            oc = `origin_city_id__country_id__country_name=${originCountry}&`;
        }
        if (destCity !== "") {
            dcc = `destination_city__city_name=${destCity}&`;
        }
        if (destCountry !== "") {
            dc = `destination_country=${destCountry}&`;
        }
        if (date !== "") {
            d = `departure_date__gt=${date.toISOString().slice(0,10)}`;
        }
        const res = `${URL}/custome_trip/?${occ}${oc}${dcc}${dc}${d}`;
        return res;
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
                                    minDate={new Date()}
                                    showIcon={true}
                                />
                            </div>
                            <div>
                                <label className="text-white text-2xl font-bold ">
                                    From:
                                </label>
                                <div className="grid grid-cols-2 gap-0 justify-around">
                                    <select
                                        value={oCountry}
                                        onChange={(e) => {
                                            setOCountry(e.target.value);
                                            setOCity("");
                                        }}
                                        className="card-bg rounded-l-2xl border border-pallate-persian_green w-full border-r-0 focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green"
                                    >
                                        <option value="">Country</option>
                                        {countries.map((c) => (
                                            <option value={c.country_name}>
                                                {c.country_name}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={oCity}
                                        onChange={(e) =>
                                            setOCity(e.target.value)
                                        }
                                        className="card-bg rounded-r-2xl border border-pallate-persian_green w-full focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green"
                                    >
                                        <option value="">City</option>
                                        {countries.filter(
                                            (c) => c.country_name === oCountry
                                        ).length > 0
                                            ? countries
                                                  .find(
                                                      (c) =>
                                                          c.country_name ===
                                                          oCountry
                                                  )
                                                  .cities.map((c) => (
                                                      <option
                                                          value={c.city_name}
                                                      >
                                                          {c.city_name}
                                                      </option>
                                                  ))
                                            : 1}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="text-white text-2xl font-bold ">
                                    To:
                                </label>
                                <div className="grid grid-cols-2 gap-0">
                                    <select
                                        value={dCountry}
                                        onChange={(e) => {
                                            setDCountry(e.target.value);
                                            setDCity("");
                                        }}
                                        className="card-bg rounded-l-2xl border border-pallate-persian_green w-full border-r-0 focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green"
                                    >
                                        <option value="">Country</option>
                                        {countries.map((c) => (
                                            <option value={c.country_name}>
                                                {c.country_name}
                                            </option>
                                        ))}
                                    </select>
                                    <select
                                        value={dCity}
                                        onChange={(e) =>
                                            setDCity(e.target.value)
                                        }
                                        className="card-bg rounded-r-2xl border border-pallate-persian_green w-full focus:border-pallate-persian_green focus:ring-offset-pallate-persian_green focus:ring-pallate-persian_green"
                                    >
                                        <option value="none">City</option>
                                        {countries.filter(
                                            (c) => c.country_name === dCountry
                                        ).length > 0
                                            ? countries
                                                  .find(
                                                      (c) =>
                                                          c.country_name ===
                                                          dCountry
                                                  )
                                                  .cities.map((c) => (
                                                      <option
                                                          value={c.city_name}
                                                      >
                                                          {c.city_name}
                                                      </option>
                                                  ))
                                            : 1}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <Button 
                                onClick={getTrips}
                                className="w-full mt-[32px] !rounded-2xl bg-pallate-persian_green hover:bg-pallate-blue_munsell">
                                    <BsSearchHeartFill className="mr-4 text-lg" />
                                    Search
                                </Button>
                            </div>
                        </div>
                        <div className="card-bg org-history border border-pallate-persian_green rounded-2xl overflow-y-auto p-7 gap-7 w-full h-[440px] grid grid-cols-2 ">
                            {trips.length < 1 || trips == undefined ? (
                                <p>No trips found</p>
                            ) : (
                                trips.map((t) => (
                                    <div className="w-full h-96 card-bg rounded-2xl shadow-md border border-pallate-persian_green grid grid-cols-2 divide-x divide-pallate-persian_green">
                                        <div className="flex flex-col w-full h-96 gap-2 justify-between pb-3">
                                            <img
                                                src={t.image===null || t.image==="string"?Wallpaper1:"data:image/jpeg;base64,"+t.image}
                                                className="w-full h-1/3 rounded-tl-2xl"
                                            />
                                            <div className="flex flex-row m-2 items-center gap-3">
                                                <Avatar
                                                    sx={{
                                                        width: 50,
                                                        height: 50,
                                                    }}
                                                    src={t.logo}
                                                >{}</Avatar>
                                                <Tooltip
                                                    content="Travel Agencyyyyyyy"
                                                    style="light"
                                                    arrow={false}
                                                >
                                                    <p className="text-gray-600 text-xl  truncate">
                                                        {t.org_name}
                                                    </p>
                                                </Tooltip>
                                            </div>
                                            <div className="flex flex-col gap-1 pt-3 pl-3">
                                                <div className="grid grid-cols-custom_3_2">
                                                    <div className="flex flex-col">
                                                        
                                                            <p className="text-gray-700 text-xl truncate">
                                                                {t.origin.country_name}; {t.origin.city_name}
                                                            </p>
                                                        
                                                        <p className="text-gray-700 text-xl ">
                                                            {t.departure_date.slice(0,10)}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between">
                                                    {
                                                        t.transport.departure_transport==="A" && <A className="text-pallate-persian_green text-4xl" /> ||
                                                        t.transport.departure_transport==="B" && <B className="text-pallate-persian_green text-4xl" /> ||
                                                        t.transport.departure_transport==="T" && <T className="text-pallate-persian_green text-4xl" /> 
                                                        }
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
                                                        
                                                        {
                                                        t.transport.return_transport==="A" && <A className="text-pallate-persian_green text-4xl" /> ||
                                                        t.transport.return_transport==="B" && <B className="text-pallate-persian_green text-4xl" /> ||
                                                        t.transport.return_transport==="T" && <T className="text-pallate-persian_green text-4xl" /> 
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 ml-2">
                                                <div className="flex flex-col  ">
                                                    <p className="text-gray-700 text-lg  ">
                                                        Price:
                                                    </p>
                                                    <p className="text-gray-700 text-lg ">
                                                        ${t.Price}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col  ">
                                                    <p className="text-gray-700 text-lg ">
                                                        Reserved:
                                                    </p>
                                                    <p className="text-gray-700 text-lg ">
                                                        {t.reserved}/{t.capacity}
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
                                                    {t.destination.map((i) => (
                                                        <div
                                                        className="card-bg rounded-full p-1 max-w-[346px]">
                                                            <p className="text-gray-700 truncate">
                                                                {i.country_name}; {i.city_name}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-gray-700 text-lg">
                                                    Places:
                                                </p>

                                                <div className="flex flex-row flex-wrap h-[89.33px] overflow-y-auto items-center justify-normal gap-1 org-history">
                                                    {t.place.map((i) => (
                                                        <div 
                                                        onClick={()=>navigate(`/place/${i.id}`)}
                                                        className="card-bg rounded-full p-1 max-w-[346px] cursor-pointer">
                                                            <p className="text-gray-700 truncate">
                                                                {i.name}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 justify-center">
                                                <p className="text-gray-700 text-xl">
                                                    Return: <br /> {t.return_date}
                                                    
                                                </p>
                                                <Button 
                                                onClick={()=>navigate(`/trip/${t.id}`)}
                                                className="bg-pallate-persian_green !rounded-2xl hover:bg-pallate-blue_munsell">
                                                    More Info
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <FooterV2 />
                </div>
            )}
        </>
    );
};

export default ListofTrips;
