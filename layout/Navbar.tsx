import React, { useEffect, useState, useRef } from "react";

import indexData from "../components/indexData";

import style from "../styles/css/navbar.module.css";
import useStyles from "../styles/navbar";
import { Typography, Button, Menu, MenuItem } from "@material-ui/core";

function Navbar() {
  const classes = useStyles();
  const [vw, setVw] = useState(0);
  const navbarRef = useRef<HTMLElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function handleResizeEvent() {
    setVw(window.innerWidth);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResizeEvent);

    return () => {
      window.removeEventListener("resize", handleResizeEvent);
    };
  }, []);

  return (
    <nav ref={navbarRef} className={style.navbar}>
      <Typography variant="h4">Shortly</Typography>
      {vw > 768 ? (
        <div className={style.menu}>
          <div className={style.navbar__nav}>
            {indexData.menus.map((menu, index) => (
              <a key={index} href="/">
                {menu}
              </a>
            ))}
          </div>

          <div className={style.credsWrapper}>
            <Button variant="outlined" id={style.login}>
              Login
            </Button>

            <Button id={style.signUp} variant="contained" color="primary">
              Sign Up
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div
            className={style.menu__btn}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => setAnchorEl(navbarRef.current)}
          >
            <div className={style.menu__bar}></div>
            <div className={style.menu__bar}></div>
            <div className={style.menu__bar}></div>
          </div>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{ list: classes.container, paper: classes.paper }}
          >
            <div className={style.itemWrapper}>
              {indexData.menus.map((menu, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {menu}
                </MenuItem>
              ))}
            </div>

            <div className={style.credsWrapper}>
              <MenuItem onClick={handleClose}>Login</MenuItem>

              <Button id={style.signUp} variant="contained" color="primary">
                Sign Up
              </Button>
            </div>
          </Menu>
        </>
      )}
    </nav>
  );
}

export default Navbar;
