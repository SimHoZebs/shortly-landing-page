import React, { useState } from "react";

import style from "../styles/css/cta.module.css";
import { Button } from "@material-ui/core";

const Cta: React.FC = () => {
  const [link, setLink] = useState("");
  const [isError, setIsError] = useState(false);

  function shorten(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    if (link === "") {
      setIsError(true);
    } else {
      //use API
    }
  }

  return (
    <form className={style.cta} onSubmit={(e) => shorten(e)}>
      <div className={style.cta__inputContainer}>
        <input
          onChange={(e) => setLink(e.target.value)}
          className={`${style.cta__input} ${isError && style.cta__input_error}`}
          type="text"
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
  );
};

export default Cta;
