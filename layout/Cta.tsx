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
  const [linkLoading, setLinkLoading] = useState<boolean>(false);

  async function handleSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    console.log("hello");

    setLink((prev) => "");

    try {
      setLinkLoading(true);

      setIsError(false);
      const res = await axios.get(apiLink, { params: { url: link } });

      setRequestedLinks((prev) => [link, ...prev]);
      setShortendLinks((prev) => [res.data.result.full_short_link2, ...prev]);

      setLinkLoading(false);
    } catch (error) {
      setLinkLoading(false);
      setIsError(true);
    }
  }

  return (
    <div className={style.ctaContainer}>
      <div className={style.ctaElements}>
        <form className={style.cta} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.cta__inputContainer}>
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className={`${style.cta__input} ${
                isError && style.cta__input_error
              }`}
              type="link"
              placeholder="Shorten a link here..."
            />

            {isError && (
              <div className={style.cta__errorText}>
                <i>Please type a valid link</i>
              </div>
            )}
          </div>

          <Button
            id={style.cta__btn}
            onClick={(e) => handleSubmit(e)}
            variant="contained"
            color="primary"
          >
            Shorten it!
          </Button>
        </form>

        <ShortenedLinks
          requestedLinks={requestedLinks}
          shortenedLinks={shortenedLinks}
          linkLoading={linkLoading}
        />
      </div>
    </div>
  );
}

export default Cta;
