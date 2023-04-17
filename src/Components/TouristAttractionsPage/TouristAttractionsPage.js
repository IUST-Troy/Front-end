import btnGlobalIcon from "../../Static/btn-global-icon.svg";
import React from "react";
import { Parallax } from "react-parallax";
import { Button } from "@mui/material";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
// import Footer from "./Footer";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/HomePage/HomePage.scss";
import CityCard from"../TouristAttractionsPage/CityCard"
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "../../Static/four.jpg";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import SearchNav from "../TouristAttractionsPage/SearchNav";
import "../../Styles/TouristAttractionsPage/TAP.scss";
// import "../../Styles/Colors"

// import Wallpapet1 from "../../Static/Wallpaper1.jpg";
// import Wallpapet2 from "../../Static/Wallpaper2.jpg";
// import Wallpapet3 from "../../Static/Wallpaper3.jpg";


const Wallpaper = ({ bgImage }) => {
  return (
    <Container
    className="search_bar"
      maxWidth="false"
      disableGutters
      sx={{
        p: {
          xs: 2,
          sm: 5,
          md: 2,
        },
        // background: `url(${Image}) fixed center/cover`,
        // background: `url(${Image}) fixed center/cover`,
        // minHeight: "800px",
        

        // backgroundColor :Colors.$persian-green,
        // maxHeight:"300px",
        // borderRadius: {
        //   xs: "0px 0px 27px 27px",
        //   md: "0px 0px 54px 54px",
        // },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius : 10,
          background: `url(${Image}) fixed center/cover`,
        }}
      >
        
        <Typography
        
          sx={{
            padding:"10px",
            color: "#fff",
            marginTop: "140.5px",
            // marginLeft: "400px",
            // marginRight:"1px",
            textAlign: "center",
            fontWeight: "600",
            fontSize: {
              xs: "38px",
              md: "48px",
            },
            lineHeight: "82px",
            mb: 12,
            // background: `url(${Image}) fixed center/cover`,
          }}
        >
        
           <Box 
          sx={{
            
            display: "flex",
          alignItems: "center",
          flexDirection: "column",
            // bgcolor: 'background.paper',
            backgroundColor :"rgba(186, 232, 219, 0.438)",
            borderRadius : 10,
            // pt: 8,
            //  pb: 6,
          }}
        >
          
        <Container sx={{ py: 4 ,px : 6}} maxWidth=""
        >
          
           <SearchNav />
           </Container>
           </Box>
           
           
          
      
        </Typography>
 </Box>
 <Container sx={{padding : "10px",}}> </Container>
        <CityCard />
   
        {/* <MainButton text="Discover on 3D Globe" iconImg={btnGlobalIcon} /> */}
        {/* <SearchNav /> */}
     
    </Container>
  );
};
const TouristAttractionsPage = ({ accessToken, RefreshToken }) => {
  // Perform search with the search term

  return (
    <>
      <Header />
      <Navbar />
      <div>
        <Wallpaper />

        {/* <Typography /> */}

        {/* <Wallpaper bgImage={Wallpapet1} content="Hello 1" /> */}
        {/* <TextBox /> */}
        {/* <Wallpaper bgImage={Wallpapet2} content="Hello 2" /> */}
        {/* <TextBox /> */}
        {/* <Wallpaper bgImage={Wallpapet3} content="Hello 3" /> */}
      </div>
      {/* <Typography /> */}
      <div></div>
      <div></div>
      <FooterV2 />
    </>
  );
};

export default TouristAttractionsPage;
