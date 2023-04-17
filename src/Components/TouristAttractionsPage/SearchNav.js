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
import Image from "../../Static/four.jpg";
import Input from '@mui/material/Input';
import theme from "flowbite-react/lib/esm/theme/default";
//import * as React from 'react';
//import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';





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

  const Country = [
    {"label": 'Iran'},
    {"label": 'Italy'},
    {"label": '	Belgium'},
    {"label": '	france'}
    ];

    const City = [
      {"label": 'Tehran'},
      {"label": 'Rome'},
      {"label": '	Brussels'},
      {"label": '	Paris'}
      ];

  return (
    <>


      <container
        sx={{
          p: {
            xs: 2,
            sm: 5,
            md: 2,
          },
          background: `url(${Image}) fixed center/cover`,
          minHeight: "800px",



        }}
      >
        <Grid container spacing={2} alignItems="center"
          sx={{
            p: {
              xs: 2,
              sm: 5,
              md: 2,
            },
            background: `url(${Image}) fixed center/cover`,
            minHeight: "800px",



          }}
        >

          {/* <Grid item xs={12} sm={6} md={6}>
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
                Country
              </MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
              <MenuItem value="Egypt">Egypt</MenuItem>
              <MenuItem value="France">France</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}



          {/* <Grid  item xs={12} sm={6} md={6}>
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
                city
              </MenuItem>
              <MenuItem value="tehran">Tehran</MenuItem>
              <MenuItem value="Paris">Paris</MenuItem>
              <MenuItem value="Düsseldorf">Düsseldorf</MenuItem>
              
            </Select>
          </FormControl>
        </Grid> */}


          <Grid item xs={12} sm={6} md={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Country}
//              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Country" />}
            />
          </Grid>



          <Grid item xs={12} sm={6} md={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={City}
//              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="City" />}
            />
          </Grid>

          {/* <Grid className="w-full"  item xs={11} sm={6} md={3}>
        
          
          <TextField 
          
          
           sx={{
            // borderColor :"rgba(186, 232, 219, 0.438)", 
            // color: "rgba(186, 232, 219, 0.438)",
            backgroundColor :"rgba(186, 232, 219, 0.438)",
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
        </Grid> */}

          {/* <Grid item xs={11} sm={6} md={3} >
          <TextField 
           sx={{
            backgroundColor :"rgba(186, 232, 219, 0.438)",
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

            inputProps={{ min: 0 , max: 100}}
            fullWidth

          />
        </Grid  > */}

          <Button style={{ backgroundColor: '#1BA291ff', color: 'white' }} variant="contained" color="inherit" fullWidth onClick={handleOpen}>Search</Button>
        </Grid>
      </container>
    </>
  );
};

export default SearchBar;


