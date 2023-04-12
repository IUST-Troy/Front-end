import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

const SearchBar = ({ handleSearch }) => {
  const classes = useStyles();
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(date, destination, guests);
  };

  return (
    <Container>
      <Box border={1} borderRadius={17} p={2}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            id="date"
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="destination"
            label="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <TextField
            id="guests"
            label="Guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SearchBar;
