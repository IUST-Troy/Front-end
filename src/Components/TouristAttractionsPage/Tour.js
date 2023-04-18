import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from '../NavigationBar/Header';
import photo from '../../Static/bg.jpg';
import Navbar from '../NavigationBar/Navbar';
import "../../Styles/TouristAttractionsPage/TAP.scss"
import { fontFamily } from '@mui/system';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppBar, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { useEffect, useState } from 'react';
import PlaceToVisit from './PlaceToVisit';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + photo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
  rooot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
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
      <div className={classes.rooot} id="header">
      

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className="title">
            Welcome to <br />
            The <span className="ColorText">Place Page.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className="goDown" />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
    <PlaceToVisit />
    </div>
  );
}
