import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { Paper, InputBase, IconButton } from "@mui/material";
import Button from "@material-ui/core/Button";
import { Box, Container } from "@mui/material";
import "../../Styles/TouristAttractionsPage/TAP.scss";
import { Grid, InputAdornment, useMediaQuery } from "@material-ui/core";
import { Minimize, Search as SearchIcon } from "@material-ui/icons";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Image from "../../Static/four.jpg";
import Input from "@mui/material/Input";
import theme from "flowbite-react/lib/esm/theme/default";
//import * as React from 'react';
//import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import PlaceToVisit from "./PlaceToVisit";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SearchBar = ({ setTours }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = useState("");
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("");
  const [startingCity, setStartingCity] = useState("");

  // //after mhr
  const [countries, setCountries] = useState([]);
  const [cities, SetCities] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleSearch(date, destination, guests);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // const Country = [
  //   { label: "iran", value: "iran" },
  //   { label: "china", value: "china" },
  //   // { label: "  Belgium" },
  //   // { label: "  france" },
  // ];

  // const tehran = [
  //   { label: "tehran", value: "tehran" },
  //   // { label: "hong kong" },
  //   // { label: "  Brussels" },
  //   // { label: "  Paris" },
  // ];

  // const hong_kong = [
  //   { label: "tehran" },
  //   { label: "hong kong", value: "hong kong" },
  //   // { label: "  Brussels" },
  //   // { label: "  Paris" },
  // ];

  // const City = [
  //   { label: "tehran" },
  //   { label: "hong kong" },
  //   // { label: "  Brussels" },
  //   // { label: "  Paris" },
  // ];

  // const Country = [];
  // const City = [];

  // const SearchClick = () => {
  //   Country = document.getElementById('Country-tour').value;
  //   City = document.getElementById('City-tour').value;
  //   // console.log("got here");
  //   axios
  //     .post(
  //       "http://mrsz.pythonanywhere.com/Country/?search=iran",
  //       {
  //         Country: Country,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // toast.success("", {
  //       //   position: "top-center",
  //       //   autoClose: 1500,
  //       //   className: "toast-message",
  //       //   hideProgressBar: false,
  //       //   closeOnClick: false,
  //       //   pauseOnHover: false,
  //       //   draggable: false,
  //       //   progress: undefined,
  //       //   theme: "colored",
  //       // });
  //       console.log(res.data);
  //       <PlaceToVisit />
  //     })
  //     .catch((err) => {
  //             //message.error(err.message);
  //             console.error(err);
  //             // toast.error('',
  //             // {
  //             //   className:'toast-message',

  //             // })
  //       // window.location.replace('/sign-in')
  //     });
  //     axios
  //     .post(
  //       "http://mrsz.pythonanywhere.com/City/?city_name=tehran",
  //       {
  //         City: City
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       // toast.success("", {
  //       //   position: "top-center",
  //       //   autoClose: 1500,
  //       //   className: "toast-message",
  //       //   hideProgressBar: false,
  //       //   closeOnClick: false,
  //       //   pauseOnHover: false,
  //       //   draggable: false,
  //       //   progress: undefined,
  //       //   theme: "colored",
  //       // });
  //       console.log(res.data);
  //       <PlaceToVisit />
  //     })
  //     .catch((err) => {
  //             //message.error(err.message);
  //             console.error(err);
  //             // toast.error('',
  //             // {
  //             //   className:'toast-message',

  //             // })
  //       // window.location.replace('/sign-in')
  //     });
  // };
  const [select_country, setselect_country] = useState("");
  const [select_city, setSelect_city] = useState("");
  const changeSelectOptionHandler = (event, v) => {
    console.log(event, v);
    if (v?.value) {
      setselect_country(v.value);
    }
  };

  // let type = null;
  // if (select_country === "china") {
  //   type = hong_kong;
  //   console.log(type);
  // } else {
  //   type = tehran;
  //   console.log(type);
  // }

  const SearchClick_country = (e, value) => {
    // Country = document.getElementById('Country-tour').value;
    // City = document.getElementById('City-tour').value;
    // const username=document.getElementById('username-signup').value;
    // alert("fsfdfgfzgfgfg")
    axios
      .get("http://mrsz.pythonanywhere.com/Country/?search=" + value, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setSearchResult(res.data);
        const suggestedCountries = res.data.map((i) => {
          return { label: i.country_name, value: i.country_name };
        });

        console.log(suggestedCountries);
        setCountries(suggestedCountries);
      });
  };

  const onSearchCity = (e, value) => {
    // console.log(searchResult, select_country);
    // const selectedCountry = searchResult.filter(
    //   (i) => i.country_name === select_country
    // );
    console.log(searchResult[0]);
    console.log(value);
    const filteredCities = searchResult[0].city_set
      .filter((c) => {
        return c.city_name.toLowerCase().includes(value.toLowerCase());
      })
      .map((i) => {
        return { label: i.city_name, value: i.city_name };
      });

    SetCities(filteredCities);
  };
  const SearchClick_city = (e, value) => {
    // Country = document.getElementById('Country-tour').value;
    // City = document.getElementById('City-tour').value;
    // const username=document.getElementById('username-signup').value;
    // alert("fsfdfgfzgfgfg")
    axios
      .get("http://mrsz.pythonanywhere.com/City/?search=" + value, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {});
  };

  useEffect(() => {
    if (searchResult.length > 0) {
      const suggestedCities = searchResult[0].city_set.map((c) => {
        return { label: c.city_name, value: c.city_name };
      });
      SetCities(suggestedCities);
    }
  }, [select_country]);
  return (
    // <Grid  columns={{ xs: 4, sm: 8, md: 8 }} item xs={6} md={8} alignItems="center">
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper
        id="search-bar"
        sx={{
          p: {
            xs: 2,
            sm: 5,
            md: 2,
          },
          display: "flex",
          background: "rgba(0,0,0,0.4)",
          //  "rgba(186, 232, 219, 0.438)",
          minHeight: "90px",
          margin: "20px auto",
          minWidth: "80%",
          position: "relative",
          borderRadius: "20px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={4}>
            <Autocomplete
              disablePortal
              className="toura"
              // onInputChange={(e) => {
              //   SearchClick_country(e.target.value);
              // }}
              id="combo-box-demo"
              options={countries}
              onInputChange={SearchClick_country}
              onChange={changeSelectOptionHandler}
              renderInput={(params) => (
                <TextField {...params} label="Country" />
              )}
              sx={{
                backgroundColor: "rgba(0, 232, 219, 0.138)",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "rgba(0, 232, 219, 0.338)",
                },

                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1BA291ff",
                  borderRadius: "20px",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#1BA291ff",
                  },
                "& label.Mui-focused": {
                  color: "#1BA291ff",
                },
                // "& legend": {

                // },
              }}
            />
          </Grid>

          {/* <Grid item xs={1}>

        </Grid> */}

          <Grid item xs={6} sm={6} md={4}>
            <Autocomplete
              disablePortal
              className="toura"
              id="combo-box-demo"
              options={cities}
              onInputChange={onSearchCity}
              renderInput={(params) => <TextField {...params} label="City" />}
              onChange={(e, v) => {
                setSelect_city(v?.value);
              }}
              sx={{
                backgroundColor: "rgba(0, 232, 219, 0.138)",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "rgba(0, 232, 219, 0.338)",
                },

                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1BA291ff",
                  borderRadius: "20px",
                },
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#1BA291ff",
                  },
                "& label.Mui-focused": {
                  color: "#1BA291ff",
                },
                "& legend": {},
              }}
            />
          </Grid>

          {/* <Grid item xs={1}>

        </Grid> */}

          <Grid container spacing={1} item xs={12} sm={12} md={4}>
            <Button
              style={{
                backgroundColor: "#1BA291ff", 
                color: "white",
                margin: "0 auto",
                display: "block",
                width: "100%",
                borderRadius: "15px",
                "@media (min-width:600px)": {
                  width: "auto",
                },
              }}
              variant="contained"
              color="inherit"
              className="searchbutt"
              onClick={() => {
                axios
                  .get(
                    `https://mrsz.pythonanywhere.com/place/specific_info_of_place_front/${select_country}/${select_city}`
                  )
                  .then((res) => {
                    console.log(res);
                    setTours(res.data);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }}
              sx={{
                "&:hover": {
                  backgroundColor: "#1BA291ff",
                },
              }}
              // onClick={() => {
              //   SearchClick_country();
              // }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
    // </Grid>
  );
};

export default SearchBar;
