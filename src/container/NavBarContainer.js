import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import { searchDataFn } from "../services/Actions/searchData";

const mapStateToProps = (state) => ({
  data: state.cartValue,
});

const mapDispatchToProps = (dispatch) => ({
  searchDataHandler: (data) => dispatch(searchDataFn(data.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
