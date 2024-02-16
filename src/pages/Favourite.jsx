import { useDispatch, useSelector } from "react-redux";
import AdvCard from "../components/AdvCard";
import { Button, Card } from "react-bootstrap";
import ModalCar from "../components/ModalCar";
import { remove } from "../store/favouriteSlice";

const Favourite = () => {
  const adverts = useSelector((state) => state.favourite);
  const dispatch = useDispatch();

  const removeFavouriteCar = (id) => {
    dispatch(remove(id));
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
            variant="danger"
            size="sm"
            onClick={() => removeFavouriteCar(advert.id)}
          >
            Remove
          </Button>{" "}
          <ModalCar advert={advert} />
        </Card.Body>
      </Card>
    </div>
  ));

  return <div className="row">{carCards}</div>;
};

export default Favourite;
