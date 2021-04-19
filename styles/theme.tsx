import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "1px",
        },
        body: {
          color: "hsl(255,11%,22%)",
          fontSize: "18px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "hsl(180, 66%, 49%)",
    },
    secondary: {
      main: "hsl(257, 27%, 26%)",
    },
    error: {
      main: "hsl(0, 87%, 67%)",
    },
  },
});

export default theme;
