import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CartContainer from "./container/CartContainer";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
