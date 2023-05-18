import React from "react";
import {
  Button,
  Card,
} from "flowbite-react";
import imgValue from "../../Static/myl.png";
import "../../Styles/ProfilePage/ProfilePage.scss";
import { CiLocationOn } from "react-icons/ci";
import { BsPersonFillCheck } from "react-icons/bs";

const ProfiletourleaderPage = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center bg-cover bg-fixed overflow-auto test7">
      <div className=" grid justify-center p-10 items-center">
        <Card className=" rounded-xl card-bg mr-6 ml-6 border-pallate-persian_green backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-4 ">
            <div className="grid md:grid-cols-2 md:gap-0 sm:grid-cols-1 sm:gap-2 ">
              <div className="grid grid-cols-1 gap-10 p-2 justify-center justify-items-center">
                <img
                  class="w-96 h-96 rounded-xl"
                  src={imgValue}
                  alt="Default avatar"
                ></img>
              </div>
              <div className="grid grid-cols-1 mr-auto items-center text-center gap-4">
                <div>
                  <h3 className="flex justify-center items-center mb-2 text-black font-bold text-3xl leading-normal ">
                    Jenna Stones
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-gray-700 font-bold uppercase">
                    <span className="flex justify-center">
                      <CiLocationOn size={20} />
                      <i class="mr-1 text-lg text-gray-400"></i>
                      Los Angeles, California
                    </span>
                  </div>
                </div>
                <div class="mb-2 text-gray-700">
                  <span className="flex justify-center">
                    <BsPersonFillCheck size={20} />
                    <i class="mr-1 text-lg text-gray-400"></i>
                    World Medical Relief
                  </span>
                </div>
                <div class="border-t text-gray-200 text-center">
                  <div class="flex flex-warp justify-center">
                    <div class="mt-5 w-auto h-auto lg:w-9/12 px-4">
                      <p class="text-lg leading-relaxed text-gray-700">
                        A travel lover who likes to spend his travels in
                        beautiful places and gain new experiences and apply them
                        in his life.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="border-t text-gray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="mt-5  w-auto h-auto lg:w-9/12 px-auto">
                      <p class="text-lg leading-relaxed text-gray-700">example@gmail.com</p>
                      <p class="text-lg leading-relaxed text-gray-700">+989177521289</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="md:hidden mt-10"></div>
      </div>
    </div>
  );
};
export default ProfiletourleaderPage;
