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
import man1 from "../../Static/man-1.jpg"
import man2 from "../../Static/man-2.jpg"
import man3 from "../../Static/mio.jpg"
import woman1 from "../../Static/mio4.jpg"
import woman2 from "../../Static/woman-1.jpg"
import woman3 from "../../Static/woman-3.jpg"
const TourLeaders = () => {
    const [Descending, setDescending] = React.useState(false);
    const [sortBy , setSortBy] = React.useState("name")
    const [Loading, setLoading] = React.useState(false);
    
    const tls = [
        {
            name: "John Smith",
            rate : 4,
            avatar: man1,
            count: 2
        },
        {
            name: "David Jones",
            rate : 2,
            avatar: man2,
            count: 1
        },
        {
            name: "Sarah Johnson",
            rate : 3,
            avatar: woman1,
            count: 6
        },
        {
            name: "Michael Williams",
            rate : 4.5,
            avatar: woman2,
            count: 4
        },
        {
            name: "Robert Anderson",
            rate : 2.5,
            avatar: man3,
            count: 5
        },
        {
            name: "Jessica Wilson",
            rate : 3,
            avatar: woman3,
            count: 4
        },
    ]
    const [tlsS, setTlsS] = React.useState(tls)
    useEffect(() => {
        setLoading(true);
        let x = tlsS.sort()
        setTlsS(x)
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);
    useEffect(()=>{
        setLoading(true);
        let x = tlsS;
        if (sortBy==="name") {
            x = x.sort()
        }
        else if(sortBy==="rate"){
            x = x.sort((a,b)=> (a.rate>b.rate)?1:-1)
        }
        else{
            x = x.sort((a,b)=> (a.count>b.count)?1:-1)
        }
        if (Descending===true) {
            x= x.reverse()
            console.log(x);
        }
        setTlsS(x);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    },[sortBy,Descending])
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
                {!Loading && (tlsS.map((tl) => (
                    <div className="w-full shadow-md h-96 flex flex-col items-center justify-between px-4 py-8 gap-4 bg-pallate-celeste_lowOp rounded-2xl">
                        <Avatar
                            sx={{
                                height: 100,
                                width: 100,
                            }}
                            src={tl.avatar}
                        />
                        <p className="text-white text-xl w-full font-semibold truncate text-center">
                            {tl.name}
                        </p>
                        <Rating>
                            <Rating.Star filled={tl.rate>0} />
                            <Rating.Star filled={tl.rate>1} />
                            <Rating.Star filled={tl.rate>2} />
                            <Rating.Star filled={tl.rate>3} />
                            <Rating.Star filled={tl.rate>4} />
                        </Rating>
                        <p className="text-white text-lg italic">Total Trips:{tl.count.toString()}</p>
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
