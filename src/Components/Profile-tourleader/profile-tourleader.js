import React from "react";
import { Card } from "flowbite-react";
import imgValue from "../../Static/myl.png";
import "../../Styles/ProfilePage/ProfilePage.scss";
import { CiLocationOn } from "react-icons/ci";
import { BsPersonFillCheck } from "react-icons/bs";
import { Collapse, Ripple, initTE } from "tw-elements";

initTE({ Collapse, Ripple });

const ProfiletourleaderPage = () => {
  const [isEndTripVisible, setIsEndTripVisible] = React.useState(false);
  return (
    <div className="grid grid-cols-1 justify-center items-center bg-cover bg-fixed overflow-auto test7">
      <div className=" grid justify-center p-10 items-center">
        <Card className=" rounded-xl card-bg mr-4 ml-4 border-pallate-persian_green backdrop-blur-sm">
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
                <div class="flex flex-col items-center gap-2">
                  <span class="flex items-center gap-4 text-sm rounded text-slate-500">
                    <span
                      class="flex gap-1 text-amber-400"
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
                      <p class="text-lg leading-relaxed text-gray-700">
                        example@gmail.com
                      </p>
                      <p class="text-lg leading-relaxed text-gray-700">
                        +989177521289
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="inline-block rounded-lg px-6 pb-2 text-center pt-2.5 text-xs font-medium text-white bg-pallate-persian_green hover:bg-pallate-blue_munsell"
            data-te-collapse-init
            data-te-ripple-init
            data-te-ripple-color="light"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => setIsEndTripVisible(true)}
          >
            See trip
          </a>
          <div
            class="!visible hidden"
            id="collapseExample"
            data-te-collapse-item
          >
            <div class="block rounded-lg bg-white p-6 ">
              <body class="antialiased test7 text-gray-900 font-sans p-6 bg-cover overflow-y-scroll">
                <div class="container mx-auto my-11">
                  <div class="flex flex-wrap -mx-4">
                    <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                      <div class="relative pb-48 overflow-hidden">
                        <img
                          class="absolute inset-0 h-full w-full object-cover"
                          src={imgValue}
                          alt=""
                        ></img>
                      </div>
                      <div class="p-4">
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Highlight
                        </span>
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Highlight
                        </span>

                        <h2 class="mt-2 mb-2  font-bold text-white">
                          Purus Ullamcorper Inceptos Nibh
                        </h2>
                        <p class="text-sm text-white">
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec ullamcorper nulla non metus auctor
                          fringilla.
                        </p>
                        <div class="mt-3 flex items-center text-white">
                          <p>7:11 am</p>
                          <span> </span>
                          <p>10:10 am </p>
                        </div>
                      </div>
                      <span class="flex items-center mb-1"></span>
                      <span class="flex items-center"></span>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                      <div class="relative pb-48 overflow-hidden">
                        <img
                          class="absolute inset-0 h-full w-full object-cover"
                          src={imgValue}
                          alt=""
                        ></img>
                      </div>
                      <div class="p-4">
                        <span class="mr-1 inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Highlight
                        </span>
                        <span class="mr-1 inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Highlight
                        </span>
                        <h2 class="mt-2 mb-2  font-bold text-white">
                          Purus Ullamcorper Inceptos Nibh
                        </h2>
                        <p class="text-sm text-white">
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec ullamcorper nulla non metus auctor
                          fringilla.
                        </p>
                        <div class="mt-3 flex items-center text-white">
                          <p>7:11 am</p>
                          <span> </span>
                          <p>10:10 am </p>
                        </div>
                      </div>
                      <span class="flex items-center mb-1"></span>
                      <span class="flex items-center"></span>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                      <div class="relative pb-48 overflow-hidden">
                        <img
                          class="absolute inset-0 h-full w-full object-cover"
                          src={imgValue}
                          alt=""
                        ></img>
                      </div>
                      <div class="p-4">
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Highlight
                        </span>
                        <h2 class="mt-2 mb-2  font-bold text-white">
                          Purus Ullamcorper Inceptos Nibh
                        </h2>
                        <p class="text-sm text-white">
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec ullamcorper nulla non metus auctor
                          fringilla.
                        </p>
                        <div class="mt-3 flex items-center text-white">
                          <p>7:11 am</p>
                          <span> </span>
                          <p>10:10 am </p>
                        </div>
                      </div>
                      <span class="flex items-center mb-1"></span>
                      <span class="flex items-center"></span>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                      <div class="relative pb-48 overflow-hidden">
                        <img
                          class="absolute inset-0 h-full w-full object-cover"
                          src={imgValue}
                          alt=""
                        ></img>
                      </div>
                      <div class="p-4">
                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                          Highlight
                        </span>
                        <h2 class="mt-2 mb-2  font-bold text-white">
                          Purus Ullamcorper Inceptos Nibh
                        </h2>
                        <p class="text-sm text-white ">
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Donec ullamcorper nulla non metus auctor
                          fringilla.
                        </p>
                        <div class="mt-3 flex items-center text-white">
                          <p>7:11 am</p>
                          <span> </span>
                          <p>10:10 am </p>
                        </div>
                      </div>
                      <span class="flex items-center mb-1"></span>
                      <span class="flex items-center"></span>
                    </div>
                  </div>
                </div>
              </body>
            </div>
          </div>

        </Card>
        <div className="md:hidden mt-10"></div>
      </div>
    </div>
  );
};
export default ProfiletourleaderPage;
