import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { Paper, InputBase, IconButton } from "@mui/material";
import Button from "@material-ui/core/Button";
import { Box, Container } from "@mui/material";
import "../../Styles/TouristAttractionsPage/TAP.scss"
import { Grid, InputAdornment, useMediaQuery } from '@material-ui/core';
import { Minimize, Search as SearchIcon } from '@material-ui/icons';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Input from '@mui/material/Input';
import theme from "flowbite-react/lib/esm/theme/default";





const SearchBar = ({ handleSearch }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("");
  const [startingCity, setStartingCity] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(date, destination, guests);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>



      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3} sx={{ width: "100%" }}>
          <FormControl fullWidth>
            <Select
              className="w-full"
              value={startingCity}
              onChange={(e) => setStartingCity(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Starting City' }}
              sx={{
                backgroundColor: "rgba(186, 232, 219, 0.438)",
                m: (0.5, 1),
                borderRadius: 2.2,
                "&:hover": {
                  backgroundColor: "rgba(186, 232, 219, 0.438)",
                },
              }}
            >
              <MenuItem value="" disabled>
                Starting City
              </MenuItem>
              <MenuItem value="tehran">Tehran</MenuItem>
              <MenuItem value="mashhad">Mashhad</MenuItem>
              <MenuItem value="esfehan">Esfehan</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <Select className="w-full"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Destination' }}
              sx={{

                backgroundColor: "rgba(186, 232, 219, 0.438)",
                m: (0.5, 1),
                borderRadius: 2.2,
                "&:hover": {
                  backgroundColor:
                    "rgba(186, 232, 219, 0.438)",
                },
              }}
            >
              <MenuItem value="" disabled>
                Destination
              </MenuItem>
              <MenuItem value="tehran">Tehran</MenuItem>
              <MenuItem value="mashhad">Mashhad</MenuItem>
              <MenuItem value="esfehan">Esfehan</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid>

        </Grid>
        <Grid className="w-full" item xs={12} sm={6} md={3}>


          <TextField


            sx={{
              // borderColor :"rgba(186, 232, 219, 0.438)", 
              // color: "rgba(186, 232, 219, 0.438)",
              backgroundColor: "rgba(186, 232, 219, 0.438)",
              m: (0.5, 1),
              borderRadius: 2.2,
              "&:hover": {
                backgroundColor:
                  "rgba(186, 232, 219, 0.438)",
              },
            }}
            label="Date"
            type="date"
            variant="outlined"
            fullWidth


            InputLabelProps={{
              shrink: true,


            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            sx={{
              backgroundColor: "rgba(186, 232, 219, 0.438)",
              m: (0.5, 1),
              borderRadius: 2.2,
              "&:hover": {
                backgroundColor:
                  "rgba(186, 232, 219, 0.438)",
              },
            }}
            label="Guests"
            variant="filled"
            type="number"

            inputProps={{ min: 0 }}
            fullWidth

          />
        </Grid  >
        <Button style={{ backgroundColor: '#1BA291ff', color: 'white' }} variant="contained" color="inherit" fullWidth onClick={handleOpen}>Search</Button>
      </Grid>

    </>
  );
};

export default SearchBar;


