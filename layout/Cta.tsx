import React, { useState } from "react";

import style from "../styles/css/cta.module.css";
import { Button } from "@material-ui/core";

import axios from "axios";

const apiLink = "https://api.shrtco.de/v2/shorten";

const Cta: React.FC = () => {
  const [link, setLink] = useState("");
  const [isError, setIsError] = useState(false);
  const [shortenedLink, setShortenedLink] = useState([""]);

  async function shorten(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    if (link === "") {
      setIsError(true);
    } else {
      try {
        console.log("Submitting");

        const res = await axios.get(apiLink, { params: { url: link } });
        console.log("created!");
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      //use API
    }
  }

  return (
    <div className={style.ctaContainer}>
      <form className={style.cta} onSubmit={(e) => shorten(e)}>
        <div className={style.cta__inputContainer}>
          <input
            onChange={(e) => setLink(e.target.value)}
            className={`${style.cta__input} ${
              isError && style.cta__input_error
            }`}
            type="link"
            placeholder="Shorten a link here..."
          />

          {isError && (
            <div className={style.cta__errorText}>
              <i>Please add a link</i>
            </div>
          )}
        </div>
        <Button
          id={style.cta__btn}
          onClick={(e) => shorten(e)}
          variant="contained"
          color="primary"
        >
          Shorten it!
        </Button>
      </form>
    </div>
  );
};

export default Cta;
