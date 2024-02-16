import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

function ModalCar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Learn more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image src={props.advert.img} style={{ width: "461px" }} rounded />
          <Modal.Title>
            {props.advert.make}
            {props.advert.model},{props.advert.year}
          </Modal.Title>
          {props.advert.address.split(", ").slice(-2).join(" | ")} | Id:
          {props.advert.id}| Year {props.advert.year}| Type: {props.advert.type}
          | FuelConsumption: {props.advert.fuelConsumption}| EngineSize:{" "}
          {props.advert.engineSize}
          <Modal.Title>{props.advert.description}</Modal.Title>
          <Modal.Title>Acsessories and functionalities:</Modal.Title>
          {props.advert.accessories[0]} | {props.advert.accessories[1]}|{" "}
          {props.advert.functionalities[0]}| {props.advert.accessories[2]}|
          {props.advert.functionalities[1]}|{props.advert.functionalities[2]}
          <Modal.Title>Rental conditions:</Modal.Title>
          {props.advert.rentalConditions.split("\n").join(" | ")}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Rental Car
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
ModalCar.propTypes = {
  advert: PropTypes.any.isRequired,
};
export default ModalCar;
