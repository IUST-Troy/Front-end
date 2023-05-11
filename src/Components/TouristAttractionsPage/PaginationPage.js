import React from "react";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 200,
    // background: "rgba(0,0,0,0.1)",
    padding: "10px 80px",

    width: "100%",
  },

  paginationItem: {
    "& .MuiPaginationItem-root": {
      // color: "rgba(186, 232, 219)",
      color: " white",
      backgroundColor: "rgba(186, 232, 219, 0.438)",
    },
  },
}));
const PaginationPage = ({ setPagin, totalpage }) => {
  const classes = useStyles();
  const handleChange = (event, value) => {
    setPagin(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        color="standard"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        count={totalpage}
        onChange={handleChange}
        classes={{ root: classes.paginationItem }}
      />
    </div>
  );
};

export default PaginationPage;
