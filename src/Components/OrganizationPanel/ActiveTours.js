import React from "react";
import { Avatar, Pagination as MUIPagination } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Wallpaper1 from "../../Static/bgR.jpg";
import "../../Styles/OrganizationPanel/orgStyles.scss";
import { Button, Tooltip } from "flowbite-react";
import PassengersList from "./PassengersList";
const ActiveTours = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [PassengersListView, setPassengersListView] = React.useState(false);
    const [PassengersListID, setPassengersListID] = React.useState(0);
    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#1BA291ff",
            },
            secondary: {
                main: "#BAE8DBff",
            },
            neutral: {
                main: "#64748B",
                contrastText: "#fff",
            },
        },
    });
    const nums = [1];
    const avas = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            {!PassengersListView &&
            <div className="grid grid-cols-1 grid-rows-custom_9_1 gap-1 h-full w-full">
                <div className="card-bg border border-pallate-persian_green rounded-2xl grid grid-cols-3  gap-4 p-4">
                    {nums.map((num) => (
                        <div className="card-bg border border-pallate-persian_green rounded-2xl flex flex-col gap-2 pt-0 h-[480px]">
                            <img
                                src={Wallpaper1}
                                className="rounded-t-2xl h-1/3 w-full"
                            />
                            <div className="grid grid-cols-2 items-start justify-center content-center justify-items-center gap-4 p-2">
                                <div className="grid grid-cols-1 items-center justify-center">
                                    <p className="text-white italic">From:</p>
                                    <p className="text-white italic">
                                        France; Paris
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 items-center justify-center">
                                    <p className="text-white italic">To:</p>
                                    <p className="text-white italic">
                                        Iran; Tehran
                                    </p>
                                    <p className="text-white italic">...</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 items-start justify-center content-center justify-items-center gap-4 p-2">
                                <p className="text-white italic">Price: $60</p>
                                <p className="text-white italic">
                                    Passengers: 0/50
                                </p>
                            </div>
                            <p className="text-xl font-semibold text-white italic text-center">
                                Date: 20-7-2023 
                            </p>
                            <div className="flex flex-row overflow-x-auto TlAvatar gap-2 pb-2 px-2">
                                {/* {avas.map((num) => (
                                    <Tooltip
                                        content="name surename"
                                        style="light"
                                    >
                                        <Avatar className="cursor-pointer" />
                                    </Tooltip>
                                ))} */}
                            </div>
                            <div className="flex flex-row items-center justify-center gap-3 px-3 pt-3">
                                <Button className="bg-pallate-persian_green rounded-2xl text-white font-semibold text-lg w-full hover:bg-pallate-blue_munsell">
                                    More Info
                                </Button>
                                <Button className="bg-pallate-persian_green rounded-2xl text-white font-semibold text-lg w-full hover:bg-pallate-blue_munsell"
                                        onClick={() => {
                                            setPassengersListID(num);
                                            setPassengersListView(true)}}
                                >
                                    Passenger list
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 py-0 gap-0 items-center  justify-items-center">
                    <ThemeProvider theme={theme}>
                        <MUIPagination
                            size="medium"
                            showFirstButton
                            showLastButton
                            variant="text"
                            color="primary"
                            count={1}
                            page={currentPage}
                            onChange={(e, value) => {
                                setCurrentPage(value);
                            }}
                        />
                    </ThemeProvider>
                </div>
            </div> || (
                <div className="grid grid-cols-1 grid-rows-custom_9_1 items-end h-full w-full">
                    <PassengersList TripID={PassengersListID}/>
                    <Button className="bg-pallate-persian_green hover:bg-pallate-blue_munsell" onClick={() => setPassengersListView(false)}>Back</Button>
                </div>
            
            )}
        </>
    );
};

export default ActiveTours;
