import React from "react";

import indexData from "../components/indexData";

import style from "../styles/css/navbar.module.css";
import { Typography, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbar__nav}>
        <Typography variant="h4">Shortly</Typography>
        {indexData.menus.map((menu) => (
          <a href="/">{menu}</a>
        ))}
      </div>

      <div>
        <Button>Login</Button>

        <Button id={style.btn} variant="contained" color="primary">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
