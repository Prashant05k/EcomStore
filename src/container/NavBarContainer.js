import { connect } from "react-redux";
import NavBar from "../components/NavBar";

const mapStateToProps = (state) => ({
  data: state.cartValue,
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);