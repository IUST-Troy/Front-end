import btnGlobalIcon from "../../Static/btn-global-icon.svg";
import React from "react";
import { Parallax } from "react-parallax";
import { Button } from "@mui/material";
import Header from "../NavigationBar/Header";
import Navbar from "../NavigationBar/Navbar";
// import Footer from "./Footer";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/HomePage/HomePage.scss";

import { Box, Container, Typography } from "@mui/material";
import Image from "../../Static/lolo.jpg";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import SearchNav from "../TouristAttractionsPage/SearchNav";
// import Wallpapet1 from "../../Static/Wallpaper1.jpg";
// import Wallpapet2 from "../../Static/Wallpaper2.jpg";
// import Wallpapet3 from "../../Static/Wallpaper3.jpg";
const MainButton = ({ iconImg, text }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: {
          xs: "100%",
          md: "auto",
        },
        backgroundColor: "#7B61FF",
        p: {
          xs: 1.5,
          md: 3,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: "12px",
        fontFamily: "inherit",
        fontSize: "18px",
        fontWeight: "600",
        "&.MuiButtonBase-root:hover": {
          backgroundColor: "#7B61FF",
        },
      }}
    >
      <img src={iconImg} alt="" />
      {text}
    </Button>
  );
};

const Wallpaper = ({ bgImage }) => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        p: {
          xs: 2,
          sm: 5,
          md: 2,
        },
        // background: `url(${Image}) center center/cover`,
        // minHeight: "800px",

        // backgroundColor :"black",
        // maxHeight:"300px",
        borderRadius: {
          xs: "0px 0px 27px 27px",
          md: "0px 0px 54px 54px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <SearchNav />
        <Typography
          sx={{
            color: "#fff",
            marginTop: "196.5px",
            textAlign: "center",
            fontWeight: "600",
            fontSize: {
              xs: "38px",
              md: "48px",
            },
            lineHeight: "62px",
            mb: 4,
          }}
        ></Typography>

        {/* <MainButton text="Discover on 3D Globe" iconImg={btnGlobalIcon} /> */}
        {/* <SearchNav /> */}
      </Box>
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
