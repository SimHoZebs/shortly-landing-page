import { Button } from "@material-ui/core";
import style from "../styles/css/shortenedLinks.module.css";
interface props {
  requestedLinks: string[];
  shortenedLinks: string[];
}

function ShortenedLinks({ requestedLinks, shortenedLinks }: props) {
  return (
    <div className={style.container}>
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
