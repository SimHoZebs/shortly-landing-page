import style from "../styles/css/hero.module.css";
import React from "react";
import { Typography, Button } from "@material-ui/core";

const Hero = () => {
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
        <Typography variant="h2">More than just shorter links</Typography>

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
};

export default Hero;
