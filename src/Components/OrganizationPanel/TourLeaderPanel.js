import React from "react";
import pic1 from "../../Static/bgR.jpg";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import { Button, Tooltip } from "flowbite-react";
import {
    MdDashboard,
    MdCurrencyBitcoin,
    MdHistory,
    MdPeopleAlt,
    MdCheck,
    MdSettings,
    MdLogout,
} from "react-icons/md";
import Dashboard from "./Dashboard";
import TourLeaderHistory from "./TourLeaderPanelHistory";
import Revenue from "./Revenue";
const TourLeaderHistoryPage = () => {
    const Pages = {
        Dashboard: 0,
        History: 1,
        Revenue: 2,
    };
    const [Page, setPage] = React.useState(Pages.Dashboard);

    return (
        <>
            <div
                className="grid grid-cols-1 gap-0 justify-center items-center content-center"
                style={{
                    background: `url(${pic1}) no-repeat center center fixed`,
                }}
            >
                <Header />
                <Navbar />
                <div className="grid grid-cols-custom_1_6 gap-4 items-center justify-center mx-auto my-8 w-4/6 h-[60vh]">
                    <div className="h-full card-bg border flex flex-col justify-between pt-5 px-0 border-pallate-persian_green rounded-2xl">
                        <div className="grid grid-cols-1 gap-4 px-0">
                            <Button
                                className={
                                    Page === Pages.Dashboard
                                        ? "bg-pallate-persian_green hover:bg-pallate-persian_green rounded-none w-full focus:ring-transparent focus:ring-offset-transparent !justify-start"
                                        : "bg-transparent hover:bg-pallate-celeste_lowOp !justify-start"
                                }
                                onClick={() => setPage(Pages.Dashboard)}
                            >
                                <div className="text-left text-lg flex  items-center gap-2">
                                    <MdDashboard />
                                    <p>Dashboard</p>
                                </div>
                            </Button>
                            <Button
                                className={
                                    Page === Pages.Revenue
                                        ? "bg-pallate-persian_green hover:bg-pallate-persian_green rounded-none w-full focus:ring-transparent focus:ring-offset-transparent !justify-start"
                                        : "bg-transparent hover:bg-pallate-celeste_lowOp !justify-start"
                                }
                                onClick={() => setPage(Pages.Revenue)}
                            >
                                <div className="text-left text-lg flex  items-center gap-2">
                                    <MdCurrencyBitcoin />
                                    <p>Revenue</p>
                                </div>
                            </Button>
                            <Button
                                className={
                                    Page === Pages.History
                                        ? "bg-pallate-persian_green hover:bg-pallate-persian_green rounded-none w-full focus:ring-transparent focus:ring-offset-transparent !justify-start"
                                        : "bg-transparent hover:bg-pallate-celeste_lowOp !justify-start"
                                }
                                onClick={() => setPage(Pages.History)}
                            >
                                <div className="text-left text-lg flex  items-center gap-2">
                                    <MdHistory />
                                    <p>History</p>
                                </div>
                            </Button>
                        </div>
                        <div className="rounded-b-2xl grid grid-cols-2 pb-4 items-center justify-center content-center justify-items-center">
                            <Tooltip
                                content="Logout!"
                                style="light"
                                arrow={false}
                            >
                                <p className="text-4xl text-red-600 text-center cursor-pointer transform hover:scale-125 transition duration-300 ease-in-out">
                                    <MdLogout />
                                </p>
                            </Tooltip>
                            <Tooltip
                                content="Settings"
                                style="light"
                                arrow={false}
                            >
                                <p className="text-4xl text-white text-center cursor-pointer transform hover:scale-125 transition duration-300 ease-in-out">
                                    <MdSettings />
                                </p>
                            </Tooltip>
                        </div>
                    </div>
                    {(Page === Pages.Dashboard && <Dashboard />) ||
                        (Page === Pages.History && <TourLeaderHistory />) || 
                        (Page === Pages.Revenue && <Revenue/>)}
                </div>
                <FooterV2 />
            </div>
        </>
    );
};

export default TourLeaderHistoryPage;
