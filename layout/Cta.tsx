import style from "../styles/css/cta.module.css";
import { Button } from "@material-ui/core";

const Cta: React.FC = () => {
  return (
    <div className={style.cta}>
      <input
        className={style.cta__input}
        type="text"
        placeholder="Shorten a link here..."
      />
      <div className={style.cta__btnContainer}>
        <Button id={style.cta__btn} variant="contained" color="primary">
          Shorten it!
        </Button>
      </div>
    </div>
  );
};

export default Cta;
