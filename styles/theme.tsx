import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: {
      fontSize: "4rem",
      fontWeight: 700,
    },

    h4: {
      letterSpacing: "-0.1rem",
      fontWeight: 700,
    },

    body1: {
      color: "hsl(240,4%,63%)",
      fontWeight: 500,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          color: "hsl(260,20%,9%)",
          fontSize: "18px",
          fontWeight: 500,
        },
      },
    },

    MuiButton: {
      root: {
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "capitalize",
        borderRadius: "2rem",
        padding: "0.75rem 1.375rem",
      },

      containedPrimary: {
        color: "white",

        "&:hover": {
          backgroundColor: "hsl(179, 56%, 75%)",
        },
      },
    },
    MuiPopover: {
      paper: {
        position: "static",
      },
    },
    MuiMenuItem: {
      root: {
        color: "white",
        fontWeight: 700,
        paddingTop: "1rem ",
        paddingBottom: "1rem",
      },
    },

    MuiList: {
      padding: {
        paddingTop: "1.5rem",
        paddingBottom: "2.5rem",
      },
    },

    MuiListItem: {
      root: {
        color: "white",
        textAlign: "center",
        justifyContent: "center",
      },
    },
  },

  palette: {
    primary: {
      main: "hsl(180, 66%, 49%)",
    },
    secondary: {
      main: "hsl(0, 0%, 75%)",
    },
    error: {
      main: "hsl(0, 87%, 67%)",
    },
  },
});

export default theme;
