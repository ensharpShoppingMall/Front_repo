import React, { useState } from "react";
import "@popperjs/core";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DrawCart() {
  const [cartProduct, setCartProduct] = useState(0);

  return (
    <div className="total">
      <div></div>
    </div>
  );
}

export default DrawCart;
