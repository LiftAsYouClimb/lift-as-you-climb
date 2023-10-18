import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#007a7c" //teal
    },
    secondary: {
      main: "#0f283c" //navy
    },
    customColorGray: {
      main: "#48484A"
    },
    customColorSmokeGray: {
      main: "#f5f5f5"
    },
    customColorCyan: {
      main: "#99E1DD"
    },
    customColorLightCyan: {
      main: "#D3E1E1"
    },
    error: {
      main: "#FF0000"
    }
  }
});

const responsiveFontOptions = {
  factor: 2 // default: 2
};

export default responsiveFontSizes(theme, responsiveFontOptions);
