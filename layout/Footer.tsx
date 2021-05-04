import React from "react";

import style from "../styles/css/footer.module.css";
import { Typography } from "@material-ui/core";

import indexData from "../components/indexData";
import SocialIcon from "../components/SocialIcon";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__logo}>
        <Typography variant="h4">Shortly</Typography>
      </div>
      <div className={style.linkWrapper}>
        {indexData.footers.map((footer, index) => (
          <div key={index} className={style.block}>
            <div className={style.block__title}>
              <b>{footer.title}</b>
            </div>

            {footer.links.map((link, index) => (
              <a key={index} className={style.block__link}>
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className={style.socials}>
          <SocialIcon img={"facebook"} />
          <SocialIcon img={"twitter"} />
          <SocialIcon img={"pinterest"} />
          <SocialIcon img={"instagram"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
