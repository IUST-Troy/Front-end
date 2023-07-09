import React from "react";
import "../../Styles/NavigationBar/NavigationBar.scss";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import {
    IconButton,
    Link,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
    ListItemIcon,
    Snackbar,
} from "@mui/material";
import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify'
import MuiAlert from '@mui/material/Alert'
import { ExitToApp, Edit, Dashboard, History , AccountBalanceWallet as Wallet } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const UserInfo = ({ firstName, lastName, id, avatarPath }) => {
    
    const [userMenu, setUserMenu] = useState(null);
    const [loggingOut, setLoggingOut] = useState(false);
    const navigate = useNavigate()
    const openMenuHandler = (event) => {
        setUserMenu(event.currentTarget);
    };
    const closeMenuHandler = (event) => {
        setUserMenu(null);
    };

    const menuClickHandler = (route)=>{
        navigate(route)
    }


    const LogOutNotification = () => toast.success("logged out sucessfully , redirecting to sign in page" , {
        position: "top-center",
        autoClose : 1500,
        hideProgressBar:false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
    })

    const LogOutClickHandler = () => {
        LogOutNotification()
        setLoggingOut(true)
        setTimeout(() => {
            localStorage.clear()
            navigate("/sign-in")
        }, 1500);
    };

    
    let theme = useTheme();

    return (
        <>
            <ToastContainer/>
            <Grid container alignItems="center">
                <Grid item>
                    <Box px={1}>
                        <Typography
                            onClick={openMenuHandler}
                            sx={{
                                mr: 0.5,
                                display: "flex",
                                fontFamily: "Roboto",
                                fontWeight: 600,
                                letterSpacing: ".1rem",
                                color: "#1BA291ff",
                                textDecoration: "none",
                                fontSize: "1.5rem",
                                direction: "rtl"
                            }}
                        >
                            {localStorage.getItem("firstname")?localStorage.getItem("firstname") + " " +localStorage.getItem("lastname"):"Not Defiend"}
                        </Typography>
                        <Link
                            href={"#" + id}
                            sx={{ textDecoration: "none", color: "inherit" }}
                        >
                            <Typography
                                px={5}
                                sx={{
                                    mr: 0.0,
                                    display: "flex",
                                    fontFamily: "Roboto",
                                    fontWeight: 600,
                                    letterSpacing: ".1rem",
                                    // color: "inherit",
                                    textDecoration: "none",
                                    fontSize: "1rem",
                                    color : "rgba(27, 162, 145, 1.00)",
                                    
                                    
                                }}
                            >
                                @{localStorage.getItem("username")}
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item>
                    <Tooltip title="Settings">
                        <IconButton sx={{ p: 0 }} onClick={openMenuHandler}>
                            <Avatar
                                sx={{
                                    [theme.breakpoints.down("md")]: {
                                        bgcolor:  "rgba(186, 232, 219, 0.5)",
                                        width: 60,
                                        height: 60,
                                       
                                      },
                                      [theme.breakpoints.up("md")]: {
                                        
                                      },
                                    width: 75,
                                    height: 75,
                                    bgcolor: "#1BA291ff",
                                }}
                                src={localStorage.getItem("avatar")}
                            >
                                {localStorage.getItem("firstname")?localStorage.getItem("firstname")[0]:"N"}
                                {localStorage.getItem("lastname")?localStorage.getItem("lastname")[0]:"A"}
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        className="user-menu"
                        sx={{
                            mt: "80px",
                        }}
                        anchorEl={userMenu}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={userMenu}
                        onClose={closeMenuHandler}
                    >
                        <MenuItem
                            onClick={()=>menuClickHandler("/wallet")}
                            sx={{
                                m: (0.5, 1),
                                borderRadius: 1.2,
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(186, 232, 219, 0.438)",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <Wallet />
                            </ListItemIcon>
                            <Typography className="menuItem-typo">
                                Wallet
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={()=>menuClickHandler("/profile")}
                            sx={{
                                m: (0.5, 1),
                                borderRadius: 1.2,
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(186, 232, 219, 0.438)",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <Edit />
                            </ListItemIcon>
                            <Typography className="menuItem-typo">
                                Edit Profile
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={()=>menuClickHandler("/history")}
                            sx={{
                                m: (0.5, 1),
                                borderRadius: 1.2,
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(186, 232, 219, 0.438)",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <History />
                            </ListItemIcon>
                            <Typography className="menuItem-typo">
                                History
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            disabled={loggingOut}
                            onClick={LogOutClickHandler}
                            sx={{
                                m: (0.5, 1),
                                borderRadius: 1.2,
                                "&:hover": {
                                    backgroundColor:
                                        "rgba(185, 102, 187, 0.122)",
                                },
                            }}
                        >
                            <ListItemIcon>
                                <ExitToApp style={{ color: "red" }} />
                            </ListItemIcon>
                            <Typography
                                className="menuItem-typo"
                                sx={{ color: "red" }}
                            >
                                LogOut!
                            </Typography>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </>
    );
};

export default UserInfo;


