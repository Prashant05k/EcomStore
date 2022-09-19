import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BootstrapCard from "./BootstrapCard";

function Home() {
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
    const userInput = e.target.value.toLowerCase();
    const filterData = storeData.filter((item) => {
      const string = item.title.toLowerCase();
      return string.includes(userInput);
    });
    setDataToDisplay(filterData);
  }

  const handleSearch = Debounce(searchAlgo, 1000);

  return (
    <>
      <div className="container">
        <input type="text" onChange={handleSearch} />
      </div>
      <div className="container">
        <div className="row">
          {dataToDisplay
            ? dataToDisplay.map((data) => (
                <div className="col-md-2 col-sm-4" key={data.id}>
                  <BootstrapCard data={data} />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Home;
