import { combineReducers } from "redux";
import addRemoveCart from "./addRemoveCart";

const rootReducers = combineReducers({
  cartValue: addRemoveCart,
});
// console.log(rootReducers.cartValue);
export default rootReducers;
