import AutoCatalogItem from "../AutoCatalogItem/AutoCatalogItem";

const AutoCatalog = () => {
  return (
    <AutoCatalogItem
      make="Buick"
      model="Enclave"
      year={2008}
      rentalPrice="$40"
      adressCity="Kiev"
      adressCountry="Ukraine"
      rentalCompany="Luxury Car Rentals"
      type="Premium Suv"
      idAuto={9582}
      functionalities="Power liftgate"
    />
  );
};
export default AutoCatalog;
