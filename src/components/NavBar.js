import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar({handleSearch, cartItemsCount}) {
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
    handleSearch(userInput);
  }
  const callLater = debounce(takerUserInputFn, 1000);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">EcomStore</Navbar.Brand>
          <input type="text" onChange={callLater} />
          <Link to="/cart">
            <h6>Cart: {cartItemsCount}</h6>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
