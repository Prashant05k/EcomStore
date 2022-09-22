import { connect } from "react-redux";
import Cart from "../components/Cart";
import {  removeFromCart } from "../services/Actions/addRemoveActions";

const mapStateToProps = (state) => ({
  data: state.cartValue,
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCartHandler: (data) => dispatch(removeFromCart(data)),

});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);