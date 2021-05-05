import React, { useState, useEffect, useRef } from "react";

import style from "../styles/css/shortenedLinks.module.css";
import CopyButton from "./CopyButton";
interface props {
  inputLinks: string[];
  shortLinks: string[];
  linkLoading: boolean;
}

function ShortenedLinks({ inputLinks, shortLinks, linkLoading }: props) {
  const shortLinksLastIndex = shortLinks.length - 1;
  const [inputLinkMaxChar, setInputLinkMaxChar] = useState(100);
  const [shortLinkMaxChar, setShortLinkMaxChar] = useState(100);

  const inputLinkWrapperRef = useRef<HTMLDivElement | null>(null);
  const shortLinkWrapperRef = useRef<HTMLDivElement | null>(null);

  function handleResizeEvent() {
    setInputLinkMaxChar(
      Math.floor((inputLinkWrapperRef.current?.offsetWidth || 0) / 11)
    );
    setShortLinkMaxChar(
      Math.floor((shortLinkWrapperRef.current?.offsetWidth || 0) / 11)
    );
  }

  useEffect(() => {
    window.addEventListener("resize", handleResizeEvent);

    return () => window.removeEventListener("resize", handleResizeEvent);
  }, []);

  return (
    <div className={style.container}>
      {linkLoading && (
        <img className={style.loadingImg} src="/images/loading.svg" alt="" />
      )}

      {shortLinks.map((_, index) => {
        const reverseIndex = shortLinksLastIndex - index;
        let shortLink = shortLinks[reverseIndex];
        let inputLink = inputLinks[reverseIndex];

        shortLink =
          shortLink.length > shortLinkMaxChar
            ? `${shortLink.slice(0, shortLinkMaxChar)} ...`
            : shortLink;

        inputLink =
          inputLink.length > inputLinkMaxChar
            ? `${inputLink.slice(0, inputLinkMaxChar)}...`
            : inputLink;

        return (
          <div key={reverseIndex} className={style.block}>
            <div ref={inputLinkWrapperRef} className={style.linkWrapper}>
              <p>{inputLink}</p>
            </div>

            <div className={style.block__right}>
              <div ref={shortLinkWrapperRef} className={style.shortLinkWrapper}>
                <p>{shortLink}</p>
              </div>
              <CopyButton shortLink={shortLink} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShortenedLinks;
