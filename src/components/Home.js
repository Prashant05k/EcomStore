import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddToCart from "./AddToCart";
import Quote from "./Quote";

function Home(props) {
  
  const [storeData, setStoreData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    async function Fetch() {
      let URL = "https://fakestoreapi.com/products";
      await fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setStoreData(res);
          setDataToDisplay(res);
        })
        .catch((err) => console.log(err));
    }
    Fetch();
  }, []);

  function previousNextPageCheck() {
    if (pageCount === 1) {
      pagenation("buttonLeft", true);
    } else if (pageCount * 10 >= dataToDisplay.length) {
      pagenation("buttonRight", true);
    }
  }

  useEffect(() => {
    previousNextPageCheck();
  }, [pageCount]);

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

  function pagenation(buttonName, value) {
    document.getElementById(buttonName).disabled = value;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {dataToDisplay
            ? dataToDisplay.map((data) => {
                if (
                  data.id >= (pageCount - 1) * 10 &&
                  data.id <= pageCount * 10
                ) {
                  return (
                    <div className="col-md-2 col-sm-4" key={data.id}>
                      <AddToCart
                        data={data}
                        addToCartHandler={props.addToCartHandler}
                      />
                    </div>
                  );
                }
                return;
              })
            : null}
        </div>

        <div className="container d-flex justify-content-between my-1">
          <button
            type="button"
            className="btn btn-dark"
            id="buttonLeft"
            onClick={() => {
              if (pageCount * 10 >= dataToDisplay.length) {
                setPageCount(pageCount - 1);
                pagenation("buttonRight", false);
              } else {
                pagenation("buttonLeft", true);
              }
            }}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            id="buttonRight"
            onClick={() => {
              if (pageCount * 10 <= dataToDisplay.length) {
                setPageCount(pageCount + 1);
                pagenation("buttonLeft", false);
              } else {
                pagenation("buttonRight", true);
              }
            }}
          >
            Next &rarr;
          </button>
        </div>
      </div>
      {/* <Quote/> */}
    </>
  );
}

export default Home;
