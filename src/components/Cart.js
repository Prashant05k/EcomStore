import React, { useEffect, useState } from "react";
import RemoveFromCartCard from "./RemoveFromCartCard";

function Cart(props) {
  const {
    data: dataToDisplay,
    addToCartHandler,
    removeFromCartHandler,
  } = props;

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));

    if (cartData && dataToDisplay.length === 0) {
      addToCartHandler(cartData);
      localStorage.removeItem("cartData");
    }
  }, []);

  useEffect(() => {
    if (dataToDisplay.length) {
      localStorage.removeItem("cartData");
      localStorage.setItem("cartData", JSON.stringify(dataToDisplay));
    }
  }, [dataToDisplay]);

  return (
    <>
      <div className="container">
        <div className="row">
          {dataToDisplay
            ? dataToDisplay.map((data) => (
                <div className="col-md-2 col-sm-4" key={data.id}>
                  <RemoveFromCartCard
                    data={data}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Cart;
