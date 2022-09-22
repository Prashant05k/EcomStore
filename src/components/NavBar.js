import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar(props) {
  // console.log(props);
  // function handleSearch(e) {
  //   const searchData = e.target.value.toLowerCase();
  //   // console.log('searchData', searchData);
  //   props.setLiftStateSearchData(searchData);
  // }
  function debounce(fn, d) {
    let timer;
    return function (e) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(e);
      }, d);
    };
  }

  function takerUserInputFn(e) {
    const userInput = e.target.value.toLowerCase();
    props.handleSearch(userInput);
  }
  const callLater = debounce(takerUserInputFn, 1000);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">EcomStore</Navbar.Brand>
          <input type="text" onChange={callLater} />
          <Link to="/cart">
            <h6>Cart: {props.data.length}</h6>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
