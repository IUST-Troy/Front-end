import React, { useEffect } from "react";
import "../../Styles/OrganizationPanel/orgStyles.scss";
import { Button, Rating } from "flowbite-react";
import {
    BsPersonFill,
    BsStarFill,
    BsHash,
    BsArrowDown,
    BsArrowUp,
    BsPersonDashFill
} from "react-icons/bs";
import { Avatar } from "@mui/material";
const TourLeaders = () => {
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
            <div className="w-full sticky top-0 z-10">
                <Button.Group className="w-full rounded-tl-2xl rounded-b-none">
                    <Button className={(sortBy==="name"? "bg-pallate-persian_green" : "bg-transparent")+" rounded-b-none rounded-tl-2xl focus:ring-0 focus:ring-offset-0 text-white font-semibold text-lg w-full hover:bg-pallate-celeste_lowOp"}
                        onClick={()=>setSortBy("name")}
                    >
                        <BsPersonFill className="text-2xl mr-3" />
                        Name
                    </Button>
                    <Button className={(sortBy==="rate"? "bg-pallate-persian_green" : "bg-transparent")+" rounded-2xl focus:ring-0 focus:ring-offset-0 text-white font-semibold text-lg w-full hover:bg-pallate-celeste_lowOp"}
                        onClick={()=>setSortBy("rate")}
                    >
                        <BsStarFill className="text-2xl mr-3" />
                        Rate
                    </Button>
                    <Button className={(sortBy==="count"? "bg-pallate-persian_green" : "bg-transparent")+" rounded-2xl focus:ring-0 focus:ring-offset-0 text-white font-semibold text-lg w-full hover:bg-pallate-celeste_lowOp"}
                        onClick={()=>setSortBy("count")}
                    >
                        <BsHash className="text-2xl mr-3" />
                        Trip Count
                    </Button>
                    <Button className={(!Descending ? "bg-pallate-persian_green" : "bg-transparent")+" rounded-2xl focus:ring-0 focus:ring-offset-0 text-white font-semibold text-lg w-full hover:bg-pallate-celeste_lowOp"}
                        onClick={()=>setDescending(false)}
                    >
                        <BsArrowUp className="text-2xl mr-3" />
                        Ascending
                    </Button>
                    <Button className={(Descending ? "bg-pallate-persian_green" : "bg-transparent")+" rounded-br-none focus:ring-0 focus:ring-offset-0 rounded-tr-2xl text-white font-semibold text-lg w-full hover:bg-pallate-celeste_lowOp"}
                        onClick={()=>setDescending(true)}
                    >
                        <BsArrowDown className="text-2xl mr-3" />
                        Descending
                    </Button>
                </Button.Group>
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
                        <Button className="w-fit bg-red-600 hover:bg-red-700"> <BsPersonDashFill className="mr-2 text-xl"/> Fire Tour Leader</Button>
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

export default TourLeaders;
