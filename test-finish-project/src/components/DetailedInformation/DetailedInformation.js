import css from "./DetailedInformation.module.css";
import image_close from "../../images/icon_close.svg";
import image_test_big from "../../images/image_test_big.jpg";
import { useState } from "react";

const DetailedInformation = ({ isCloseProps }) => {
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
          </div>
        </div>
      )}
    </>
  );
};
export default DetailedInformation;
