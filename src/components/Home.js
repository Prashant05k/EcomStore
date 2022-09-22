import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BootstrapCard from "./BootstrapCard";

function Home(props) {
  // console.log(props.searchData)
  const { searchData } = props;
  const [storeData, setStoreData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setStoreData(res);
        setDataToDisplay(res);
      })
      .catch((err) =>
        console.log("Error in fetching...custom notificaton", err)
      );
  }, []);

  function Debounce(fn, d) {
    let timer;
    return function (e) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(e);
      }, d);
    };
  }

  function searchAlgo(e) {
    const userInput = searchData.toLowerCase();
    const filterData = storeData.filter((item) => {
      const string = item.title.toLowerCase();
      return string.includes(userInput);
    });
    console.log("searchData", searchData);
    searchData ? setDataToDisplay(filterData) : setDataToDisplay(storeData);
  }

  const HandleSearch = Debounce(searchAlgo, 1000);

  return (
    <>
      {/* <div>
      <button className="btn-success mx-4" onClick={() => props.addToCartHandler(1)}>Add To Cart</button>
      <button className="btn-success"  onClick={() => props.removeFromCartHandler(1)}>Remove From Cart</button>
    </div> */}
      <div className="container">
        {searchData ? <HandleSearch /> : null}
        {/* <input type="text" onChange={handleSearch} /> */}
      </div>
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
