import React from "react";
import {
    Button,
    Card,
    Select,
    Textarea,
    Progress,
    Tooltip,
} from "flowbite-react";
import { Avatar, IconButton } from "@mui/material";
import imgValue from "../../Static/mylady.jpg"
import Header from "../NavigationBar/Header";
import FooterV2 from "../HomePage/FooterV2";
import Wallpaper1 from "../../Static/Wallpaper1.jpg";
import Navbar from "../NavigationBar/Navbar";
import "../../Styles/ProfilePage/ProfilePage.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import {
    BsPencilSquare,
    BsXLg,
    BsCheckLg,
    BsLockFill,
    BsPenFill,
    BsGenderAmbiguous,
    BsMapFill,
    BsCalendar,
    BsPersonFillLock,
} from "react-icons/bs";
import moment from "moment";
import { BsPatchExclamation } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { HiLockOpen } from "react-icons/hi";

const ProfiletourleaderPage = () => {
  return (
    <div className="test7 grid grid-cols-1 gap-0 bg-center bg-cover bg-fixed">
      <div className=" grid justify-center items-center w-full">
        <Card className=" m-5 pl-24 pr-24  mt-32 rounded-xl  card-bg border-pallate-persian_green backdrop-blur-sm">
          <div className="grid md:grid-cols-3 md:gap-16    sm:grid-cols-1 gap-4 ">
            <Button
              className="bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"
            >
              Edit Profile
            </Button>
            <Button
              className = "bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"
            >
              Change Password
            </Button>
            <Button
              className="bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell"
            >
              Change username
            </Button>
          </div>
        </Card>
          <Card className=" mt-1 m-5 mb-64 rounded-xl  card-bg border-pallate-persian_green backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-4 ">
              <div className="grid md:grid-cols-2 md:gap-0 sm:grid-cols-1 sm:gap-2">
                <div className="leftside grid grid-cols-1 gap-10 p-8 justify-center justify-items-center">
                  <Avatar
                    src={imgValue}
                    sx={{
                      width: "12rem",
                      height: "12rem",
                    }}
                  ></Avatar>
                  <div className="w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsPenFill className="mr-1" />
                      <label>Bio:</label>
                    </div>
                    <Textarea
                      className="bg-pallate-celeste_light placeholder-pallate-persian_green  border-pallate-persian_green focus:border-pallate-persian_green resize-none focus:ring-pallate-persian_green"
                      rows={5}
                      placeholder="bio..."
                      maxLength={100}
                      id="bio"
                    ></Textarea>
                  </div>
                </div>
                <div className="rightside grid grid-cols-1 gap-4 p-8">
                  <div>
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsPersonFill className="mr-1" />
                      <label>First Name:</label>
                    </div>
                    <input
                      maxLength={50}
                      type="text"
                      id="firstname"
                      class="bg-pallate-celeste_light disabled:opacity-80 border-pallate-persian_green   placeholder-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full p-2.5"
                      placeholder="First Name..."
                    />
                  </div>
                  <div>
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsPersonFill className="mr-1" />
                      <label>Last Name:</label>
                    </div>
                    <input
                      maxLength={50}
                      type="text"
                      id="lastname"
                      class="bg-pallate-celeste_light disabled:opacity-80 border-pallate-persian_green   placeholder-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full p-2.5"
                      placeholder="Last Name..."
                    />
                  </div>
                  <div>
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsEnvelopeFill className="mr-1" />
                      <label>Email:</label>
                    </div>
                    <div className="relative">
                      <input
                        maxLength={50}
                        type="email"
                        id="email"
                        class="bg-pallate-celeste_light border disabled:opacity-80 placeholder-pallate-persian_green border-pallate-persian_green  text-sm rounded-lg focus:ring-pallate-persian_green focus:border-pallate-persian_green block w-full  p-2.5 "
                        placeholder="Email"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2  md:gap-2 gap-1">
                    <div className="md:w-40 w-full">
                      <div className="flex justify-start items-center pl-1 text-gray-700">
                        <BsMapFill className="mr-1" />
                        <label>Country:</label>
                      </div>
                      <Select
                        id="country"
                        class="w-full md:w-36 border-pallate-persian_green disabled:opacity-80 rounded-lg  bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      >
                      </Select>
                    </div>
                    <div className="">
                      <div className="flex justify-start items-center pl-1 text-gray-700">
                        <BsMapFill className="mr-1" />
                        <label>City:</label>
                      </div>
                      <Select
                        id="gender"
                        class="w-full md:w-36 border-pallate-persian_green disabled:opacity-80 rounded-lg  bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      >
                        <option>Select</option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  md:gap-2 gap-1">
                    <div className="md:w-40 w-full">
                      <div className="flex justify-start items-center pl-1 text-gray-700">
                        <BsCalendar className="mr-1" />
                        <label>Birth Date:</label>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-start items-center pl-1 text-gray-700">
                        <BsGenderAmbiguous className="mr-1" />
                        <label>Gender:</label>
                      </div>
                      <Select
                        id="gender"
                        class="w-full md:w-36 border-pallate-persian_green disabled:opacity-80 rounded-lg  bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Not Selected</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 pl-8 pr-8">
                <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500"
                    >
                      <BsPencilSquare />
                      Edit
                    </Button>

                    <Button
                      className="bg-red-500 hover:bg-red-600"
                    >
                      <BsXLg />
                      Cancel
                    </Button>
                    <Button
                      className="bg-pallate-persian_green hover:bg-pallate-blue_munsell text-4xl"
                    >
                      <BsCheckLg />
                      Submit
                    </Button>

                </div>
              </div>
            </div>
          </Card>
        <div className="md:hidden mt-10">
        </div>
      </div>
    </div>
  );
};
export default ProfiletourleaderPage;
