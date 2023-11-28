import cardAuto from "../../images/image_test.jpg";
import like from "../../images/heart_checked.svg";

const AutoCatalogItem = () => {
  return (
    <div>
      <img src={cardAuto} alt="card auto" />
      <img src={like} alt="like" />
      <button>cdc</button>
    </div>
  );
};
export default AutoCatalogItem;
