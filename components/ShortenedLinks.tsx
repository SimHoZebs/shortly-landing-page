import { Button } from "@material-ui/core";
import style from "../styles/css/shortenedLinks.module.css";
import CopyButton from "./CopyButton";
interface props {
  inputLinks: string[];
  shortLinks: string[];
  linkLoading: boolean;
}

function ShortenedLinks({ inputLinks, shortLinks, linkLoading }: props) {
  const shortLinksLastIndex = shortLinks.length - 1;

  return (
    <div className={style.container}>
      {linkLoading && (
        <img className={style.loadingImg} src="/images/loading.svg" alt="" />
      )}
      {}

      {shortLinks.map((_, index) => {
        const reverseIndex = shortLinksLastIndex - index;
        const shortLink = shortLinks[reverseIndex];

        return (
          <div key={reverseIndex} className={style.block}>
            <p className={style.block__reqLink}>{inputLinks[reverseIndex]}</p>

            <div className={style.block__right}>
              <p className={style.block__shortLink}>{shortLink}</p>
              <CopyButton shortLink={shortLink} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShortenedLinks;
