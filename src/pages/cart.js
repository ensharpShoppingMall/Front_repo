import React from "react";
import DrawHeader from "../components/Header.js";
import DrawCart from "../components/cartBox.js";
import Footer from "../components/footer.js";

function Cart() {
  return (
    <div className="total">
      <DrawHeader></DrawHeader>
      <DrawCart></DrawCart>
      <Footer></Footer>
    </div>
  );
}

export default Cart;
