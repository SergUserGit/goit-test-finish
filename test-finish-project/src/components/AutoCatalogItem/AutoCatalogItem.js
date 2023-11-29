import cardAuto from "../../images/image_test.jpg";
import like from "../../images/heart_no_checked.svg";
import like_checked from "../../images/heart_checked.svg";
import split_auto from "../../images/split_auto.svg";
import css from "./AutoCatalogItem.module.css";
import { useState } from "react";
import DetailedInformation from "../DetailedInformation/DetailedInformation";

const AutoCatalogItem = ({
  make,
  model,
  year,
  rentalPrice,
  adressCity,
  adressCountry,
  rentalCompany,
  type,
  idAuto,
  functionalities,
}) => {
  const [isLike, setIsLike] = useState(false);
  const [detailedIsOpen, setDetailedIsOpen] = useState(false);

  function onClickButtonLike() {
    setIsLike((state) => !state);
  }

  function onClickButtonLearnMore() {
    setDetailedIsOpen(true);
  }

  return (
    <div className={css.mainDivAuto}>
      <div className={css.itemLike}>
        <img className={css.imageAuto} src={cardAuto} alt="card auto" />
        <button onClick={onClickButtonLike} className={css.buttonLike}>
          <img src={isLike ? like_checked : like} alt="like" />
        </button>
      </div>
      <div className={css.infoModelAuto}>
        <p className={css.paragraphInfoAuto}>
          <span className={css.styleBlakInfo}>{make}</span>&nbsp;
          <span className={css.styleBlueInfo}>{model}</span>
          <span className={css.styleBlakInfo}>,</span>&nbsp;
          <span className={css.styleBlakInfo}>{year}</span>
        </p>
        <span className={css.spanRentalPrice}>{rentalPrice}</span>
      </div>
      <p className={css.paraghDateAuto}>
        <span className={css.spanAutoInfo}>{adressCity}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{adressCountry}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{rentalCompany}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{type}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{model}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{idAuto}</span>
        <img src={split_auto} alt="split auto" />
        <span className={css.spanAutoInfo}>{functionalities}</span>
      </p>
      <button onClick={onClickButtonLearnMore} className={css.buttonLeanMore}>
        <span className={css.spanLeanMore}>Learn more</span>
      </button>
      {detailedIsOpen && <DetailedInformation isCloseProps={detailedIsOpen} />}
    </div>
  );
};
export default AutoCatalogItem;
