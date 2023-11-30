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
      fuelConsumption={10.5}
      engineSize="3.6L V6"
      description="The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features."
      accesOne="Leather seats"
      accesTwo="Panoramic sunroof"
      functionalOne="Power liftgate"
      accesThree="Premium audio system"
      functionalTwo="Remote start"
      functionalThree="Blind-spot monitoring"
      minimumAge={25}
      rentalConditionTwo="Valid driver’s license"
      rentalConditionThree="Security deposite required"
      mileAge={5858}
      imgAuto=""
    />
  );
};
export default AutoCatalog;
