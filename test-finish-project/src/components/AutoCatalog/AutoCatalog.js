import React, { useState, useEffect } from "react";
import AutoCatalogList from "../AutoCatalogList/AutoCatalogList";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import css from "./AutoCatalog.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/operations";
import { getAdverts } from "../../redux/selectors";

let page = 1;
const AutoCatalog = () => {
  const dispatch = useDispatch();
  const autoCatalog = useSelector(getAdverts);

  const optionsAutoFilter = [
    "show all",
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Chrysler",
    "Kia",
    "Land",
  ];

  const defaultOption = optionsAutoFilter[0];

  const countOfPagePagination = 12;
  const [countOfElement, SetCountOfElement] = useState(12);
  const [visibleLoadMore, SetvisibleLoadMore] = useState(true);
  const [autoFilter, SetAutoFilter] = useState("show all");

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
    dispatch(fetchAdverts());
  }, [dispatch]);

  function onSelectDropdown(option) {
    SetAutoFilter(option.value);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridGap: "29px",
        paddingBottom: "24px",
      }}
    >
      <div className={css.dropdownGroup}>
        <p className={css.dropdownDesc}>Car brand</p>
        <Dropdown
          options={optionsAutoFilter}
          value={defaultOption}
          onChange={onSelectDropdown}
          className={css.dropdown}
          menuClassName={css.dropdownMenu}
          controlClassName={css.dropdownControl}
        />
      </div>

      <AutoCatalogList
        autoCatalogList={getCopyArray(autoCatalog, 0, countOfElement)}
        filter={autoFilter}
      />
      {visibleLoadMore && (
        <ButtonLoadMore onClickLoadeMoreBtn={onClickLoadeMoreBtn} />
      )}
    </div>
  );
};
export default AutoCatalog;
