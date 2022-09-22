import { combineReducers } from "redux";
import addRemoveCart from "./addRemoveCart";
import searchDataReducerFn from "./searchDataReducer";

const rootReducers = combineReducers({
  cartValue: addRemoveCart,
  searchValue: searchDataReducerFn,
});
// console.log(rootReducers.cartValue);
export default rootReducers;
