import React from "react";

import style from "../styles/css/footer.module.css";
import { Typography } from "@material-ui/core";

import indexData from "../components/indexData";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__logo}>
          <Typography variant="h4">Shortly</Typography>
        </div>

        {indexData.footers.map((footer) => (
          <div className={style.block}>
            <div className={style.block__title}>
              <b>{footer.title}</b>
            </div>

            {footer.links.map((link) => (
              <a className={style.block__link}>{link}</a>
            ))}
          </div>
        ))}

        <div className={style.footer__socials}>
          <img src="/images/icon-facebook.svg" alt="" />
          <img src="/images/icon-twitter.svg" alt="" />
          <img src="/images/icon-pinterest.svg" alt="" />
          <img src="/images/icon-instagram.svg" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
