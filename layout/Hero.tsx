import style from "../styles/css/hero.module.css";
import React from "react";

import { Typography, Button } from "@material-ui/core";
import useStyles from "../styles/hero";

function Hero() {
  const classes = useStyles();

  return (
    <div className={style.hero}>
      <div className={style.hero__imgContainer}>
        <img
          className={style.hero__img}
          src="/images/illustration-working.svg"
          alt="A person working"
        />
      </div>
      <div className={style.hero__text}>
        <Typography classes={{ h2: classes.h2 }} variant="h2">
          More than just shorter links
        </Typography>

        <div className={style.hero__desc}>
          <Typography>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Typography>
        </div>

        <Button id={style.btn} variant="contained" color="primary">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Hero;
