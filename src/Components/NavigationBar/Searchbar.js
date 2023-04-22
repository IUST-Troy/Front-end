import React from "react";
import "../../Styles/NavigationBar/NavigationBar.scss";
import { Paper, InputBase, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Search } from "@material-ui/icons";

const SearchBar = () => {
    let theme = useTheme();
    return (
        <>
            <Paper
                className="serachbar-wrapper"
                component="form"
                sx={{
                    p: "2px 4px",
                    
                    alignItems: "center",
                    width: 400,
                    boxShadow: "none",
                    [theme.breakpoints.up("md")]: {
                        marginLeft: theme.spacing(2),
                        display: "flex",
                        width: "25%",
                    },
                    [theme.breakpoints.between("xs", "md")]: {
                        // marginLeft: theme.spacing(3),
                        // width: "80%",
                        display: 'none'
                    },
                }}
            >
                <InputBase
                    className="search-input"
                    
                    sx={{
                        ml: 1,
                        flex: 1,
                        color: "inherit",
                        fontFamily: "sans-serif, Roboto",
                        fontWeight: "normal",
                        letterSpacing: 1,
                        fontSize: "large",
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'green',
                          },
                        
                    }}
                    placeholder=" Search"
                    inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                    className="search-icon"
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <Search />
                </IconButton>
            </Paper>
        </>
    );
};

export default SearchBar;
