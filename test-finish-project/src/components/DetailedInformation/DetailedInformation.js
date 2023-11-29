import css from "./DetailedInformation.module.css";
import image_close from "../../images/icon_close.svg";

const DetailedInformation = () => {
  return (
    <div className={css.backDrop}>
      <div className={css.modalDetail}>
        <button>
          <img src={image_close} alt="close" />
        </button>
      </div>
    </div>
  );
};
export default DetailedInformation;
