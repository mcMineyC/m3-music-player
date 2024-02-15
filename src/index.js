import '@material/web/all';
import {Howl, Howler} from 'howler';
import css from "./index.css";
import "./components/all.js"
import placeholder from "./placeholder.jpg";
import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";

var themeColor = "#17496C"
// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex(themeColor), [
  {
    name: "custom-1",
    value: argbFromHex(themeColor),
    blend: true,
  },
]);


// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.body, dark: systemDark});