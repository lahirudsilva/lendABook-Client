import React from "react";
import { Card } from "react-bootstrap";

import "./cartItem.scss";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <Card className="cartitem" style={{ height: "150px" }}>
      <img
        src={item.bookCover}
        style={{ height: "120px", marginLeft: "20px" }}
      />

      <Card.Text>{item.title}</Card.Text>
      {/* <Link to={`/product/${item.product}`} className="cartItem__name">
        
      </Link> */}
      <p className="cartitem__price"> </p>

      <a
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.ISBN)}
      >
        <i class="far fa-trash-alt"></i>
      </a>
    </Card>
  );
};

export default CartItem;
