import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const AdvCard = () => {
  const [adverts, getAdverts] = useState([]);
  useEffect(() => {
    fetch("https://653a2c90e3b530c8d9e942e1.mockapi.io/adverts").then((data) =>
      data.json().then((result) => getAdverts(result))
    );
  }, []);
  const carCards = adverts.map((advert) => (
    <div key={advert.id} className="col-md-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={advert.img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{advert.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
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
