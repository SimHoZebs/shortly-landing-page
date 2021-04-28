import React, { useState } from "react";

import style from "../styles/css/cta.module.css";
import { Button } from "@material-ui/core";

import axios from "axios";
import ShortenedLinks from "../components/ShortenedLinks";

const apiLink = "https://api.shrtco.de/v2/shorten";

function Cta() {
  const [link, setLink] = useState("");
  const [isError, setIsError] = useState(false);
  const [requestedLinks, setRequestedLinks] = useState<string[]>([
    "test request link",
  ]);
  const [shortenedLinks, setShortendLinks] = useState<string[]>([
    "test shortened link",
  ]);

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
        setRequestedLinks((prev) => [...prev, link]);
        console.log("Submitting");

        const res = await axios.get(apiLink, { params: { url: link } });
        console.log(res.data.result.full_short_link2);
        setShortendLinks((prev) => [...prev, res.data.result.full_short_link2]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={style.ctaContainer}>
      <div className={style.ctaElements}>
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

        <ShortenedLinks
          requestedLinks={requestedLinks}
          shortenedLinks={shortenedLinks}
        />
      </div>
    </div>
  );
}

export default Cta;
