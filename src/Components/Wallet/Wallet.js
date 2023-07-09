import React, { useEffect } from "react";
import Wallpaper1 from "../../Static/bgR.jpg";

import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import { Button } from "flowbite-react";
import axios from "axios";

const Wallet = () => {
    const [balance, setBalance] = React.useState(0);
    const [increase, setIncrease] = React.useState(0);
    useEffect(()=>{
        setBalance(localStorage.getItem("wallet"))
    },[])
    const handleButtonIncrease = (val) => {
        setIncrease(val+increase);
    }
    const handleincrease = () =>{
        axios.post("https://mrsz.pythonanywhere.com/inc_money/",{money:increase},{
            headers:{
                Authorization:`JWT ${localStorage.getItem("acctoken")}`,
                "Content-Type": "application/json"
            }
        }).then(res => {
            setBalance(res.data.wallet)
            localStorage.setItem("wallet",res.data.wallet)
            setIncrease(0)
        }).catch(err => {
            console.log(err.message);
        })
    }
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
                <div className="grid grid-cols-custom_1_3 card-bg rounded-2xl border border-pallate-persian_green w-1/3 mx-auto h-80 my-24 p-8">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-gray-700 text-2xl font-semibold text-center">
                            Current Balance:
                        </p>
                        <p className="text-gray-700 text-4xl font-semibold">
                            ${balance}
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <p className="text-gray-700 text-2xl font-semibold text-center">
                            Increase Balance:
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            <Button onClick={()=>handleButtonIncrease(100)}>+ $100</Button>
                            <Button onClick={()=>handleButtonIncrease(500)}>+ $500</Button>
                            <Button onClick={()=>handleButtonIncrease(1000)}>+ $1000</Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 px-8 w-full">
                            <input type="number" min="1" step="1" value={increase} disabled={true} onChange={(e)=>{setIncrease(e.target.value)}} className="rounded-2xl border border-pallate-persian_green card-bg" />
                            <Button
                            onClick={()=>handleincrease()}
                            >Add!</Button>
                        </div>
                    </div>
                </div>
                <FooterV2/>
            </div>
        </>
    );
};

export default Wallet;
