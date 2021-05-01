import React, { useReducer, useState } from "react";

import style from "../styles/css/copyButton.module.css";
import useStyles from "../styles/copyButton";
import { Button } from "@material-ui/core";

interface props {
  shortLink: string;
}

//Todo: boolean useState for pressed so taht I can change the text name and button color.

function CopyButton({ shortLink }: props) {
  const classes = useStyles();
  const [pressed, setPressed] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(shortLink);
    setPressed(true);
  }

  return (
    <Button
      classes={{
        contained: classes.test,
        containedPrimary: `${pressed && classes.pressed}`,
      }}
      variant="contained"
      color="primary"
      onClick={() => copyToClipboard()}
    >
      {pressed ? "Copied!" : "Copy"}
    </Button>
  );
}

export default CopyButton;
