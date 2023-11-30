import React, { useState, useEffect } from "react";
import AutoCatalogList from "../AutoCatalogList/AutoCatalogList";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
let page = 1;
const AutoCatalog = () => {
  const countOfPagePagination = 12;

  const [autoCatalog, SetAutoCatalog] = useState([]);
  const [countOfElement, SetCountOfElement] = useState(12);
  const [visibleLoadMore, SetvisibleLoadMore] = useState(true);

  function getCopyArray(Array, indexFirst, IndexLast) {
    return Array.slice(indexFirst, IndexLast);
  }

  function onClickLoadeMoreBtn() {
    page += 1;
    const firstElement = page * countOfPagePagination;
    SetCountOfElement(firstElement);
    if (firstElement >= autoCatalog.length) {
      SetvisibleLoadMore(false);
    }
  }

  useEffect(() => {
    const URL = "https://656876dd9927836bd974dc7c.mockapi.io/advert/advert";
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Немає даних по запиту`));
      })
      .then((data) => {
        SetAutoCatalog((state) => data);
      })
      .catch((error) => {})
      .finally(() => {});
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
      <AutoCatalogList
        autoCatalogList={getCopyArray(autoCatalog, 0, countOfElement)}
      />
      {visibleLoadMore && (
        <ButtonLoadMore onClickLoadeMoreBtn={onClickLoadeMoreBtn} />
      )}
    </div>
  );
};
export default AutoCatalog;
