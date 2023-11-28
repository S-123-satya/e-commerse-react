import React from "react";
import { Button, Image } from "react-bootstrap";

const CartList = (props) => {
  return (
    <tr className="align-middle">
      <td>
        <Image src={props.item.imageUrl} rounded style={{ width: "80px" }} />
        {props.item.title}
      </td>
      <td>₹{props.item.price}</td>
      <td>
        {props.item.quantity} 
        <Button variant="danger" className="m-3">Remove</Button>
      </td>
    </tr>
  );
};

export default CartList;
