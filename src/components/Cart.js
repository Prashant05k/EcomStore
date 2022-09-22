import React, { useEffect, useState } from "react";
import RemoveFromCartCard from "./RemoveFromCartCard";

function Cart(props) {
  //   console.log(props);
  const { data: dataToDisplay, removeFromCartHandler } = props;
  // const [localData, setLocalData] = useState([]);
  // useEffect(() => {
  //   // if (dataToDisplay) {
  //   //   localStorage.setItem("cartData", JSON.stringify(dataToDisplay));
  //   // }
  //   setLocalData(JSON.parse(localStorage.getItem("cartData")));
  // }, []);
  // if (dataToDisplay) {
  //   localStorage.setItem("cartData", JSON.stringify(dataToDisplay));
  // }
  // const localData = JSON.parse(localStorage.getItem("cartData"));

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
