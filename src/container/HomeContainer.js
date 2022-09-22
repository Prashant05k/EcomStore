import Home from "../components/Home";
import { addToCart } from "../services/Actions/addRemoveActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
