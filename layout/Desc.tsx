import React from "react";
import Image from "next/image";

import indexData from "../components/indexData";

import style from "../styles/css/desc.module.css";
import { Typography } from "@material-ui/core";

const Desc = () => {
  return (
    <div className={style.desc}>
      <Typography variant="h4">
        <b>Advanced Statistics</b>
      </Typography>

      <div className={style.desc__desc}>
        <Typography color="secondary">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Typography>
      </div>

      <div className={style.blockWrapper}>
        <div className={style.blockWrapper__line}></div>
        {indexData.desc.map((blok, index) => (
          <div key={index} className={style.block}>
            <div className={style.block__imgWrapper}>
              <Image
                className={style.block__img}
                src={blok.image}
                alt=""
                width="50"
                height="50"
              />
            </div>

            <div className={style.block__title}>
              <Typography variant="h6">
                <b>{blok.title}</b>
              </Typography>
            </div>

            <Typography variant="body1">{blok.desc}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desc;
