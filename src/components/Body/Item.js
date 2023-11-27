import React from "react";
import { Button, Card } from "react-bootstrap";

const Item = (props) => {
  return (
    <Card className="m-5 p-2" style={{ width: "15rem" }}>
      <Card.Title className="text-center fs-5 py-2"> {props.item.title} </Card.Title>
      <Card.Img src={props.item.imageUrl} />
      <Card.Body className="d-flex justify-content-between">
        <span>₹{props.item.price}</span>
        <Button variant="info">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
