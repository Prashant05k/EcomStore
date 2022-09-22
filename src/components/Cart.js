import React, { useEffect, useState } from "react";
import RemoveFromCartCard from "./RemoveFromCartCard";

function Cart(props) {
  // console.log(props);
  const {
    data: dataToDisplay,
    addToCartHandler,
    removeFromCartHandler,
  } = props;

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    // console.log(cartData)

    if (cartData && dataToDisplay.length === 0) {
      console.log("cartData", cartData);
      addToCartHandler(cartData);
      localStorage.clear();
      // cartData.map((data) => addToCartHandler(data));
    }
  }, []);

  useEffect(() => {
    console.log("dataToDisplay", dataToDisplay);
    if (dataToDisplay.length) {
      localStorage.clear();
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
          {/* {localData.length
            ? localData.map((data) => (
                <div className="col-md-2 col-sm-4" key={data.id}>
                  <RemoveFromCartCard
                    data={data}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                </div>
              )) 
            : null} */}
        </div>
      </div>
    </>
  );
}

export default Cart;
