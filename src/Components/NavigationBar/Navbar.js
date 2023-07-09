import React, { useEffect } from "react";
import {
  Box,
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
  ListItemIcon,
} from "@mui/material";
import UserInfo from "./UserInfo";
import { useTheme } from "@mui/material/styles";
import { Avatar, Grid } from "@mui/material";
import {
  BsHouse,
  BsAirplane,
  BsBuilding,
  BsSticky,
  BsQuote,
  BsBricks,
  BsPersonFill,
} from "react-icons/bs";
import SearchBar from "./Searchbar";
import "../../Styles/NavigationBar/NavigationBar.scss";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Pages = [
  {
    Page: "Home",
    Route: "/home",
    Icon: BsHouse,
  },
  {
    Page: "Trips",
    Route: "/TripList",
    Icon: BsAirplane,
  },
  {
    Page: "Agencies",
    Route: "#Agencies",
    Icon: BsBuilding,
  },
  {
    Page: "Places",
    Route: "/PlacesList",
    Icon: BsQuote,
  },
  // {
  //   Page: "Posts",
  //   Route: "#Posts",
  //   Icon: BsSticky,
  // },
  {
    Page: "About Us",
    Route: "/AboutUs",
    Icon: BsBricks,
  },
];
const OrgPages = [
  {
    Page: "Home",
    Route: "/organization",
    Icon: BsHouse,
  },
  {
    Page: "Trips",
    Route: "/TripList",
    Icon: BsAirplane,
  },
  {
    Page: "Create Trip",
    Route: "/create-trip",
    Icon: BsBuilding,
  },
  {
    Page: "Places",
    Route: "/PlacesList",
    Icon: BsQuote,
  },
  // {
  //   Page: "Posts",
  //   Route: "#Posts",
  //   Icon: BsSticky,
  // },
  {
    Page: "About Us",
    Route: "/AboutUs",
    Icon: BsBricks,
  },
];
const TLPages = [
  {
    Page: "Home",
    Route: "/home",
    Icon: BsHouse,
  },
  {
    Page: "Trips",
    Route: "/TripList",
    Icon: BsAirplane,
  },
  {
    Page: "Agencies",
    Route: "#Agencies",
    Icon: BsBuilding,
  },
  {
    Page: "Places",
    Route: "/PlacesList",
    Icon: BsQuote,
  },
  // {
  //   Page: "Posts",
  //   Route: "#Posts",
  //   Icon: BsSticky,
  // },
  {
    Page: "About Us",
    Route: "/AboutUs",
    Icon: BsBricks,
  },
];
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [role, setRole] = React.useState(localStorage.getItem("role"));
  useEffect(()=>{
    console.log(localStorage.getItem("role"));
  },[])
  let navigate = useNavigate();
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

  const handleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  let theme = useTheme();
  return (
    <AppBar
      sx={{
        bgcolor: "#1BA291ff",
        opacity: "100%",
      }}
      position="sticky"
    >
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Box 
        sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}
        >
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
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{
                m: (0.5, 1),
                borderRadius: 1.2,
                "&:hover": {
                  backgroundColor: "rgba(186, 232, 219, 0.438)",
                },
              }}
            >
              <ListItemIcon>
                <BsPersonFill />
              </ListItemIcon>
              <Typography className="menuItem-typo" textAlign="center">
                Profile
              </Typography>
            </MenuItem>
            {(role==="C" && Pages.map((page) => (
              <>
                <MenuItem
                  onClick={()=>navigate(page.Route)}
                  sx={{
                    m: (0.5, 1),
                    borderRadius: 1.2,
                    "&:hover": {
                      backgroundColor: "rgba(186, 232, 219, 0.438)",
                    },
                  }}
                >
                  <ListItemIcon>{<page.Icon />}</ListItemIcon>
                  <Typography className="menuItem-typo" textAlign="center">
                    {page.Page}
                  </Typography>
                </MenuItem>
              </>
            )))||
            (role==="T" && TLPages.map((page) => (
              <>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: (0.5, 1),
                    borderRadius: 1.2,
                    "&:hover": {
                      backgroundColor: "rgba(186, 232, 219, 0.438)",
                    },
                  }}
                >
                  <ListItemIcon>{<page.Icon />}</ListItemIcon>
                  <Typography className="menuItem-typo" textAlign="center">
                    {page.Page}
                  </Typography>
                </MenuItem>
              </>
            )))||
            (role==="O" && OrgPages.map((page) => (
              <>
                <MenuItem
                  onClick={()=>navigate(page.Route)}
                  sx={{
                    m: (0.5, 1),
                    borderRadius: 1.2,
                    "&:hover": {
                      backgroundColor: "rgba(186, 232, 219, 0.438)",
                    },
                  }}
                >
                  <ListItemIcon>{<page.Icon />}</ListItemIcon>
                  <Typography className="menuItem-typo" textAlign="center">
                    {page.Page}
                  </Typography>
                </MenuItem>
              </>
            )))
            
            }
          </Menu>
        </Box>

        {/* <SearchBar></SearchBar> */}

        <Box
          sx={{
            marginLeft: "4vw",
            display: { md: "block", xs: "none" },
          }}
        >
          {role==="C" && Pages.map((page) => (
            <Button
              className="navbar-button"
              onClick={() => navigate(page.Route)}
              sx={{
                fontSize: { lg: "larger", md: "large" },
                marginRight: {
                  xl: "4vw",
                  lg: "2.5vw",
                  md: "0.2vw",
                },
              }}
            >
              {page.Page}
            </Button>
          ))||
          role==="T" && TLPages.map((page) => (
            <Button
              className="navbar-button"
              onClick={() => navigate(page.Route)}
              sx={{
                fontSize: { lg: "larger", md: "large" },
                marginRight: {
                  xl: "4vw",
                  lg: "2.5vw",
                  md: "0.2vw",
                },
              }}
            >
              {page.Page}
            </Button>
          ))||
          role==="O" && OrgPages.map((page) => (
            <Button
              className="navbar-button"
              onClick={() => navigate(page.Route)}
              sx={{
                fontSize: { lg: "larger", md: "large" },
                marginRight: {
                  xl: "4vw",
                  lg: "2.5vw",
                  md: "0.2vw",
                },
              }}
            >
              {page.Page}
            </Button>
          ))
          }
        </Box>
        
        <Grid 
        sx={{
            marginRight: "-25px",
            
        }}
        >
        <AppBar
          position="static"
          className="header-container-light"
          color="inherit"
          elevation={0}
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "block",
            },
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
            backgroundColor: "rgba(27, 162, 145, 1.00)",
        
          }}
        >
          <Toolbar
          sx={{
            padding : "5px"
            
          }}
          >
            <UserInfo 
        
          
              firstName="Alireza"
              lastName="BayatKhani"
              id="LordRevan"

              // avatarpath={}
            />
          </Toolbar>
        </AppBar></Grid>
        <Grid
          sx={{
            [theme.breakpoints.down("md")]: {
      
            },
          }}
        >
          {/* <DarkModeSwitch
            checked={isDarkMode}
            onChange={handleDarkMode}
            sunColor="#BAE8DBff"
            moonColor="#BAE8DBff"
            size={35}
            style={{ marginLeft: "2rem" }}
          /> */}
        </Grid>
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


