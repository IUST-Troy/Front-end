import React from "react";
import { Button, Card, Select } from "flowbite-react";
import imgValue from "../../Static/mylady.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsXLg, BsMapFill, BsCalendar } from "react-icons/bs";
import places from "./places";
import transport from "./Transport ";
import moment from "moment";

import { IoMdBoat } from "react-icons/io";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsBusFrontFill } from "react-icons/bs";
import { BsTrainFrontFill } from "react-icons/bs";
import { BsMap } from "react-icons/bs";

const CreateCard = ({ items }) => {
  const [countryValue, setCountryValue] = React.useState("");
  const [countryDisValue, setCountryDisValue] = React.useState("");
  const [cityValue, setCityValue] = React.useState("");
  const [cityDisValue, setCityDisValue] = React.useState("");
  const [departureValue, setdepartureValue] = React.useState("");
  const [returnValue, setreturnValue] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState(new Date());
  const [returnDate, setReturnDate] = React.useState(new Date());
  const [startDate, setstartDate] = React.useState(new Date());
  const [birthDateISOValue, setbirthDateISOValue] = React.useState("");

  // const [imgValue, setImgValue] = React.useState("");

  const handleBirthDateChange = (selectedDate) => {
    setstartDate(selectedDate);
    setbirthDateISOValue(moment(selectedDate).format("YYYY-MM-DD"));
  };

  

  function handleKeyPress(event) {
    const charCode = event.which ? event.which : event.keyCode;
    const input = event.target;
    if (
      charCode === 45 ||
      (charCode === 48 && input.value.length === 0) ||
      charCode === 101 ||
      charCode === 46
    ) {
      event.preventDefault();
    }
  }

  const handleCountryChange = (event) => {
    setCountryValue(event.target.value);
  };
  const handleCountryDisChange = (event) => {
    setCountryDisValue(event.target.value);
  };
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };
  const handleCityDisChange = (event) => {
    setCityDisValue(event.target.value);
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
          <div className="grid grid-cols-1 gap-4 ">
            <div className="grid md:grid-cols-1 md:gap-2 sm:grid-cols-1 sm:gap-2">
              <div className="grid grid-cols-1 gap-10 p-2 justify-center justify-items-center">
                <img
                  class="w-96 h-96 mr-auto ml-auto rounded-xl"
                  src={imgValue}
                  alt="Default avatar"
                ></img>
                <div className="flex justify-start items-center">
                  <input
                    accept="image/*"
                    class="block w-full md:w-auto text-sm rounded-xl text-pallate-persian_green border border-pallate-persian_green cursor-pointer bg-pallate-celeste_light "
                    id="user_avatar"
                    type="file"
                  />
                  <Button
                    className="rounded-2xl ml-2 bg-gray-500 hover:bg-red-600"
                    size="md"
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
                      <label>Country :</label>
                    </div>
                    <Select
                      id="country"
                      class="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
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
                      <label>City :</label>
                    </div>
                    <Select
                      class="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
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
                      <label>departure : ( </label>
                      <BsFillAirplaneFill className="mr-1" />
                      <label>,</label>
                      <IoMdBoat className="mr-1 " />
                      <label>,</label>
                      <BsBusFrontFill className="mr-1 " />
                      <label>,</label>
                      <BsTrainFrontFill className="mr-1 " />
                      <label>)</label>
                    </div>
                    <Select
                      class="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
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
                      <label>Return : ( </label>
                      <BsFillAirplaneFill className="mr-1" />
                      <label>,</label>
                      <IoMdBoat className="mr-1" />
                      <label>,</label>
                      <BsBusFrontFill className="mr-1" />
                      <label>,</label>
                      <BsTrainFrontFill className="mr-1" />
                      <label>)</label>
                    </div>
                    <Select
                      class="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
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
                        <label>departure Date :</label>
                    </div>
                    <DatePicker
                        selected={new Date()}
                        onChange={(date) =>
                            handleBirthDateChange(date)
                        }
                        showMonthDropdown
                        showYearDropdown
                        minDate={new Date()}
                        maxDate={new Date()}
                        dropdownMode="select"
                        className="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                    ></DatePicker>
                    </div>
                    <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                        <BsCalendar className="mr-1" />
                        <label>Return Date :</label>
                    </div>
                    <DatePicker
                        selected={new Date()}
                        onChange={(date) =>
                            handleBirthDateChange(date)
                        }
                        showMonthDropdown
                        showYearDropdown
                        minDate={new Date()}
                        maxDate={new Date()}
                        dropdownMode="select"
                        className="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                    ></DatePicker>
                    </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsMap className="mr-1" />
                      <label>Country :</label>
                    </div>
                    <Select
                      id="country"
                      class="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={countryDisValue}
                      onChange={handleCountryDisChange}
                    >
                      <option>Select</option>
                      {places.map((country) => {
                        return <option>{country.Name}</option>;
                      })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsMap className="mr-1" />
                      <label>City :</label>
                    </div>
                    <Select
                      class="w-full md:w-72 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={cityDisValue}
                      onChange={handleCityDisChange}
                    >
                      <option>Select</option>
                      {countryDisValue === ("Select" || "" || null || undefined)
                        ? 1
                        : places.find(
                            (country) => country.Name === countryDisValue
                          ) === undefined
                        ? 1
                        : places
                            .find((country) => country.Name === countryDisValue)
                            .Cities.sort((c) => c)
                            .map((city) => {
                              return <option>{city}</option>;
                            })}
                    </Select>
                  </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <label>Capacity :</label>
                    </div>
                    <input
                      type="number"
                      id="visitors"
                      class=" w-full md:w-72 gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      placeholder=""
                      min={1}
                      onKeyPress={handleKeyPress}
                      required
                    ></input>
                  </div>
                  <div className="grid justify-start items-center pl-1 text-gray-700">
                    <label>Price :</label>

                    <input
                      type="number"
                      id="visitors"
                      class=" w-full md:w-72 gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      placeholder=""
                      min={1}
                      onKeyPress={handleKeyPress}
                      required
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 pl-8 pr-8">
              <div className="grid grid-cols-2 gap-2"></div>
            </div>
          </div>
          <div className="p-2">
            <Button className="w-full mr-auto ml-auto md:w-80 rounded-xl  bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell">
              Create Trip
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateCard;
