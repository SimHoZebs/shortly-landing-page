import { Button } from "@material-ui/core";
import style from "../styles/css/shortenedLinks.module.css";
interface props {
  requestedLinks: string[];
  shortenedLinks: string[];
  linkLoading: boolean;
}

function ShortenedLinks({
  requestedLinks,
  shortenedLinks,
  linkLoading,
}: props) {
  return (
    <div className={style.container}>
      {linkLoading && (
        <img className={style.loadingImg} src="/images/loading.svg" alt="" />
      )}
      {shortenedLinks.map((shortenedLink, index) => (
        <div className={style.block}>
          <p>{requestedLinks[index]}</p>

          <div className={style.block__right}>
            <p>{shortenedLink}</p>

            <Button id={style.btn} color="primary" variant="contained">
              Copy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShortenedLinks;
