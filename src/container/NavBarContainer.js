import { connect } from "react-redux";
import NavBar from "../components/NavBar";

const mapStateToProps = (state) => ({
  cartItemsCount: state.cartValue.length,
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);