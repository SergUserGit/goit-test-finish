import cardAuto from "../../images/image_test.jpg";
import like from "../../images/heart_no_checked.svg";
import like_checked from "../../images/heart_checked.svg";
import css from "./AutoCatalogItem.module.css";
import { useState } from "react";

const AutoCatalogItem = () => {
  const [isLike, setIsLike] = useState(false);

  function onClickButtonLike() {
    setIsLike((state) => !state);
  }

  return (
    <div className={css.itemLike}>
      <img className={css.imageAuto} src={cardAuto} alt="card auto" />
      <button onClick={onClickButtonLike} className={css.buttonLike}>
        <img src={isLike ? like_checked : like} alt="like" />
      </button>
    </div>
  );
};
export default AutoCatalogItem;
