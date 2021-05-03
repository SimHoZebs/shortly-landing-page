import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  test: {
    borderRadius: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    width: "6.375rem",

    "@media (max-width: 768px)": {
      width: "100%",
    },
  },

  pressed: {
    backgroundColor: "hsl(257, 27%, 26%)",
  },
});

export default useStyles;
