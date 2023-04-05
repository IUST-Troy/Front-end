import React from "react";
import "../../Styles/NavigationBar/NavigationBar.scss";
import {
    Box,
    Button,
    Paper,
    AppBar,
    Container,
    InputBase,
    Toolbar,
    IconButton,
    Typography,
    styled,
    alpha,
    Grid,
    TextField,
    InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Search } from "@material-ui/icons";
// import zIndex from "@mui/material/styles/zIndex";


// const SearchWrapper = styled(Grid)(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius * 2,
//     marginRight: theme.spacing(1),
//     // width: "50%",
//     [theme.breakpoints.up("md")]: {
//         marginLeft: theme.spacing(2),
//         width: "20%",
//     },
//     [theme.breakpoints.between("xs", "md")]: {
//         marginLeft: theme.spacing(3),
//         width: "90%"
//     }
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: "0em",
//         // transition: theme.transitions.create("width"),
//         width: "95%",
//         // [theme.breakpoints.up("md")]: {
//         //     width: "32ch",
//         // },
//         // [theme.breakpoints.between("xs","md")]: {
//         //     width: "64ch",
//         // },

//         fontFamily: "sans-serif, Roboto",
//         fontWeight: "normal",
//         letterSpacing: 1,
//         fontSize: "large"

//     },
// }));

// const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
//     padding: theme.spacing(0, 0.8),
//     height: "100%",
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     borderTopLeftRadius: theme.shape.borderRadius,
//     borderBottomLeftRadius: theme.shape.borderRadius,
//     borderTopRightRadius: 0,
//     borderBottomRightRadius: 0,
//     zIndex: 1
// }));

const SearchBar = () => {
    let theme = useTheme()
    return (
        <>
            {/* <SearchWrapper className="serachbar-wrapper" container justifyContent="space-between" spacing={0}>
                <Grid item>
                    <SearchIconWrapper className="search-icon" size="small">
                        <Search/>
                    </SearchIconWrapper>
                </Grid>
                <Grid item >
                    <StyledInputBase
                        placeholder=" Search"
                    ></StyledInputBase>
                </Grid>
            </SearchWrapper> */}
            <Paper className="serachbar-wrapper"
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, boxShadow:"none",
                [theme.breakpoints.up("md")]: {
                            marginLeft: theme.spacing(2),
                            width: "25%",
                        },
                        [theme.breakpoints.between("xs", "md")]: {
                            marginLeft: theme.spacing(3),
                            width: "80%"
                        }
            }}
            >
                <InputBase
                    sx={{
                        ml: 1, flex: 1,
                        color: "inherit",
                        fontFamily: "sans-serif, Roboto",
                        fontWeight: "normal",
                        letterSpacing: 1,
                        fontSize: "large"
                    }}
                    placeholder=" Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton className="search-icon" type="button" sx={{ p: '10px' }} aria-label="search">
                    <Search />
                </IconButton>
            </Paper>
        </>
    );
};

export default SearchBar;
