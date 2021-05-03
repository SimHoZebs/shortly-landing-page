import { makeStyles } from "@material-ui/core/styles";
const primary = "hsl(257, 27%, 26%)";

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: primary,
  },

  paper: {
    marginTop: "6rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
  },
});

export default useStyles;
