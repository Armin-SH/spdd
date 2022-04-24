import {paletteTheme, typographyTheme, WebThemeType, spacingTheme, breakpointsTheme} from './'
import {createTheme, Theme} from '@mui/material/styles';

export const theme: Theme = createTheme({
  palette: paletteTheme,
  typography: typographyTheme,
  direction: "ltr",
  spacing: spacingTheme,
  breakpoints: breakpointsTheme,
})
