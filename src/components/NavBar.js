import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar(props) {
  console.log(props)
  
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">EcomStore</Navbar.Brand>
          <input type="text" onChange={props.searchDataHandler}/>
          <Link to='/cart'><h6>Cart: {props.data.length}</h6></Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
