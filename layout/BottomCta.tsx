import React from "react";

import style from "../styles/css/bottomCta.module.css";
import { Typography, Button } from "@material-ui/core";

const BottomCta = () => {
  return (
    <div className={style.bottomCta}>
      <Typography variant="h4">
        <b>Boost your links today</b>
      </Typography>

      <div className={style.bottomCta__btnContainer}>
        <Button id={style.bottomCta__btn} variant="contained" color="primary">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default BottomCta;
