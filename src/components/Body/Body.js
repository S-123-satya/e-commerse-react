import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Item from "./Item";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Body = (props) => {
  return (
    <>
      <div className="bg-opacity-75 bg-dark text-white">
        <Container className="text-center pb-5">
          <h1 className="" style={{ fontSize: "7vw" }}>
            The Generics
          </h1>
        </Container>
      </div>
      <h1
        className="text-center fst-italic"
        style={{ fontSize: "40px", font: "italic" }}
      >
        Music
      </h1>
      <Container>
        <Row sm={3} className="ms-5 gap-5">
          {productsArr.map((item, idx) => (
            <Col className="ms-5">
              <Item item={item} key={idx} />
            </Col>
          ))}
        </Row>
        <div className="text-center ">
          <Button variant="secondary" className="text-info " size="lg">See the cart</Button>
        </div>
      </Container>
    </>
  );
};

export default Body;
