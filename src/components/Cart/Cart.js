import React from "react";
import { Button, Table } from "react-bootstrap";
import CartList from "./CartList";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <div className=" d-block position-fixed h-100">
      <div class="position-fixed my-5 bg-white top-0 h-100 end-0">
        <div className="text-end">
          <Button>X</Button>
        </div>
        <h2 className="text-center">Cart</h2>
        <Table className="">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {cartElements.map((item, idx) => (
              <CartList item={item} />
            ))}
          </tbody>
        </Table>
        <div className="text-center ">
          <Button variant="info"  size='lg' >Purchase</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
