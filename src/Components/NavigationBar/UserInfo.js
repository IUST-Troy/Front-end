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
} from "@mui/material";
import { useState } from "react";
import { ExitToApp, Edit, Dashboard, History } from "@material-ui/icons";

const UserInfo = ({ Uname, id, avatarpath }) => {
    const [userMenu, setUserMenu] = useState(null);

    const openMenuHandler = (event) => {
        setUserMenu(event.currentTarget);
    };
    const closeMenuHandler = (event) => {
        setUserMenu(null);
    };

    return (
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
                        }}
                    >
                        {Uname}
                    </Typography>
                    <Link
                        href={"#" + id}
                        sx={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Typography
                            px={5}
                            sx={{
                                mr: 0.5,
                                display: "flex",
                                fontFamily: "Roboto",
                                fontWeight: 600,
                                letterSpacing: ".1rem",
                                color: "inherit",
                                textDecoration: "none",
                                fontSize: "1rem",
                            }}
                        >
                            @{id}
                        </Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item>
                <Tooltip title="Settings">
                    <IconButton sx={{ p: 0 }} onClick={openMenuHandler}>
                        <Avatar
                            sx={{ width: 75, height: 75 }}
                            src={avatarpath}
                        />
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
                        onClick={closeMenuHandler}
                        sx={{
                            m: (0.5, 1),
                            borderRadius: 1.2,
                            "&:hover": {
                                backgroundColor: "rgba(186, 232, 219, 0.438)",
                            },
                        }}
                    >
                        <ListItemIcon>
                            <Dashboard />
                        </ListItemIcon>
                        <Typography className="menuItem-typo">
                            DashBoard
                        </Typography>
                    </MenuItem>
                    <MenuItem
                        onClick={closeMenuHandler}
                        sx={{
                            m: (0.5, 1),
                            borderRadius: 1.2,
                            "&:hover": {
                                backgroundColor: "rgba(186, 232, 219, 0.438)",
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
                        onClick={closeMenuHandler}
                        sx={{
                            m: (0.5, 1),
                            borderRadius: 1.2,
                            "&:hover": {
                                backgroundColor: "rgba(186, 232, 219, 0.438)",
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
                        onClick={closeMenuHandler}
                        sx={{
                            m: (0.5, 1),
                            borderRadius: 1.2,
                            "&:hover": {
                                backgroundColor: "rgba(185, 102, 187, 0.122)",
                            },
                        }}
                    >
                        <ListItemIcon>
                            <ExitToApp  style={{color: "red"}}/>
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
    );
};

export default UserInfo;
