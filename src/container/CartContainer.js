import { connect } from "react-redux";
import Cart from "../components/Cart";
import {
  addToCart,
  removeFromCart,
} from "../services/Actions/addRemoveActions";

const mapStateToProps = (state) => ({
  data: state.cartValue,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
