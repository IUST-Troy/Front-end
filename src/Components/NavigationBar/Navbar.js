import React from "react";
import {
    Box,
    AppBar,
    Button,
    Container,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    IconButton,
    Typography,
    styled,
    alpha,
    Grid,
    Switch,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Serach } from "@material-ui/icons";
import SearchBar from "./Searchbar";
import "../../Styles/NavigationBar/NavigationBar.scss";
import { Navigate, useNavigate } from "react-router-dom"
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { BsList } from 'react-icons/bs'
const Pages = [
    {
        Page: "Home",
        Route: "#",
    },
    {
        Page: "Tours",
        Route: "#Tours",
    },
    {
        Page: "Agencies",
        Route: "#Agencies",
    },
    {
        Page: "Blog",
        Route: "#BLog",
    },
    {
        Page: "Posts",
        Route: "#Posts",
    },
    {
        Page: "About Us",
        Route: "#AboutUs",
    },
];
const Navbar = () => {

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isDarkMode , setDarkMode] = React.useState(false)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleDarkMode = (checked) =>{
        setDarkMode(checked)
    }
    return (
        <AppBar
            sx={{
                bgcolor: "#1BA291ff",
                opacity: "85%",
            }}
            position="sticky"
        >
            <Toolbar sx={{
                justifyContent: "center"
            }}>

                <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <BsList />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        <MenuItem>
                            <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                        {Pages.map((page) => (
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">{page.Page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <SearchBar></SearchBar>
                <Box sx={{ marginLeft: "4vw", display: { md: 'block', xs: 'none' } }}>
                    {Pages.map((page) => (
                        <Button className="navbar-button"
                            sx={{
                                fontSize: { lg: 'larger', md: 'large' },
                                marginRight: { xl: '4vw', lg: '3vw', md: '0.5vw' }
                            }}
                        >{page.Page}</Button>
                    ))}
                </Box>
                <DarkModeSwitch
                    checked = {isDarkMode}
                    onChange={handleDarkMode}
                    sunColor="#BAE8DBff"
                    moonColor="#BAE8DBff"
                    size={35}
                    style={{marginLeft: '2rem'}}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
