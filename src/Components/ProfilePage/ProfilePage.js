import React from "react";
import { Card } from "flowbite-react";
import { Avatar, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles"
import Header from "../NavigationBar/Header";
import FooterV2 from "../HomePage/FooterV2";
import { Parallax } from "react-parallax";
import Wallpaper1 from "../../Static/Wallpaper1.jpg";
import Navbar from "../NavigationBar/Navbar";
import "../../Styles/ProfilePage/ProfilePage.scss"














const ProfilePage = () => {
    const [isEditMode, setEditMode] = React.useState(false)
    const editModeHandler = () => {
        setEditMode(true)
    }
    const cancelEditHandler = () => {
        setEditMode(false)
    }


    return (
        <>
            <Header />
            <Navbar />
            <Parallax className="image"
                bgImage={Wallpaper1}
                strength={800}
                blur={4.5}
            >
                <div className="flex justify-center items-center h-screen">
                    <Card className="m-auto  bg-pallate-celeste_light border-pallate-persian_green"

                    >
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="leftside grid grid-cols-1 gap-10">
                                    <Avatar sx={{
                                        width: "15rem",
                                        height: "15rem"
                                    }}></Avatar>
                                    <div>
                                        {/* <input className="block w-full p-4 text-green border-pallate-persian_green rounded-lg bg-slate-100 focus:ring-red-700  focus:border-pallate-pink_lavender"/> */}
                                    </div>
                                </div>
                                <div className="rightside grid grid-cols-1 gap-4">

                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

            </Parallax>
            <FooterV2 />
        </>
    )
}

export default ProfilePage;