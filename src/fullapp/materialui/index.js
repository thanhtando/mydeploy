
//FIREBASE
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithPopup,
  signOut,
  onAuthStateChanged

} from 'firebase/auth';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { collection, getFirestore, addDoc, getDocs} from 'firebase/firestore';
import { query, where, onSnapshot, setDoc, doc, getDoc } from 'firebase/firestore'
import firebase ,{ initializeApp } from "firebase/app";

// react import
import React from "react";
import { 
  createContext, 
  useContext, 
  useMemo, 
  useState,
  useEffect,
  forwardRef,
  useRef,
} from "react";

// router import
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

import { 
  BrowserRouter, 
  Navigate, 
  NavLink, 
  Route, 
  Routes,
  useLocation,
  useNavigate,
  // Navigate,
} from "react-router-dom";

// @mui material components import
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles"
// import Icon from "@mui/material/Icon";
import { 
  Box, Button, Card, CssBaseline, Grid, Breadcrumbs,
  Link, alpha, LinearProgress, 
  styled, Typography, Switch, TextField, Checkbox, 
  AppBar, Drawer, Divider, AlertTitle, Fade,
  Avatar, List, ListItem, ListItemIcon, ListItemText, 
  Alert, TableContainer, Table, TableRow, 
  TableBody,
  Tooltip, Autocomplete, Stack, Snackbar, Tab, Tabs, CardMedia, Modal, Stepper, Step, StepLabel,
  // useTheme
} from "@mui/material";
import MenuCom from "@mui/material/Menu"
// prop-types is a library for typechecking of props
// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from "chroma-js";
import GitHubButton from "react-github-btn";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
// import Favorite from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
// react-router-dom components
// import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter"
// import {
//   AccountCircle, DonutLarge, Key, Person, Menu, Close
// } from "@mui/icons-material";
import PropTypes from "prop-types";
import Icon from '@mui/material/Icon';
// import { green } from "@mui/material/colors";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
//test
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close'
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import InstagramIcon from "@mui/icons-material/Instagram";
import { 
  useTable, 
  useGlobalFilter, 
  useSortBy, 
  usePagination,
  useAsyncDebounce,
} from "react-table";
//resources
//image
import logoSpotify from "../assets/images/small-logos/logo-spotify.svg";
import LogoAsana from "../assets/images/small-logos/logo-asana.svg";
import logoGithub from "../assets/images/small-logos/github.svg";
import logoAtlassian from "../assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "../assets/images/small-logos/logo-slack.svg";
import logoInvesion from "../assets/images/small-logos/logo-invision.svg";

// Images
import kal from "../assets/images/kal-visuals-square.jpg";
import marie from "../assets/images/marie.jpg";
import ivana from "../assets/images/ivana-square.jpg";
// import team3 from "../assets/images/team-3.jpg";
// import team4 from "../assets/images/team-4.jpg";
// import burceMars from "../assets/images/bruce-mars.jpg";
import taurus from "../assets/images/avatar/taurus.jpg";
import backgroundProfile from "../assets/images/bg-profile.jpeg";
import logoXD from "../assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "../assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "../assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "../assets/images/small-logos/logo-spotify.svg";
import logoJira from "../assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "../assets/images/small-logos/logo-invision.svg";
import team1 from "../assets/images/team-1.jpg";
import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";
import team4 from "../assets/images/team-4.jpg";
// Images
import homeDecor1 from "../assets/images/home-decor-1.jpg";
import homeDecor2 from "../assets/images/home-decor-2.jpg";
import homeDecor3 from "../assets/images/home-decor-3.jpg";
import homeDecor4 from "../assets/images/home-decor-4.jpeg";
// import team1 from "../assets/images/team-1.jpg";
// import team2 from "../assets/images/team-2.jpg";
// import team3 from "../assets/images/team-3.jpg";
// import team4 from "../assets/images/team-4.jpg";
// const bgImage = require("../assets/images/bg/bg_boat_2.jpeg");
// const bgImage_su = require("../assets/images/bg/bg_lake.jpeg");
// const bgTest1 = require("../assets/images/bg/background_.png");
// const bgTest2 = require("../assets/images/bg/lake_boat.png");

// Images
import pattern from "../assets/images/illustrations/pattern-tree.svg";
import masterCardLogo from "../assets/images/logos/mastercard.png";
// Images
// import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "../assets/images/logos/visa.png";
import MeasureRender from './mesure';
import { configureStore, createSlice } from '@reduxjs/toolkit';
// const LogoAsana = require("../assets/images/small-logos/logo-asana.svg");
// const logoGithub = require("../assets/images/small-logos/github.svg");
// const logoAtlassian = require("../assets/images/small-logos/logo-atlassian.svg");
// const logoSlack = require("../assets/images/small-logos/logo-slack.svg");
// const logoSpotify = require("../assets/images/small-logos/logo-spotify.svg");

 const bgImage = require("../assets/images/bg-sign-in-basic.jpeg");
 const bgImage_su = require("../assets/images/bg-sign-up-cover.jpeg");

//const bgImage = require("../assets/images/bg/bg_boat_2.jpeg");
//const bgImage_su = require("../assets/images/bg/bg_boat_2.jpeg");
const brandWhite = require("../assets/images/logo-ct.png");
const brandDark =  require("../assets/images/logo-ct-dark.png");
// const team2 = require("../assets/images/team-2.jpg");
// const team3 = require("../assets/images/team-3.jpg");
// const team4 = require("../assets/images/team-4.jpg");




// intro
// export const auth = getAuth(appFb);
// export const firestore = getFirestore(appFb);
// export const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });

//export default appFb;

Chart.register(...registerables);


