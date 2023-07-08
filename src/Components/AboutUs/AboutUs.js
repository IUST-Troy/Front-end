import React from "react";
import Wallpaper1 from "../../Static/bgR.jpg";
import bayat from "../../Static/AboutUspics/bayat.jpg";
import sadegh from "../../Static/AboutUspics/Sadegh.jpg";
import pooria from "../../Static/AboutUspics/Pooria.jpg";
import helen from "../../Static/AboutUspics/Helen.jpg";
import saheb from "../../Static/AboutUspics/saheb.jpg";
import atra from "../../Static/AboutUspics/Atra.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import { Avatar } from "@mui/material";
const AboutUs = () => {
    return (
        <>
            <div
                className="grid grid-cols-1 gap-0 justify-center items-center content-center"
                style={{
                    background: `url(${Wallpaper1}) no-repeat center center fixed`,
                }}
            >
                <Header />
                <Navbar />
                <div className="flex flex-col  w-5/6 gap-4 mx-auto  items-center my-10 ">
                    <div className="card-bg p-8 rounded-2xl gap-4 border h-[470px] w-full border-pallate-persian_green flex flex-col">
                        <p className="text-gray-700 text-4xl font-semibold">
                            About Us:
                        </p>
                        <div className="grid grid-cols-6 gap-1">
                            <div className="col-span-2 border border-orange-500 grid grid-cols-2 rounded-2xl p-2">
                                <div className="flex flex-col items-center">
                                    <Avatar
                                        sx={{ width: 130, height: 130 }}
                                        src={saheb}
                                    />
                                    <p className="text-gray-700 text-xl text-center">
                                        MohammadReza SahebZadeh
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Avatar
                                        sx={{ width: 130, height: 130 }}
                                        src={helen}
                                    />
                                    <p className="text-gray-700 text-xl text-center">
                                        Helen <br /> KhoshDost
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-4 border grid grid-cols-4 border-blue-600 rounded-2xl p-2">
                                <div className="flex flex-col items-center">
                                    <Avatar
                                        sx={{ width: 130, height: 130 }}
                                        src={atra}
                                    />
                                    <p className="text-gray-700 text-xl text-center">
                                        Atra <br /> Nikpayan
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Avatar
                                        sx={{ width: 130, height: 130 }}
                                        src={bayat}
                                    />
                                    <p className="text-gray-700 text-xl text-center">
                                        Alireza <br /> BayatKhani
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Avatar
                                        sx={{ width: 130, height: 130 }}
                                        src={sadegh}
                                    />
                                    <p className="text-gray-700 text-xl text-center">
                                        Sadegh <br /> MousaZadeh
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Avatar
                                        sx={{ width: 130, height: 130 }}
                                        src={pooria}
                                    />
                                    <p className="text-gray-700 text-xl text-center">
                                        Pooria <br /> Rahimi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed imperdiet tempus porta. Suspendisse
                            consequat molestie ultricies. Proin porttitor
                            molestie volutpat. Mauris finibus ligula quis erat
                            scelerisque, sit amet euismod justo elementum.
                            Nullam et nisl mi. Mauris finibus orci quis leo
                            aliquet, ullamcorper bibendum augue suscipit. Mauris
                            eget lacus maximus, elementum arcu id, eleifend
                            erat. Proin dictum eu massa aliquam vestibulum.
                            Quisque gravida ornare sagittis. Sed dictum metus
                            vel eros lobortis, a luctus risus mattis. Nunc
                            tincidunt velit lectus. Maecenas ut ipsum mi.
                        </p>
                    </div>
                </div>
                <FooterV2 />
            </div>
        </>
    );
};

export default AboutUs;
