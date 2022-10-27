import React, { useState } from "react";
import ShopList from "../ShopList/ShopList";

const Cart = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [cartActive, setCartActive] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setCartActive(true)}>{quantity}</button>
      {cartActive && (
        <ShopList cartActive={cartActive} setCartActive={setCartActive} />
      )}
    </>
  );
};

export default Cart;
