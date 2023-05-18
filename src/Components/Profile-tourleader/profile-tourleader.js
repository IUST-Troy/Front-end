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
import imgValue from "../../Static/myl.png"
import "../../Styles/ProfilePage/ProfilePage.scss";

const ProfiletourleaderPage = () => {
  return (
    <div className="test7 grid grid-cols-1 gap-0 p-5 bg-cover bg-center bg-fixed">
      <div className=" grid justify-center p-14 items-center w-full">
          <Card className=" mt-1 m-5 rounded-xl card-bg border-pallate-persian_green backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-4 ">
              <div className="grid md:grid-cols-2 md:gap-0 sm:grid-cols-1 sm:gap-2">
                <div className="leftside grid grid-cols-1 gap-5 justify-center justify-items-center">
                  <Avatar
                    src={imgValue}
                    sx={{
                      width: "12rem",
                      height: "12rem",
                    }}
                  ></Avatar>
                  <div className="w-72">
                    <div className="flex justify-start items-center  text-gray-700">
                      <label>Bio:</label>
                    </div>
                    <p className="overflow-x-clip">
                        sdhfladkfsdvlcvsdfsdfksjd sdfkj.dsbkdf sdfkhlds fsdf hds,fj dsf
                    </p>
                  </div>
                </div>
                <div className="rightside grid grid-cols-1 gap-4">
                  <div>
                    <div className="flex justify-start items-center pl-1 text-gray-700">
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
                        <label>Birth Date:</label>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-start items-center pl-1 text-gray-700">
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
            </div>
          </Card>
        <div className="md:hidden mt-10">
        </div>
      </div>
    </div>
  );
};
export default ProfiletourleaderPage;
