import {PaletteType} from './palette.type'
import {blue, green, grey, orange, red, teal} from "../colors";

export const paletteTheme: PaletteType = {
  action: {
    activatedOpacity: 0.12,
    active: "rgba(0, 0, 0, 0.54)",
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
  },
  background: {
    default: "#fff",
    paper: "#fff"
  },
  grey: {
    50: grey['50'],
    100: grey['100'],
    200: grey['200'],
    300: grey['300'],
    400: grey['400'],
    500: grey['500'],
    600: grey['600'],
    700: grey['700'],
    800: grey['800'],
    900: grey['900'],
    A100: grey['A100'],
    A200: grey['A200'],
    A400: grey['A400'],
    A700: grey['A700'],
  },
  common: {
    black: "#000",
    white: "#fff"
  },
  text: {
    disabled: "rgba(0, 0, 0, 0.38)",
    primary: "#373737",
    secondary: "#929292",
  },
  primary: {
    contrastText: teal['100'],
    light: teal['300'],
    main: teal['500'],
    dark: teal['700'],
  },
  secondary: {
    light: '#ffffff',
    main: "#f7f8fc",
    dark: '#c4c5c9',
    contrastText: "#000",
  },
  tertiary: {
    contrastText: "#fff",
    main: "#d1d1d1",
    light: "#ffffff",
    dark: "#a0a0a0"
  },
  success: {
    contrastText: green['100'],
    light: green['300'],
    main: green['500'],
    dark: green['700'],
  },
  info: {
    contrastText: blue["100"],
    light: blue["300"],
    main: blue["500"],
    dark: blue["700"],
  },
  error: {
    contrastText: red["100"],
    light: red["300"],
    main: red["500"],
    dark: red["700"],
  },
  warning: {
    contrastText: orange["100"],
    light: orange["300"],
    main: orange["500"],
    dark: orange["700"],
  },
  control: {
    light: "#ffffff",
    main: "#ffffff",
    dark: "#cccccc",
    contrastText: "#000",
  },
}

