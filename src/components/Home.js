import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BootstrapCard from "./BootstrapCard";

function Home(props) {
  // console.log('Home', props)
  const [storeData, setStoreData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setStoreData(res);
        setDataToDisplay(res);
      })
      .catch((err) => console.log(err));
      
  }, []);

  function searchAlgo() {
    const userInput = props.liftStateSearchData;
    const filterData = storeData.filter((item) => {
      const string = item.title.toLowerCase();

      return string.includes(userInput);
    });
    filterData ? setDataToDisplay(filterData) : setDataToDisplay(storeData);
  }

  useEffect(() => {
    searchAlgo();
  }, [props.liftStateSearchData]);

  return (
    <>
      <div className="container">
        <div className="row">
          {dataToDisplay
            ? dataToDisplay.map((data) => (
                <div className="col-md-2 col-sm-4" key={data.id}>
                  <BootstrapCard
                    data={data}
                    addToCartHandler={props.addToCartHandler}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Home;
