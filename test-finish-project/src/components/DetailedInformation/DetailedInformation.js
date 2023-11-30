import css from "./DetailedInformation.module.css";
import image_close from "../../images/icon_close.svg";
import image_test_big from "../../images/image_test_big.jpg";
import split_auto from "../../images/split_auto.svg";
import { useState } from "react";

const DetailedInformation = ({
  isCloseProps,
  make,
  model,
  year,
  adressCity,
  adressCountry,
  idAuto,
  type,
  fuelConsumption,
  engineSize,
  description,
  accesOne,
  accesTwo,
  functionalOne,
  accesThree,
  functionalTwo,
  functionalThree,
  minimumAge,
  rentalConditionTwo,
  rentalConditionThree,
  mileAge,
  rentalPrice,
}) => {
  const [isClose, setIsClose] = useState(!isCloseProps);

  function onClickButtonIsClose() {
    setIsClose(isCloseProps);
  }

  return (
    <>
      {isClose === !isCloseProps && (
        <div onClick={onClickButtonIsClose} className={css.backDrop}>
          <div className={css.modalDetail}>
            <button onClick={onClickButtonIsClose} className={css.buttonClose}>
              <img src={image_close} alt="close" />
            </button>
            <img
              className={css.image_test_big}
              src={image_test_big}
              alt="test big"
            />
            <p className={css.detailInfoAuto}>
              <span>{make}</span>&nbsp;<span>{model}</span>
              <span>,</span>&nbsp;<span>{year}</span>
            </p>
            <p className={css.detailCharakterAuto}>
              <span>{adressCity}</span>
              <img src={split_auto} alt="split auto" />
              <span>{adressCountry}</span>
              <img src={split_auto} alt="split auto" />
              <span>id:&nbsp;{idAuto}</span>
              <img src={split_auto} alt="split auto" />
              <span>Year:&nbsp;{year}</span>
              <img src={split_auto} alt="split auto" />
              <span>Type:&nbsp;{type}</span>
              <img src={split_auto} alt="split auto" />
              <span>Fuel Consumption:&nbsp;{fuelConsumption}</span>
              <img src={split_auto} alt="split auto" />
              <span>Engine Size:&nbsp;{engineSize}</span>
            </p>
            <p className={css.detailDescription}>{description}</p>
            <h2 className={css.headAccessories}>
              Accessories and functionalities:
            </h2>
            <p className={css.detailAccessFunctionalAuto}>
              <span>{accesOne}</span>
              <img src={split_auto} alt="split auto" />
              <span>{accesTwo}</span>
              <img src={split_auto} alt="split auto" />
              <span>{functionalOne}</span>
              <img src={split_auto} alt="split auto" />
              <span>{accesThree}</span>
              <img src={split_auto} alt="split auto" />
              <span>{functionalTwo}</span>
              <img src={split_auto} alt="split auto" />
              <span>{functionalThree}</span>
            </p>
            <h2 className={css.headRentalConditions}>Rental Conditions:</h2>
            <div className={css.rentalConditionsGroupOne}>
              <p className={css.minimumAgeParagrah}>
                <span>Minimum age :&nbsp;</span>
                <span>{minimumAge}</span>
              </p>
              <p className={css.rentalConditionTwo}>
                <span>{rentalConditionTwo}</span>
              </p>
            </div>
            <div className={css.rentalConditionsGroupTwo}>
              <p className={css.rentalConditionThree}>
                <span>{rentalConditionThree}</span>
              </p>
              <p className={css.mileAge}>
                <span>Mileage:&nbsp;</span>
                <span>{mileAge}</span>
              </p>
              <p className={css.price}>
                <span>Price:&nbsp;</span>
                <span>{rentalPrice}</span>
              </p>
            </div>
            <a className={css.telRef} href="tel:+380730000000">
              Rental car
            </a>
          </div>
        </div>
      )}
    </>
  );
};
export default DetailedInformation;
