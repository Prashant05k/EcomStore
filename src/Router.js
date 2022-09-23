import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CartContainer from "./container/CartContainer";
import { useState } from "react";
import NavBarContainer from "./container/NavBarContainer";

function Router() {
  const [liftStateSearchData, setLiftStateSearchData] = useState("");
  function handleSearch(e) {
    const searchData = e ? e : "";
    setLiftStateSearchData(searchData);
  }
  return (
    <>
      <BrowserRouter>
        <NavBarContainer handleSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <App
                liftStateSearchData={liftStateSearchData}
                handleSearch={handleSearch}
              />
            }
          />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
