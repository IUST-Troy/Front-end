import React from "react";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import "./slider.css";
// import required modules
import { Navigation, Pagination } from "swiper";
// import data
import { products } from "./data";
// import icons
import { HiPlus } from "react-icons/hi";

const ProductSlider = () => {
  const { pages } = products;
  return (
    <div
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      // modules={[Pagination, Navigation]}
      // className="productSlider min-h-[1300px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] ">
              {page.productList.map((product, index) => {
                const { image, name } = product;
                return (
                  <div
                    className="w-full max-w-[290px] h-[380px] text-left  "
                    key={index}
                  >
                    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 group-hover:rounded-2xl rounded-2xl">
                      <div class="h-96 w-72">
                        <img
                          class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 group-hover:rounded-2xl"
                          src={image.type}
                          alt=""
                        />
                      </div>
                      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60  group-hover:rounded-2xl group-hover:to-black/70 rounded-2xl"></div>
                      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center rounded-2xl justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0  group-hover:rounded-2xl">
                        <h1 class="font-dmserif text-3xl font-bold text-white">
                        {name}
                        </h1>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Facilis dolore adipisci placeat.
                        </p>
                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                          See More
                        </button>
                      </div>
                    </div>
                   
                   
             
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </div>
  );
};

export default ProductSlider;
