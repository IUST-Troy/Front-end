import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import useWindowPosition from "../../hook/useWindowPosition";
import SearchNav from "../TouristAttractionsPage/SearchNav";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function ({ tours }) {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div>
      <div id="place-to-visit" className={classes.root}>
        <ImageCard tours={tours} cheched={checked} />
      </div>
    </div>
  );
}
