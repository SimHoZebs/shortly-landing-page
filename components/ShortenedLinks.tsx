import React, { useState, useEffect, useRef } from "react";

import style from "../styles/css/shortenedLinks.module.css";
import Image from "next/image";
import CopyButton from "./CopyButton";
interface props {
  reqLinks: string[];
  shortLinks: string[];
  linkLoading: boolean;
}

function ShortenedLinks({ reqLinks, shortLinks, linkLoading }: props) {
  const shortLinksLastIndex = shortLinks.length - 1;
  const [reqLinkMaxChar, setInputLinkMaxChar] = useState(100);
  const [shortLinkMaxChar, setShortLinkMaxChar] = useState(100);

  const reqLinkWrapperRef = useRef<HTMLDivElement | null>(null);
  const shortLinkWrapperRef = useRef<HTMLDivElement | null>(null);

  function calcLinkLength() {
    setInputLinkMaxChar(
      Math.floor((reqLinkWrapperRef.current?.offsetWidth || 0) / 11)
    );
    setShortLinkMaxChar(
      Math.floor((shortLinkWrapperRef.current?.offsetWidth || 0) / 11)
    );
  }

  useEffect(() => {
    calcLinkLength();
  }, [shortLinks]);

  useEffect(() => {
    window.addEventListener("resize", calcLinkLength);
    return () => window.removeEventListener("resize", calcLinkLength);
  }, []);

  return (
    <div className={style.container}>
      {linkLoading && (
        <Image
          className={style.loadingImg}
          src="/images/loading.svg"
          alt=""
          height="80px"
          width="80px"
        />
      )}

      {shortLinks.map((_, index) => {
        const reverseIndex = shortLinksLastIndex - index;
        let shortLink = shortLinks[reverseIndex];
        let reqLink = reqLinks[reverseIndex];

        shortLink =
          shortLink.length > shortLinkMaxChar
            ? `${shortLink.slice(0, shortLinkMaxChar)} ...`
            : shortLink;

        reqLink =
          reqLink.length > reqLinkMaxChar
            ? `${reqLink.slice(0, reqLinkMaxChar)}...`
            : reqLink;

        return (
          <div key={reverseIndex} className={style.block}>
            <div ref={reqLinkWrapperRef} className={style.linkWrapper}>
              <p>{reqLink}</p>
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
