import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "../NavigationBar/Header";
import photo from "../../Static/bg.jpg";
import SearchNav from "../TouristAttractionsPage/SearchNav";
import Navbar from "../NavigationBar/Navbar";
import FooterV2 from "../HomePage/FooterV2";
import "../../Styles/TouristAttractionsPage/TAP.scss";
import { fontFamily } from "@mui/system";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppBar, Toolbar, Collapse, Box } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { useEffect, useState } from "react";
import PlaceToVisit from "./PlaceToVisit";
import { Link as Scroll } from "react-scroll";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + photo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  rooot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  container: {
    textAlign: "center",
  },
}));
export default function Tour() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Navbar />
      <div className={classes.rooot}>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 3000 } : {})}
          collapsedSize={1}

          // collapsedHeight={50}
        >
          <div className={classes.container}>
            <h1 className="titleTour">
              Welcome to <br />
              The{" "}
              <span className="ColorText">
                Place Page.
                <Scroll to="place-to-search" smooth={true}>
                  <IconButton>
                    <SearchIcon
                      className="goDownsearch"
                      id="place-to-search"
                      sx={{
                        fontSize: 50,
                        "&:hover": {
                          backgroundColor: "rgba(186, 232, 219, 0.438)",
                        },
                      }}
                    />
                  </IconButton>
                </Scroll>
              </span>
            </h1>
            <Scroll to="place-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon
                  className="goDown"
                  sx={{
                    fontSize: 50,
                    "&:hover": {
                      backgroundColor: "rgba(186, 232, 219, 0.438)",
                    },
                  }}
                />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>
      <div>
        <grid>
          <SearchNav />
        </grid>
      </div>

      {/* <SearchNav /> */}

      <PlaceToVisit />
      <FooterV2 />
    </div>
    // <FooterV2 />
  );
}
