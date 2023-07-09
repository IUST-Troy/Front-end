import React from "react";
import { Button, Card, Select } from "flowbite-react";
import imgValue from "../../Static/trip.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsXLg, BsMapFill, BsCalendar } from "react-icons/bs";
import places from "./places";
import transport from "./Transport ";
import organ from "./Organition";
import Ecomp from "./Placecomp";
import './datepicker.scss'
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdBoat } from "react-icons/io";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsBusFrontFill } from "react-icons/bs";
import { BsTrainFrontFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
const tripURL = "http://mrsz.pythonanywhere.com/trip/";
const gettrip = "http://mrsz.pythonanywhere.com/custom_countrycity/";


const CreateCard = ({ items }) => {

  const [countryValue, setCountryValue] = React.useState("");
  const [countryDisValue, setCountryDisValue] = React.useState("");
  const [organizationValue, setOrganizationValue] = React.useState("");
  const [tourleaderValue, setTourleaderValue] = React.useState("");
  const [cityValue, setCityValue] = React.useState("");
  const [cityDisValue, setCityDisValue] = React.useState("");
  const [departureValue, setdepartureValue] = React.useState("");
  const [returnValue, setreturnValue] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState(new Date());
  const [returnDate, setReturnDate] = React.useState(new Date());
  const [capacityValue , setCap] = React.useState("");
  const [pricevalue ,  setprice] = React.useState("");
  const [imgValue, setImgValue] = React.useState("");
  const [allcityvalue , setallcity] = React.useState([]);
  // const [showfiled, setShowFileds] = React.useState(false);
  const handleCountryDisChange = (event) => {
    console.log(event.target.value);
    setCountryDisValue(event.target.value);
  };
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };
  const handleCityDisChange = (event) => {
    setCityDisValue(event.target.value);
  };
  const handelorgvalue = (event) => {
    setOrganizationValue(event.target.value);
  };
  const handeltourleadervalue = (event) => {
    setTourleaderValue(event.target.value);
  };
  // const handelshowfileds = (event) => {
  //   setShowFileds(event.target.value);
  // };
  const handelcapa = (e) => {
    if(e.target.value > 0)
      setCap(e.target.value);
  };
  const handelprice = (e) => {
    if(e.target.value > 0)
      setprice(e.target.value);
  };
  const comp = (
    <Ecomp
      codv={countryDisValue}
      hcodv={handleCountryDisChange}
      cdv={cityDisValue}
      hcdv={handleCityDisChange}
    />
  );
  const handleRemoveImg = (e) => {
    setImgValue("");
  };
  const handleImgValue = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImgValue(reader.result);
    };
    console.log(imgValue);
};
  const handlepost = (event) => {
    const postBody = {
      origin: {
        country_name:countryValue,
        city_name:cityValue,
      },
      destination:{
        country_name:countryDisValue,
        city_name:cityDisValue,
      },
      departure_transport: departureValue,
      return_transport:returnValue,
      departure_date:departureDate,
      return_date:returnDate,
      capacity:capacityValue,
      Price:pricevalue,
      organization_id:organizationValue,
      TourLeader_ids:tourleaderValue,
      image:imgValue,
  };
  axios
      .post(tripURL, postBody, {
          headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.success("Your trip was successfully created", {
          position: "top-center",
          autoClose: 1500,
          className: "toast-message",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        console.log(res.data);
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 1500,
          className: "toast-message",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
        console.log(err)
      });
    };

  

    const Getcity = (e) => {
      axios
      .get(gettrip, {country_name:e}, {
          headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setallcity(res.data);
        console.log(res.data)
        })
  
      .catch((err) => {
        console.log(err)
      });
    };


  const [cc, setCC] = React.useState([comp]);

  const departureDateHandler = (selectedDate) => {
    setDepartureDate(selectedDate);
  };

  const returnDateHandler = (selectedDate) => {
    setReturnDate(selectedDate);
  };

  // function handleKeyPress(event) {
  //   const charCode = event.which ? event.which : event.keyCode;
  //   const input = event.target;
  //   if (
  //     charCode === 45 ||
  //     (charCode === 48 && input.value.length === 0) ||
  //     charCode === 101 ||
  //     charCode === 46
  //   ) {
  //     event.preventDefault();
  //   }
  // }

  

  const handleCountryChange = (event) => {
    Getcity(event.target.value);
    setCountryValue(event.target.value);
  };
  const handledepartureChange = (event) => {
    setdepartureValue(event.target.value);
  };
  const handlereturnChange = (event) => {
    setreturnValue(event.target.value);
  };

  return (
    <div className="test6 grid grid-cols-1 gap-0 no-repeat p- bg-cover bg-center bg-fixed">
      <div className=" grid justify-center items-center w-full">
        <Card className=" mt-24 m-5 mb-64 rounded-2xl card-bg border-pallate-persian_green backdrop-blur-sm">
          <div className="grid grid-cols-1">
            <div className="grid md:grid-cols-1 md:gap-2 sm:grid-cols-1 sm:gap-2">
              <div className="grid gap-10 p-2 justify-center justify-items-center ">
                <img
                  class="w-screen/2 h-96 mr-auto ml-auto rounded-xl"
                  src={imgValue}
                  alt="Default avatar"
                ></img>
                <div className="flex justify-start items-center">
                  <input
                    onChange={handleImgValue}
                    accept="image/*"
                    class="block w-full md:w-auto text-sm rounded-xl text-pallate-persian_green border border-pallate-persian_green cursor-pointer bg-pallate-celeste_light "
                    id="user_avatar"
                    type="file"
                  />
                  <Button
                    className="rounded-2xl ml-2 bg-gray-500 hover:bg-red-600"
                    size="md"
                    onClick={handleRemoveImg}

                  >
                    <BsXLg />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 mr-auto ml-auto">
                <div className="grid grid-cols-2 md:gap-5 gap-2">
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsMapFill className="mr-1" />
                      <label>Country:</label>
                    </div>
                    <Select
                      id="country"
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={countryValue}
                      onChange={handleCountryChange}
                    >
                      <option>Select</option>
                      {places.map((country) => {
                        return <option>{country.Name}</option>;
                      })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsMapFill className="mr-1" />
                      <label>City:</label>
                    </div>
                    <Select
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={cityValue}
                      onChange={handleCityChange}
                    >
                      <option>Select</option>
                      {countryValue === ("Select" || "" || null || undefined)
                        ? 1
                        : places.find(
                            (country) => country.Name === countryValue
                          ) === undefined
                        ? 1
                        : places
                            .find((country) => country.Name === countryValue)
                            .Cities.sort((c) => c)
                            .map((city) => {
                              return <option>{city}</option>;
                            })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <label>Departure: ( </label>
                      <BsFillAirplaneFill />
                      <label>,</label>
                      <IoMdBoat />
                      <label>,</label>
                      <BsBusFrontFill />
                      <label>,</label>
                      <BsTrainFrontFill />
                      <label>)</label>
                    </div>
                    <Select
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={departureValue}
                      onChange={handledepartureChange}
                    >
                      <option>Select</option>
                      {transport
                        .sort((a, b) => a.Name.localeCompare(b.Name))
                        .map((x) => {
                          return <option>{x.Name}</option>;
                        })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <label>Return: ( </label>
                      <BsFillAirplaneFill />
                      <label>,</label>
                      <IoMdBoat />
                      <label>,</label>
                      <BsBusFrontFill />
                      <label>,</label>
                      <BsTrainFrontFill />
                      <label>)</label>
                    </div>
                    <Select
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={returnValue}
                      onChange={handlereturnChange}
                    >
                      <option>Select</option>
                      {transport
                        .sort((a, b) => a.Name.localeCompare(b.Name))
                        .map((x) => {
                          return <option>{x.Name}</option>;
                        })}
                    </Select>
                  </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsCalendar className="mr-1" />
                      <label>Departure Date:</label>
                    </div>
                    <DatePicker
                      selected={departureDate}
                      onChange={(date) => departureDateHandler(date)}
                      showMonthDropdown
                      showYearDropdown
                      minDate={new Date()}
                      dropdownMode="select"
                      className="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                    />
                  </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsCalendar className="mr-1" />
                      <label>Return Date:</label>
                    </div>
                    <DatePicker
                      onChange={(date) => returnDateHandler(date)}
                      selected={returnDate}
                      showMonthDropdown
                      showYearDropdown
                      minDate={departureDate}
                      dropdownMode="select"
                      className="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                    />
                  </div>


                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsPersonFillCheck size={16} className="mr-1" />
                      <label>Organization:</label>
                    </div>
                    <Select
                      id="org"
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={organizationValue}
                      onChange={handelorgvalue}
                    >
                      <option>Select</option>
                      {organ.map((x) => {
                        return <option>{x.Name}</option>;
                      })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsFillPeopleFill size={16} className="mr-1" />
                      <label>TourLeader Name:</label>
                    </div>
                    <Select
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={tourleaderValue}
                      onChange={handeltourleadervalue}
                    >
                      <option>Select</option>
                      <option>Select</option>
                      <option>Select</option>
                      {organizationValue === ("Select" || "" || null || undefined)
                        ? 1
                        : organ.find((x) => x.Name === organizationValue) ===
                          undefined
                        ? 1
                        : organ
                            .find((x) => x.Name === organizationValue)
                            .Lname.sort((c) => c)
                            .map((y) => {
                              return <option value="{{$y}}">{y}</option>;
                            })}
                    </Select>
                  </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <label>Capacity:</label>
                    </div>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="text-pallate-persian_green">
                          <BsFillCartPlusFill />
                        </span>
                      </div>
                      <input
                        type="number"
                        id="visitors"
                        class=" w-full md:w-80 gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2 "
                        placeholder=""
                        min={1}
                        onChange = {handelcapa}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="grid justify-start items-center pl-1 text-gray-700">
                    <label>Price:</label>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="text-pallate-persian_green">
                          <BsCurrencyDollar />
                        </span>
                      </div>
                      <input
                        type="number"
                        id="visitors"
                        class=" w-full md:w-80 gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2"
                        placeholder=""
                        min={1}
                        onChange = {handelprice}
                        required
                      ></input>
                    </div>
                  </div>
                  { cc.map((c) => {
                    return c;
                  })}
                  <Button className="bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell" onClick={() => {
                    if(cc.length < 5) {
                      setCC((perv) => [...perv, comp])
                    }
                  }}>
                    Add a field
                  </Button>
                  
                  <Button className="bg-red-500 text-white hover:bg-red-600"
                    onClick={() => {
                      if (cc.length > 1) {
                        setCC(cc.filter((x, i) => cc.length - 1 !== i));
                      }
                    }}
                    >
                    Remove a field
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center pl-8 pr-8">
              <div className="grid grid-cols-2 gap-2"></div>
            </div>
          </div>
          <div className="p-2">
            <Button className="w-full mr-auto ml-auto md:w-80  rounded-xl  bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"
              onClick={handlepost}
            >
              Create Trip
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateCard;
