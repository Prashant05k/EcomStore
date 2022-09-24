import Home from "../components/Home";
import { addToCart } from "../services/Actions/addRemoveActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.cartValue,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
