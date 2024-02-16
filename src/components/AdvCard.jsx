import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
// import FavouriteButton from "./FavouriteButton";
import ModalCar from "./ModalCar";
import { Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { add } from "../store/favouriteSlice";
// import {getAdverts} from "../store/advertSlice";

const AdvCard = () => {
  const dispatch = useDispatch();
  // const { data: adverts } = useSelector((state) => state.adverts);
  const [adverts, getAdverts] = useState([]);
  useEffect(() => {
    // dispatch(getAdverts());
    fetch("https://653a2c90e3b530c8d9e942e1.mockapi.io/adverts").then((data) =>
      data.json().then((result) => getAdverts(result))
    );
  }, []);

  const addToFavourite = (advert) => {
    dispatch(add(advert));
  };

  const carCards = adverts.map((advert) => (
    <div key={advert.id} className="col-md-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={advert.img} />
        <Card.Body>
          <Card.Text>
            {advert.make}
            {advert.model}
            {advert.year}
            {advert.rentalPrice}
          </Card.Text>
          <Card.Text>
            {advert.address.split(", ").slice(-2).join(" | ")} |
            {advert.rentalCompany}| {advert.type}| {advert.model}|
            {advert.mileage}|{advert.functionalities[0]}
          </Card.Text>
          {/* <FavouriteButton /> */}
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => addToFavourite(advert)}
          >
            Add to favourite
          </Button>{" "}
          <ModalCar advert={advert} />
        </Card.Body>
      </Card>
    </div>
  ));
  return (
    <div>
      <div className="row">{carCards}</div>
    </div>
  );
};

export default AdvCard;
