import React, { useEffect } from "react";
import "../../Styles/OrganizationPanel/orgStyles.scss";
import { Button, Rating , TextInput } from "flowbite-react";
import {
    BsSearch,
    BsPersonFillAdd
} from "react-icons/bs";
import { Avatar } from "@mui/material";
const AddTourLeader = () => {
    const [Descending, setDescending] = React.useState(false);
    const [sortBy , setSortBy] = React.useState("name")
    const [Loading, setLoading] = React.useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div className="card-bg rounded-2xl border border-pallate-persian_green h-[576.59px] w-full flex flex-col gap-4 pb-4 ">
            <div className="w-full mt-2">
                <div className="w-1/2 mx-auto relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsSearch className="text-pallate-persian_green"/>
                    </div>
                    <input  class="pl-10 card-bg rounded-2xl tracking-wide w-full h-10 border border-pallate-persian_green p-2.5 focus:ring-offset-0 focus:border-none text-pallate-persian_green placeholder-white" placeholder="Search Tour Leader..."/>
                </div>
            </div>
            <div className="w-full h-full grid grid-cols-4 overflow-y-auto  org-history  gap-4 px-4">
                {!Loading && ([
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22,
                ].map((num) => (
                    <div className="w-full shadow-md h-96 flex flex-col items-center justify-between px-4 py-8 gap-4 bg-pallate-celeste_lowOp rounded-2xl">
                        <Avatar
                            sx={{
                                height: 100,
                                width: 100,
                            }}
                        />
                        <p className="text-white text-xl w-full font-semibold truncate">
                            Name Surenameeeeeeeeeeeeeee
                        </p>
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                        </Rating>
                        <p className="text-white text-lg italic">Total Trips: {num}</p>
                        <Button className="w-fit  bg-pallate-persian_green hover:bg-pallate-blue_munsell"> <BsPersonFillAdd className="mr-2 text-xl"/> Send Invitation</Button>
                    </div>
                ))) || 
                Loading && (
                    [
                        1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <div className="w-full shadow-md h-96 card-bg flex flex-col items-center justify-between px-4 py-8 gap-4 animate-pulse rounded-2xl">
                                <Avatar  sx={{height: 100,
                                width: 100}}/>
                                <div className="w-full h-[28px] card-bg rounded-xl"></div>
                                <div className="w-[100px] h-[20px] card-bg rounded-xl"></div>
                                <div className="w-[100px] h-[28px] card-bg rounded-xl"></div>
                                <div className="w-[168px] h-[42px] card-bg rounded-lg"></div>
                            </div>
                        ))
                )}
            </div>
        </div>
    );
};

export default AddTourLeader;
