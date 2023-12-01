import React, { useState, useEffect } from "react";
import AutoCatalogList from "../AutoCatalogListLikes/AutoCatalogListLikes";

const LikesList = () => {
  const [autoCatalog, SetAutoCatalog] = useState([]);

  useEffect(() => {
    const arrayLikeCard =
      JSON.parse(localStorage.getItem("arrayCardItemAuto")) ?? [];
    SetAutoCatalog((state) => arrayLikeCard);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "29px",
        paddingBottom: "24px",
      }}
    >
      <AutoCatalogList autoCatalogList={autoCatalog} />
    </div>
  );
};
export default LikesList;
