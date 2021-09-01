import React, { useEffect, useState } from "react";

import style from "../styles/css/cta.module.css";
import { Button } from "@material-ui/core";

import axios from "axios";
import ShortenedLinks from "../components/ShortenedLinks";
const apiLink = "https://api.shrtco.de/v2/shorten";

interface prevLinks {
  req: string;
  short: string;
  expiry: number;
}

function Cta() {
  const [link, setLink] = useState("");
  const [isError, setIsError] = useState(false);
  const [reqLinks, setInputLinks] = useState<string[]>([]);
  const [shortLinks, setShortLinks] = useState<string[]>([]);
  const [linkLoading, setLinkLoading] = useState<boolean>(false);
  const [ctaBtnText, setctaBtnText] = useState("Shorten it!");

  useEffect(() => {
    deleteExpiredLinks();
    const { reqLinks, shortLinks } = parseLocalStorageToArrays();

    setInputLinks(reqLinks);
    setShortLinks(shortLinks);
  }, []);

  function deleteExpiredLinks() {
    const now = new Date();
    //localStorage stores ally-supports-cache in dev mode, and needs to be removed it order for the code to work.
    localStorage.removeItem("ally-supports-cache");
    for (let i = 0; i < localStorage.length; i++) {
      const prevLinks: prevLinks = JSON.parse(
        localStorage.getItem(i.toString()) || ""
      );

      if (prevLinks.expiry < now.getTime()) {
        localStorage.removeItem(i.toString());
      }
    }
  }

  function parseLocalStorageToArrays() {
    const reqLinks: string[] = [];
    const shortLinks: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const prevLinks: prevLinks = JSON.parse(
        localStorage.getItem(i.toString()) || ""
      );
      reqLinks.push(prevLinks.req);
      shortLinks.push(prevLinks.short);
    }
    return { reqLinks, shortLinks };
  }

  function storeLinksToLocalStorage(reqLink: string, shortLink: string) {
    const now = new Date();

    const links: prevLinks = {
      req: reqLink,
      short: shortLink,
      expiry: now.getTime() + 3_600_000,
    };

    localStorage.setItem(localStorage.length.toString(), JSON.stringify(links));
  }

  async function handleSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    setLink((prev) => "");
    setctaBtnText((prev) => "Shortening...");

    try {
      setLinkLoading(true);
      setIsError(false);

      const res = await axios.get(apiLink, { params: { url: link } });

      const shortLink = res.data.result.full_short_link2;
      storeLinksToLocalStorage(link, shortLink);
      setInputLinks((prev) => [...prev, link]);
      setShortLinks((prev) => [...prev, shortLink]);

      setLinkLoading(false);
      setctaBtnText((prev) => "Shorten it!");
    } catch (error) {
      setLinkLoading(false);
      setIsError(true);
    }
  }

  return (
    <div className={style.ctaWrapper}>
      <form className={style.cta} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.inputWrapper}>
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
          disabled={linkLoading}
        >
          {ctaBtnText}
        </Button>
      </form>

      <ShortenedLinks
        reqLinks={reqLinks}
        shortLinks={shortLinks}
        linkLoading={linkLoading}
      />
    </div>
  );
}

export default Cta;
